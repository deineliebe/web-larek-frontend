import { IProductFullView } from '../../types/view';
import { settings } from '../../utils/constants';
import { View } from './view';
import { IEvents } from '../base/events';

export class ProductFullView extends View implements IProductFullView {
    protected _image: HTMLImageElement;
    protected _category: HTMLSpanElement;
    protected _title: HTMLHeadingElement;
    protected _description: HTMLParagraphElement;
    protected _price: HTMLSpanElement;
    protected _button: HTMLButtonElement;

    set image(image: HTMLImageElement) {
        this._image = image;
    }

    set category(category: HTMLSpanElement) {
        this._category = category;
    }

    set title(title: HTMLHeadingElement) {
        this._title = title;
    }

    set description(description: HTMLParagraphElement) {
        this._description = description;
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
        this.description = container.querySelector(
            settings.productFullSettings.description
        );
        this.price = container.querySelector(settings.productFullSettings.price);
        this._button = container.querySelector(settings.productFullSettings.button);
    }
}
