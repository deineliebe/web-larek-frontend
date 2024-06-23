import { IProductInCatalogView } from '../../types/view';
import { settings } from '../../utils/constants';
import { View } from './view';
import { IEvents } from '../base/events';

export class ProductInCatalogView
    extends View
    implements IProductInCatalogView
{
    protected _category: HTMLSpanElement;
    protected _title: HTMLHeadingElement;
    protected _image: HTMLImageElement;
    protected _price: HTMLSpanElement;
    protected _button: HTMLButtonElement;

    set category(category: HTMLSpanElement) {
        this._category = category;
    }

    set title(title: HTMLHeadingElement) {
        this._title = title;
    }

    set image(image: HTMLImageElement) {
        this._image = image;
    }

    set price(price: HTMLSpanElement) {
        this._price = price;
    }

    constructor(protected container: HTMLElement, protected events: IEvents) {
        super(container);
        this.image = container.querySelector(settings.productFullSettings.image);
        this.category = container.querySelector(
            settings.productFullSettings.category
        );
        this.price = container.querySelector(settings.productFullSettings.price);
        this._button = container.querySelector(settings.contactsSettings.button);
    }
}
