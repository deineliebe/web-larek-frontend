import { IEvents } from '../components/base/events';
import { PaymentType } from './model';

export interface IViewConstructor {
	new (container: HTMLElement, events?: IEvents[]): IView;
}

export interface IView {
	setDisabled(element: HTMLElement, state: boolean): void;
	render(data?: object): HTMLElement;
}

export interface IModalView {
	content: HTMLElement;
	open(): void;
	close(): void;
}

export interface IFormView {
	errorText: string;
}

export interface IPageView {
	productsInBusket: number;
	products: HTMLElement[];
}

export interface IProductInCatalogView {
	category: string;
	title: string;
	image: string;
	price: number;
}

export interface IProductFullView {
	image: string;
	category: string;
	title: string;
	description: string;
	price: number;
}

export interface IBasketView {
	products: HTMLElement[];
	total: number;
}

export interface IBasketItemView {
	busketId: number;
	title: string;
	price: number;
}

export interface IOrderView {
	address: string;
	getActiveButton(): PaymentType;
	clear(): void;
}

export interface IContactsView {
	email: string;
	phone: string;
	clear(): void;
}

export interface IAcceptedOrderView {
	total: number;
}
