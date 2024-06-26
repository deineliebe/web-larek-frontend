import { IBasket, IProduct } from '../../types/model';

export class Basket implements IBasket {
    protected _products: IProduct[];
    protected _total: number;

    constructor() {
        this._total = 0;
        this._products = [];
    }

    get products(): IProduct[] {
        return this._products;
    }

    set products(products: IProduct[]) {
        this._products = [];
        this._total = 0;
        for (const product of products) {
            this._products.push(product);
            this._total += product.price;
        }
    }

    get total(): number {
        return this._total;
    }

    addProduct(product: IProduct): void {
        this._total += product.price;
        this._products.push(product);
    }

    removeProduct(id: string): void {
        this._products = this._products.filter(function (product) {
            return product.id != id;
        });
        this._total = 0;
        for (const product of this.products) {
            this._total += product.price;
        }
    }

    clearBasket(): void {
        this._total = 0;
        this._products = [];
    }
}
