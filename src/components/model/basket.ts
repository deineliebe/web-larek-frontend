import { IBasket } from '../../types/model';

//DRAFT
export class Basket implements IBasket {
    products: Map<string, number>;

    constructor() {
        this.products = new Map();
    }

    get cards(): Map<string, number> {
        return this.products;
    }

    addProduct(id: string): void {
        if (!this.products.has(id)) {
            this.products.set(id, this.products.get(id)! + 1); 
        } else {
            this.products.set(id, 0); 
        }
    }

    removeProduct(id: string): void {
        if (!this.products.has(id)) {
            if (this.products.get(id) == 1) {
                this.products.delete(id); 
            } else {
                this.products.set(id, this.products.get(id)! - 1); 
            }
        }
    }

    clearBucket(): void {
        this.products = new Map();
    }
}