import { IGallery, IOrder, IProduct } from "./model";

export interface IShopApi {
    getProductList(): Promise<IGallery>;
    getProductItem(id: string): Promise<IProduct>;
    getOrder(): Promise<IOrder>;
}