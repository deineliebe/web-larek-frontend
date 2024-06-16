import { IShopApi } from '../../types/api';
import { IGallery, IOrder, IProduct } from '../../types/model';
import { Api } from '../base/api';

export class ShopApi extends Api implements IShopApi {
    constructor(baseUrl: string, options: RequestInit = {}) {
        super(baseUrl, options);
    }

    getProductList(): Promise<IGallery> {
        return this.get('/product/').then();
    }

    getProductItem(id: string): Promise<IProduct> {
        return this.get('/product/' + id).then();
    }

    getOrder(): Promise<IOrder> {
        return this.get('/order/').then();
    }
}
