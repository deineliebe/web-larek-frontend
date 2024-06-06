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

    addProduct(product: IProduct): void {
        this.products.push(product);
    }
    
    removeProduct(id: string): void {
        this.products.filter(elem => elem.id != id);
    }
}