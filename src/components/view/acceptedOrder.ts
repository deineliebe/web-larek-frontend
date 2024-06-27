import { IAcceptedOrderView } from '../../types/view';
import { settings } from '../../utils/constants';
import { ICardActions, View } from './view';

export class AcceptedOrderView extends View<IAcceptedOrderView> {
	protected _total: HTMLParagraphElement;
	protected _button: HTMLButtonElement;

	set total(total: number) {
		this.setText(this._total, 'Списано ' + total + ' синапсов');
	}

	constructor(container: HTMLElement, protected actions?: ICardActions) {
		super(container);
		this._total = container.querySelector(settings.successSettings.total);
		this._button = container.querySelector(settings.successSettings.button);
		if (actions?.onClick) {
			this._button.addEventListener('click', actions.onClick);
		}
	}
}
