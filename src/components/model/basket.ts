import { IBasket, IProduct } from '../../types/model';

export class Basket implements IBasket {
    protected _products: IProduct[];

    constructor() {
        this._products = [];
    }

    get products(): IProduct[] {
        return this._products;
    }

    set products(products: IProduct[]) {
        this._products = [];
        for (const product of products) {
            this._products.push(product);
        }
    }

    addProduct(product: IProduct): void {
        this._products.push(product);
    }

    removeProduct(id: string): void {
        this._products = this._products.filter(function (product) {
            return product.id != id;
        });
    }

    clearBasket(): void {
        this._products = [];
    }
}
