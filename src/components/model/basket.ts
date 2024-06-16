import { IBasket, IProduct } from '../../types/model';

export class Basket implements IBasket {
    products: IProduct[];

    constructor() {
        this.products = [];
    }

    addProduct(product: IProduct): void {
        this.products.push(product);
    }

    removeProduct(id: string): void {
        this.products = this.products.filter(function(product){ return product.id != id; });
    }

    clearBasket(): void {
        this.products = [];
    }
}
