import { PaymentType } from '../../types/model';
import { IOrderView } from '../../types/view';
import { settings } from '../../utils/constants';
import { FormView } from './form';
import { ICardActions } from './view';

export class OrderView extends FormView implements IOrderView {
	protected _address: HTMLInputElement;
	protected _buttonOnline: HTMLButtonElement;
	protected _buttonUponReceipt: HTMLButtonElement;
	protected _buttonSubmit: HTMLButtonElement;

	get address(): string {
		return this._address.value;
	}

	set address(address: string) {
		this.setValue(this._address, address);
	}

	getActiveButton(): PaymentType {
		if (this._buttonOnline.classList.contains('button_alt-active'))
			return 'online';
		if (this._buttonUponReceipt.classList.contains('button_alt-active'))
			return 'upon receipt';
		return '';
	}

	clear(): void {
		this.address = '';
	}

	constructor(
		protected container: HTMLElement,
		protected actions?: ICardActions
	) {
		super(container);
		this._address = container.querySelector(settings.orderSettings.address);
		this._buttonOnline = container.querySelector(
			settings.orderSettings.buttonCardName
		);
		this._buttonUponReceipt = container.querySelector(
			settings.orderSettings.buttonCashName
		);
		this._buttonSubmit = container.querySelector(
			settings.orderSettings.buttonSubmit
		);
		this._errorText = container.querySelector(settings.errorField);
		this._address.addEventListener('input', () => {
			if (this._address.value) {
				this.setDisabled(this._buttonSubmit, false);
				this.errorText = '';
			} else {
				this.setDisabled(this._buttonSubmit, true);
				this.errorText = 'Необходимо указать адрес';
			}
		});
		this._buttonOnline.addEventListener('click', () => {
			this._buttonOnline.classList.add('button_alt-active');
			this._buttonUponReceipt.classList.remove('button_alt-active');
		});
		this._buttonUponReceipt.addEventListener('click', () => {
			this._buttonOnline.classList.remove('button_alt-active');
			this._buttonUponReceipt.classList.add('button_alt-active');
		});
		this._buttonOnline.classList.add('button_alt-active');
		if (actions?.onClick) {
			this._buttonSubmit.addEventListener('click', actions.onClick);
		}
	}
}
