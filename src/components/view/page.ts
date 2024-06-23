import { IPageView } from '../../types/view';
import { Events, settings } from '../../utils/constants';
import { View } from './view';
import { IEvents } from '../base/events';

export class PageView extends View implements IPageView {
    protected _productsInBusket: HTMLSpanElement;
    protected _products: HTMLElement;
    protected _wrapper: HTMLElement;
    protected _basket: HTMLElement;
    protected _button: HTMLButtonElement;

    constructor(protected container: HTMLElement, protected events: IEvents) {
        super(container);
        this.productsInBusket = container.querySelector(
            settings.pageSettings.productsInBusket
        );
        this._products = container.querySelector(settings.pageSettings.products);
        this._wrapper = container.querySelector(settings.pageSettings.wrapper);
        this._basket.addEventListener('click', () => {
			this.events.emit(Events.OPEN_BASKET);
		});
    }

    set productsInBusket(productsInBusket: HTMLSpanElement) {
        this._productsInBusket = productsInBusket;
    }

    set products(products: HTMLElement[]) {
        this._products.replaceChildren(...products);
    }

    set locked(isOpened: boolean) {
        if (isOpened) {
            this._wrapper.classList.add('page__wrapper_locked');
        } else {
            this._wrapper.classList.remove('page__wrapper_locked');
        }
    }
}
