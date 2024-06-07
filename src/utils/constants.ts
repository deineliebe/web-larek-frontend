export const API_URL = `${process.env.API_ORIGIN}/api/weblarek`;
export const CDN_URL = `${process.env.API_ORIGIN}/content/weblarek`;

export enum Events {
    SET_PRODUCTS = 'gallery:add products',
    TAKE_PRODUCT = 'basket:add product',
    OPEN_BASKET = 'basket:open',
    REMOVE_PRODUCT = 'basket:delete product',
    CLEAR_BASKET = 'basket:clear',
    CREATE_ORDER = 'order:create',
    ORDER_SUBMIT = 'order:submit',
    ACCEPT_ORDER = 'order:accept',
    SUCCESS_SUMBIT = 'success:submit',
    CLEAR_ORDER = 'order:clear',
    CHOOOSE_PRODUCT = 'product:select',
    PREVIEW_CHANGE = 'preview:change',
    MODAL_WINDOW_OPEN = 'modal:open',
    MODAL_WINDOW_CLOSE = 'modal:close'
};

export const settings = {
    gallerySelector: '.gallery',
    productInCatalogSelector: '.gallery__item',
    productInCatalogTemplate: '#card-catalog',
    productInCatalogSettings: {
        category: '.card__category',
        title: '.card__title',
        image: '.card__image',
        price: '.card__price'
    },
    productFullSelector: '.card_full',
    productFullTemplate: '#card-preview',
    productFullSettings: {
        image: '.card__image',
        category: '.card__category',
        description: '.card_text',
        price: '.card__price',
        button: '.button'
    },
    basketSelector: '.basket',
    basketTemplate: '#basket',
    basketSettings: {
        items: '.basket__list',
        total: '.basket__price',
        button: '.basket__button'
    },
    basketItemSelector: '.card_compact',
    basketItemTemplate: '#card-basket',
    basketItemSettings: {
        id: '.basket__item-index',
        title: '.card__title',
        price: '.card__price',
        button: '.basket__item-delete'
    },
    orderSelector: '.order',
    orderTemplate: '#order',
    orderSettings: {
        address: '.address',
        title: '.card__title',
        price: '.card__price',
        buttonCardName: 'card',
        buttonCashName: 'cash',
        buttonSubmit: '.order__button'
    },
    contactsSelector: '.order',
    contactsTemplate: '#contacts',
    contactsSettings: {
        email: '.email',
        phone: '.phone',
        buttonSubmit: '.order__button'
    },
    successSelector: '.order-success',
    successTemplate: '#success',
    successSettings: {
        description: '.order-success__description',
        button: '.order-success__close'
    },
    errorField: 'form__errors'
};
