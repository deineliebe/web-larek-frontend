import { IAcceptedOrder, IProduct } from './model';

export interface IShopApi {
	getProductList(): Promise<IProduct[]>;
	getProductItem(id: string): Promise<IProduct>;
	postOrder(data: object): Promise<IAcceptedOrder>;
}
