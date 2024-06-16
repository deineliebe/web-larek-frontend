import { IPageView } from '../../types/view';
import { ensureElement } from '../../utils/utils';
import { settings } from '../../utils/constants';
import { View } from './view';
import { IEvents } from '../base/events';

export class PageView extends View implements IPageView {
    productsInBusket: HTMLSpanElement;
    products: HTMLElement[];
    protected _button: HTMLButtonElement;

    constructor(protected container: HTMLElement, protected events: IEvents) {
        super(container, events);
        this.productsInBusket = ensureElement<HTMLSpanElement>(settings.pageSettings.productsInBusket);
        for (const item of settings.pageSettings.products) {
            this.products.push(ensureElement<HTMLElement>(item));
        }
        this._button = ensureElement<HTMLButtonElement>(settings.contactsSettings.button);
    }

    render(data?: { id: string; title: string }): HTMLElement {
        if (data) {
        }
        return this.container;
    }
}