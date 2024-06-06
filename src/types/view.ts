import { IEvents } from '../components/base/events';

export interface IViewConstructor {
    new (container: HTMLElement, events?: IEvents[]): IView
}

export interface IView {
    render(data?: object): HTMLElement;
}

export interface IModalView {
    closeButton: HTMLButtonElement;
    content: HTMLElement;
    open(): void;
    close(): void;
}

export interface IFormView {
    errorText: HTMLSpanElement;
}

export interface IProductInCatalogView {
    category: HTMLSpanElement;
    title: HTMLHeadingElement;
    image: HTMLImageElement;
    price: HTMLSpanElement;
}

export interface IProductFullView {
    image: HTMLImageElement;
    category: HTMLSpanElement;
    title: HTMLHeadingElement;
    description: HTMLParagraphElement;
    price: HTMLSpanElement;
    button: HTMLButtonElement;
}

export interface IBasketView {
    products: HTMLElement[];
    total: HTMLSpanElement;
    button: HTMLButtonElement;
}

export interface IBasketItemView {
    id: HTMLSpanElement;
    title: HTMLSpanElement;
    price: HTMLSpanElement;
    button: HTMLButtonElement;
}

export interface IOrderView {
    address: HTMLInputElement;
    buttonOnline: HTMLButtonElement;
    buttonUponReceipt: HTMLButtonElement;
    buttonSubmit: HTMLButtonElement;
}

export interface IContactsView {
    email: HTMLInputElement;
    phone: HTMLInputElement;
    button: HTMLButtonElement;
}

export interface IAcceptedOrderView {
    description: HTMLParagraphElement;
}