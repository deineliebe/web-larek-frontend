import { IBasketView } from '../../types/view';
import { settings } from '../../utils/constants';
import { ICardActions, View } from './view';
import { IEvents } from '../base/events';

export class BasketView extends View implements IBasketView {
    protected _products: HTMLElement;
    protected _total: HTMLSpanElement;
    protected _button: HTMLButtonElement;

    set products(products: HTMLElement) {
        this._products = products;
    }

    set total(total: HTMLSpanElement) {
        this._total = total;
    }

    constructor(protected container: HTMLElement, actions?: ICardActions) {
        super(container);
        this.products = container.querySelector(settings.basketSettings.items);
        this.total = container.querySelector(settings.basketSettings.total);
        this._button = container.querySelector(settings.basketSettings.button);
    }
}
