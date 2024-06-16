import { IBasketView } from '../../types/view';
import { ensureElement } from '../../utils/utils';
import { settings } from '../../utils/constants';
import { View } from './view';
import { IEvents } from '../base/events';

export class BasketView extends View implements IBasketView {
    products: HTMLElement[];
    total: HTMLSpanElement;
    protected _button: HTMLButtonElement;
    
    constructor(protected container: HTMLElement, protected events: IEvents) {
        super(container, events);
        this.products = [];
        for (const item of settings.basketSettings.items) {
            this.products.push(ensureElement<HTMLElement>(item));
        }
        this.total = ensureElement<HTMLSpanElement>(settings.basketSettings.total);
        this._button = ensureElement<HTMLButtonElement>(settings.basketSettings.button);
    }

    render(data?: { id: string; title: string }): HTMLElement {
        if (data) {
        }
        return this.container;
    }
}
