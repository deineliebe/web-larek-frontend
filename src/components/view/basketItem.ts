import { IBasketItemView } from '../../types/view';
import { settings } from '../../utils/constants';
import { ICardActions, View } from './view';

export class BasketItemView extends View implements IBasketItemView {
    protected _busketId: HTMLSpanElement;
    protected _title: HTMLSpanElement;
    protected _price: HTMLSpanElement;
    protected _button: HTMLButtonElement;

    set busketId(busketId: number) {
        this.setText(this._busketId, busketId);
    }

    set title(title: string) {
        this.setText(this._title, title);
    }

    set price(price: number) {
        this.setText(this._price, price);
    }

    constructor(
		protected container: HTMLElement,
		protected actions?: ICardActions
    ) {
        super(container);
        this._busketId = container.querySelector(settings.basketItemSettings.id);
        this._title = container.querySelector(settings.basketItemSettings.title);
        this._price = container.querySelector(settings.basketItemSettings.price);
        this._button = container.querySelector(settings.basketItemSettings.button);
        if (actions?.onClick) {
            container.addEventListener('click', actions.onClick);
        }
    }
}
