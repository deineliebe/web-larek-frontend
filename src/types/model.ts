export type PaymentType = 'online' | 'upon receipt' | '';

export interface IProduct {
	id: string;
	description: string;
	image: string;
	title: string;
	category: string;
	price: number | null;
}

export interface IGallery {
	products: IProduct[];
	total: number;
}

export interface IBasket {
	products: IProduct[];
	addProduct(id: IProduct): void;
	removeProduct(id: string): void;
	clearBasket(): void;
}

export interface IOrder {
	payment: PaymentType;
	email: string;
	phone: string;
	address: string;
	total: number;
	items: string[];
	submitOrder(): void;
	resetOrder(): void;
}

export interface IAcceptedOrder {
	id: string;
	total: number;
}
