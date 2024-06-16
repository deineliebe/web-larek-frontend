import { IGallery, IProduct } from '../../types/model';

//DRAFT
export class Gallery implements IGallery {
    total: number;

    constructor() {
        this.products = [];
    }

    get products(): IProduct[] {
        return this.products;
    }

    set products(products: IProduct[]) {
        this.products = products;
    }
}
