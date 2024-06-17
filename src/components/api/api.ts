import { IShopApi } from '../../types/api';
import { IGallery, IOrder, IProduct } from '../../types/model';
import { CDN_URL } from '../../utils/constants';
import { Api, ApiListResponse } from '../base/api';

export class ShopApi extends Api implements IShopApi {
    constructor(baseUrl: string, options: RequestInit = {}) {
        super(baseUrl, options);
    }

    getProductList(): Promise<IProduct[]> {
        return this.get('/product/').then(
            (productsList: ApiListResponse<IProduct>) =>
                productsList.items.map((item) => ({
                    ...item,
                    image: CDN_URL + item.image,
                }))
        );
    }

    getProductItem(id: string): Promise<IProduct> {
        return this.get('/product/' + id).then();
    }

    getOrder(): Promise<IOrder> {
        return this.get('/order/').then();
    }
}
