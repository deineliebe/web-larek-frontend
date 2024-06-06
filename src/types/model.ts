export type PaymentType = 'online' | 'upon receipt' | '';

export interface IProduct {
    id: string;
    description: string;
    image: string;
    title: string;
    category: string;
    price: number;
}

export interface IGallery {
    products: IProduct[];
    total: number;
    addProduct(product: IProduct): void;
    removeProduct(id: string): void;
}

export interface IBasket {
    products: Map<string, number>;
    addProduct(id: string): void;
    removeProduct(id: string): void;
    clearBucket() : void;
}

export interface IOrder {
    payment: PaymentType;
    email: string;
    phone: string;
    address: string;
    total: number;
    items: string[];
    submitOrder() : void;
    resetOrder() : void;
}

export interface IAcceptedOrder {
    id: string;
    total: number;
}