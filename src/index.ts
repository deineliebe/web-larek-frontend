import './scss/styles.scss';
import { ensureElement, cloneTemplate } from './utils/utils';
import { Events, settings } from './utils/constants';
import { API_URL } from './utils/constants';
import { ShopApi } from './components/api/api';
import { EventEmitter } from './components/base/events';

import { AcceptedOrder } from './components/model/acceptedOrder';
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

const api = new ShopApi(API_URL);
const events = new EventEmitter();

const catalogItemTemplate = ensureElement<HTMLTemplateElement>(
    settings.productInCatalogTemplate
);
const cardFullTemplate = ensureElement<HTMLTemplateElement>(
    settings.productFullTemplate
);
const basketTemplate = ensureElement<HTMLTemplateElement>(
    settings.basketTemplate
);
const basketItemTemplate = ensureElement<HTMLTemplateElement>(
    settings.basketItemTemplate
);
const orderTemplate = ensureElement<HTMLTemplateElement>(
    settings.orderTemplate
);
const contactsTemplate = ensureElement<HTMLTemplateElement>(
    settings.contactsTemplate
);
const successTemplate = ensureElement<HTMLTemplateElement>(
    settings.successTemplate
);

const acceptedOrderModel = new AcceptedOrder();
const basketModel = new Basket();
const galleryModel = new Gallery();
const orderModel = new Order();

const modal = new ModalView(
    ensureElement<HTMLElement>(settings.modalTemplate),
    events
);
const acceptedOrder = new AcceptedOrderView(
    ensureElement<HTMLElement>(settings.successTemplate),
    events
);
const basket = new BasketView(
    ensureElement<HTMLElement>(settings.basketTemplate),
    events
);
const basketItem = new BasketItemView(
    ensureElement<HTMLElement>(settings.basketItemTemplate),
    events
);
const contacts = new ContactsView(
    ensureElement<HTMLElement>(settings.contactsTemplate),
    events
);
const order = new OrderView(
    ensureElement<HTMLElement>(settings.orderTemplate),
    events
);
const productFull = new ProductFullView(
    ensureElement<HTMLElement>(settings.productFullTemplate),
    events
);
const productInCatalog = new ProductInCatalogView(
    ensureElement<HTMLElement>(settings.basketTemplate),
    events
);

const page = new PageView(
    ensureElement<HTMLElement>(settings.pageSelector),
    events
);

function handleGallerySetProducts() {
    //Доделаю во второй части работы
}

function handleBasketAddProduct() {
    //Доделаю во второй части работы
}

function handleBasketOpen() {
    //Доделаю во второй части работы
}

function handleBasketDeleteProduct() {
    //Доделаю во второй части работы
}

function handleBasketClear() {
    //Доделаю во второй части работы
}

function handleOrderCreate() {
    //Доделаю во второй части работы
}

function handleOrderSubmit() {
    //Доделаю во второй части работы
}

function handleOrderAccept() {
    //Доделаю во второй части работы
}

function handleOrderClear() {
    //Доделаю во второй части работы
}

function handleSuccessSubmit() {
    //Доделаю во второй части работы
}

function handleProductSelect() {
    //Доделаю во второй части работы
}

function handlePreviewChange() {
    //Доделаю во второй части работы
}

function handleModalOpen() {
    page.locked = true;
    modal.open();
}

function handleModalClose() {
    page.locked = false;
    modal.close();
}

events.on(Events.SET_PRODUCTS, handleGallerySetProducts);
events.on(Events.TAKE_PRODUCT, handleBasketAddProduct);
events.on(Events.OPEN_BASKET, handleBasketOpen);
events.on(Events.REMOVE_PRODUCT, handleBasketDeleteProduct);
events.on(Events.CLEAR_BASKET, handleBasketClear);
events.on(Events.CREATE_ORDER, handleOrderCreate);
events.on(Events.ORDER_SUBMIT, handleOrderSubmit);
events.on(Events.ACCEPT_ORDER, handleOrderAccept);
events.on(Events.SUCCESS_SUMBIT, handleSuccessSubmit);
events.on(Events.CLEAR_ORDER, handleOrderClear);
events.on(Events.CHOOOSE_PRODUCT, handleProductSelect);
events.on(Events.PREVIEW_CHANGE, handlePreviewChange);
events.on(Events.MODAL_WINDOW_OPEN, handleModalOpen);
events.on(Events.MODAL_WINDOW_CLOSE, handleModalClose);

api
    .getProductList()
    .then((data) => {
        /*galleryModel.products = data;
        for (let product of data) {
            const cardItem = new ProductInCatalogView(catalogItemTemplate, events);
           
        }
        Доделаю во второй части работы*/
    })
    .catch((errorMessage) => {
        console.log(errorMessage);
    });
