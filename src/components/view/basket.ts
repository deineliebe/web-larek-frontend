import { IBasketView } from '../../types/view';
import { settings } from '../../utils/constants';
import { ICardActions, View } from './view';
import { createElement } from '../../utils/utils';

export class BasketView extends View implements IBasketView {
    protected _products: HTMLElement;
    protected _total: HTMLSpanElement;
    protected _button: HTMLButtonElement;

    set products(products: HTMLElement[]) {
        if (products.length) {
            this._products.replaceChildren(...products);
            this.setDisabled(this._button, false);
        } else {
            this._products.replaceChildren(
                createElement<HTMLParagraphElement>('p', {
                    textContent: 'Корзина пуста',
                })
            );
            this.setDisabled(this._button, true);
        }
    }

    set total(total: number) {
        this.setText(this._total, total + ' синапсов');
    }

    constructor(
		protected container: HTMLElement,
		protected actions?: ICardActions
    ) {
        super(container);
        this._products = container.querySelector(settings.basketSettings.items);
        this._total = container.querySelector(settings.basketSettings.total);
        this._button = container.querySelector(settings.basketSettings.button);
        if (actions?.onClick) {
            this._button.addEventListener('click', actions.onClick);
        }
    }
}
