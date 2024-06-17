import { IBasketItemView } from '../../types/view';
import { settings } from '../../utils/constants';
import { View } from './view';
import { IEvents } from '../base/events';

export class BasketItemView extends View implements IBasketItemView {
    protected _id: HTMLSpanElement;
    protected _title: HTMLSpanElement;
    protected _price: HTMLSpanElement;
    protected _button: HTMLButtonElement;

    set id(id: HTMLSpanElement) {
        this._id = id;
    }

    set title(title: HTMLSpanElement) {
        this._title = title;
    }

    set price(price: HTMLSpanElement) {
        this._price = price;
    }

    constructor(protected container: HTMLElement, protected events: IEvents) {
        super(container, events);
        this.id = container.querySelector(settings.basketItemSettings.id);
        this.title = container.querySelector(settings.basketItemSettings.title);
        this.price = container.querySelector(settings.basketItemSettings.price);
        this._button = container.querySelector(settings.basketItemSettings.button);
    }
}
