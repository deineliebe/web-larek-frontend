import { IPageView } from '../../types/view';
import { settings } from '../../utils/constants';
import { ICardActions, View } from './view';

export class PageView extends View implements IPageView {
	protected _productsInBusket: HTMLSpanElement;
	protected _products: HTMLElement;
	protected _wrapper: HTMLElement;
	protected _basket: HTMLElement;
	protected _button: HTMLButtonElement;

	constructor(
		protected container: HTMLElement,
		protected actions?: ICardActions
	) {
		super(container);
		this._productsInBusket = container.querySelector(
			settings.pageSettings.productsInBusket
		);
		this._products = container.querySelector(settings.pageSettings.products);
		this._wrapper = container.querySelector(settings.pageSettings.wrapper);
		this._basket = container.querySelector(settings.pageSettings.basket);
		if (actions?.onClick) {
			this._basket.addEventListener('click', actions.onClick);
		}
	}

	set productsInBusket(productsInBusket: number) {
		this.setText(this._productsInBusket, productsInBusket);
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
