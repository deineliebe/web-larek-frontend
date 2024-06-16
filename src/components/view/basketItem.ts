import { IBasketItemView } from '../../types/view';
import { ensureElement } from '../../utils/utils';
import { settings } from '../../utils/constants';
import { View } from './view';
import { IEvents } from '../base/events';

export class BasketItemView extends View implements IBasketItemView {
    id: HTMLSpanElement;
    title: HTMLSpanElement;
    price: HTMLSpanElement;
    protected _button: HTMLButtonElement;

    constructor(protected container: HTMLElement, protected events: IEvents) {
        super(container, events);
        this.id = ensureElement<HTMLSpanElement>(settings.basketItemSettings.id);
        this.title = ensureElement<HTMLSpanElement>(settings.basketItemSettings.title);
        this.price = ensureElement<HTMLSpanElement>(settings.basketItemSettings.price);
        this._button = ensureElement<HTMLButtonElement>(settings.basketItemSettings.button);
    }

    render(data?: { id: string; title: string }): HTMLElement {
        if (data) {
        }
        return this.container;
    }
}
