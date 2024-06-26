import { IGallery, IProduct } from '../../types/model';

export class Gallery implements IGallery {
    protected _products: IProduct[];
    protected _total: number;

    constructor() {
        this._products = [];
        this._total = 0;
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

    get total(): number {
        return this._total;
    }

    set total(total: number) {
        this._total = total;
    }
}
