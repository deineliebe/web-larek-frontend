import { IProductInCatalogView } from '../../types/view';
import { ensureElement } from '../../utils/utils';
import { settings } from '../../utils/constants';
import { View } from './view';
import { IEvents } from '../base/events';

export class ProductInCatalogView extends View implements IProductInCatalogView {
    category: HTMLSpanElement;
    title: HTMLHeadingElement;
    image: HTMLImageElement;
    price: HTMLSpanElement;
    protected _button: HTMLButtonElement;

    constructor(protected container: HTMLElement, protected events: IEvents) {
        super(container, events);
        this.image = ensureElement<HTMLImageElement>(settings.productFullSettings.image);
        this.category = ensureElement<HTMLSpanElement>(settings.productFullSettings.category);
        this.price = ensureElement<HTMLSpanElement>(settings.productFullSettings.price);
        this._button = ensureElement<HTMLButtonElement>(settings.contactsSettings.button);
    }

    render(data?: { id: string; title: string }): HTMLElement {
        if (data) {
        }
        return this.container;
    }
}