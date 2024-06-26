import './scss/styles.scss';
import { ensureElement, cloneTemplate } from './utils/utils';
import { Events, settings } from './utils/constants';
import { API_URL } from './utils/constants';
import { ShopApi } from './components/api/api';
import { EventEmitter } from './components/base/events';

import { Basket } from './components/model/basket';
import { Gallery } from './components/model/gallery';
import { Order } from './components/model/order';

import { ModalView } from './components/view/modal';
import { AcceptedOrderView } from './components/view/acceptedOrder';
import { BasketView } from './components/view/basket';
import { BasketItemView } from './components/view/basketItem';
import { ContactsView } from './components/view/contacts';
import { OrderView } from './components/view/order';
import { PageView } from './components/view/page';
import { ProductInCatalogView } from './components/view/productInCatalog';
import { ProductFullView } from './components/view/productFull';
import { IAcceptedOrder, IProduct } from './types/model';

const api = new ShopApi(API_URL);
const events = new EventEmitter();

// Шаблоны
const orderTemplate = cloneTemplate(
    settings.orderTemplate
);
const contactsTemplate = cloneTemplate(
    settings.contactsTemplate
);
const successTemplate = cloneTemplate(
    settings.successTemplate
);

// Модели
const basketModel = new Basket();
const galleryModel = new Gallery();
const orderModel = new Order();

// Отображения
const page = new PageView(
    ensureElement<HTMLElement>(settings.pageSelector),
    {
        onClick: () => events.emit(Events.OPEN_BASKET)
    }
);
const modal = new ModalView(
    ensureElement<HTMLElement>(settings.modalTemplate),
    events
);
const basket = new BasketView(
    cloneTemplate(settings.basketTemplate), {
        onClick: () => {events.emit(Events.CREATE_ORDER);}
    }
);
const order = new OrderView(
    orderTemplate, {
        onClick: () => {
            event.preventDefault();
            events.emit(Events.ORDER_SUBMIT);
        }
    }
);
const contacts = new ContactsView(
    contactsTemplate, {
        onClick: () => {
            event.preventDefault();
            events.emit(Events.ACCEPT_ORDER);
        }
    }
);
const acceptedOrder = new AcceptedOrderView(
    successTemplate, {
        onClick: () => {events.emit(Events.SUCCESS_SUMBIT);}
    }
);

events.on(Events.SET_PRODUCTS, handleGallerySetProducts);

function handleGallerySetProducts(items: IProduct[]) {
    const productViews: HTMLElement[] = [];
    const productModels: IProduct[] = [];
    for (const item of items) {
        const product: IProduct = {
            id: item.id,
            description: item.description,
            image: item.image,
            title: item.title,
            category: item.category,
            price: item.price,
            busketId: -1
        };
        const card = new ProductInCatalogView(cloneTemplate(settings.productInCatalogTemplate), {
            onClick: () => {events.emit(Events.PREVIEW_CHANGE, product);}
        });
        productModels.push(product);
        productViews.push(card.render(product));
    }
    galleryModel.products = productModels;
    page.products = productViews;
}

events.on(Events.PREVIEW_CHANGE, handlePreviewChange);

function handlePreviewChange(item: IProduct) {
    const card = new ProductFullView(cloneTemplate(settings.productFullTemplate), {
        onClick: () => events.emit(Events.TAKE_PRODUCT, item)
    });
    modal.render({
        content: card.render({
            title: item.title,
            image: item.image,
            category: item.category,
            description: item.description,
            price: item.price,
            id: item.id,
            busketId: basketModel.products.indexOf(item)
        })
    });
}

events.on(Events.TAKE_PRODUCT, handleBasketAddProduct);

function handleBasketAddProduct(item: IProduct) {
    galleryModel.total = galleryModel.total + 1;
    page.productsInBusket = galleryModel.total;
    basketModel.addProduct(item);
    handlePreviewChange(item);
}

events.on(Events.OPEN_BASKET, handleBasketOpen);

function handleBasketOpen() {
    const products = [];
    let index = 1;
    for (const product of basketModel.products) {
        product.busketId = index;
        const basketItem = new BasketItemView(
            cloneTemplate(settings.basketItemTemplate),
            {onClick: () => events.emit(Events.REMOVE_PRODUCT, product)}
        );
        products.push(basketItem.render(product));
        index += 1;
    }
    basket.products = products;
    basket.total = basketModel.total;
    modal.render({
        content: basket.render()
    });
}

events.on(Events.REMOVE_PRODUCT, handleBasketDeleteProduct);

function handleBasketDeleteProduct(item: IProduct) {
    basketModel.removeProduct(item.id);
    galleryModel.total = galleryModel.total - 1;
    page.productsInBusket = galleryModel.total;
    handleBasketOpen();
}

events.on(Events.CREATE_ORDER, handleOrderCreate);

function handleOrderCreate() {
    modal.render({
        content: order.render()
    });
}

events.on(Events.ORDER_SUBMIT, handleOrderSubmit);

function handleOrderSubmit() {
    orderModel.address = order.address;
    orderModel.payment = order.getActiveButton();
    modal.render({
        content: contacts.render()
    });
}

events.on(Events.ACCEPT_ORDER, handleOrderAccept);

function handleOrderAccept() {
    orderModel.email = contacts.email;
    orderModel.phone = contacts.phone;
    orderModel.total = basketModel.total;
    if (basketModel.products) {
        orderModel.items = basketModel.products.map(function(product) {
            return product.id;
        });
    }
    api.postOrder({
        'payment': orderModel.payment,
        'email': orderModel.email,
        'phone': orderModel.phone,
        'address': orderModel.address,
        'total': orderModel.total,
        'items': orderModel.items
    })
        .then((data: IAcceptedOrder) => {
            modal.render({
                content: acceptedOrder.render(data)
            });
            galleryModel.total = 0;
            page.productsInBusket = galleryModel.total;
            order.clear();
            contacts.clear();
            basketModel.clearBasket();
            orderModel.resetOrder();
        })
        .catch((errorMessage) => {
            contacts.errorText = errorMessage;
        });
}

events.on(Events.SUCCESS_SUMBIT, handleSuccessSubmit);

function handleSuccessSubmit() {
    modal.close();
}

events.on(Events.MODAL_WINDOW_OPEN, handleModalOpen);

function handleModalOpen() {
    page.locked = true;
}

events.on(Events.MODAL_WINDOW_CLOSE, handleModalClose);

function handleModalClose() {
    page.locked = false;
}

api
    .getProductList()
    .then((data) => {
        handleGallerySetProducts(data);
    })
    .catch((errorMessage) => {
        console.error(errorMessage);
    });
