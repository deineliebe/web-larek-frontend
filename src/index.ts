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

const acceptedOrderModel = new AcceptedOrder();
const basketModel = new Basket();
const galleryModel = new Gallery();
const orderModel = new Order();

const modal = new ModalView(ensureElement<HTMLElement>(settings.modalTemplate), events);
const acceptedOrder = new AcceptedOrderView(ensureElement<HTMLElement>(settings.successTemplate), events);
const basket = new BasketView(ensureElement<HTMLElement>(settings.basketTemplate), events);
const basketItem = new BasketItemView(ensureElement<HTMLElement>(settings.basketItemTemplate), events);
const contacts = new ContactsView(ensureElement<HTMLElement>(settings.contactsTemplate), events);
const order = new OrderView(ensureElement<HTMLElement>(settings.orderTemplate), events);
const productFull = new ProductFullView(ensureElement<HTMLElement>(settings.productFullTemplate), events);
const productInCatalog = new ProductInCatalogView(ensureElement<HTMLElement>(settings.basketTemplate), events);

const page = new PageView(ensureElement<HTMLElement>(settings.gallerySelector), events);


function handleGallerySetProducts() {
    page.render();
}

function handleBasketAddProduct() {
}

function handleBasketOpen() {
    basket.render();
}

function handleBasketDeleteProduct() {
}

function handleBasketClear() {
    basketModel.clearBasket();
}

function handleOrderCreate() {
    order.render();
}

function handleOrderSubmit() {
}

function handleOrderAccept() {
    acceptedOrder.render();
}

function handleOrderClear() {
}

function handleSuccessSubmit() {
}

function handleProductSelect() {
}

function handlePreviewChange() {
    productFull.render();
}

function handleModalOpen() {
    modal.open();
}

function handleModalClose() {
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