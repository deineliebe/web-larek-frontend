import { IEvents } from '../components/base/events';

export interface IViewConstructor {
	new (container: HTMLElement, events?: IEvents[]): IView;
}

export interface IView {
	render(data?: object): HTMLElement;
}

export interface IModalView {
	content: HTMLElement;
	open(): void;
	close(): void;
}

export interface IFormView {
	errorText: HTMLSpanElement;
}

export interface IPageView {
	productsInBusket: HTMLSpanElement;
	products: HTMLElement[];
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
}

export interface IBasketView {
	products: HTMLElement[];
	total: HTMLSpanElement;
}

export interface IBasketItemView {
	id: HTMLSpanElement;
	title: HTMLSpanElement;
	price: HTMLSpanElement;
}

export interface IOrderView {
	address: HTMLInputElement;
}

export interface IContactsView {
	email: HTMLInputElement;
	phone: HTMLInputElement;
}

export interface IAcceptedOrderView {
	description: HTMLParagraphElement;
}
