import { IBasket, IProduct } from '../../types/model';

//DRAFT
export class Basket implements IBasket {
    products: IProduct[];

    constructor() {
        this.products = [];
    }

    addProduct(product: IProduct): void {
        this.products.push(product);
    }

    removeProduct(id: string): void {}

    clearBasket(): void {
        this.products = [];
    }
}
