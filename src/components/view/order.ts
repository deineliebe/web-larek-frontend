import { IOrderView } from '../../types/view';
import { settings } from '../../utils/constants';
import { FormView } from './form';
import { IEvents } from '../base/events';

export class OrderView extends FormView implements IOrderView {
    protected _address: HTMLInputElement;
    protected _buttonCardName: HTMLButtonElement;
    protected _buttonCashName: HTMLButtonElement;
    protected _buttonSubmit: HTMLButtonElement;

    set address(address: HTMLInputElement) {
        this._address = address;
    }

    constructor(protected container: HTMLElement, protected events: IEvents) {
        super(container, events);
        this.address = container.querySelector(settings.orderSettings.address);
        this._buttonCardName = container.querySelector(
            settings.orderSettings.buttonCardName
        );
        this._buttonCashName = container.querySelector(
            settings.orderSettings.buttonCashName
        );
        this._buttonSubmit = container.querySelector(
            settings.orderSettings.buttonSubmit
        );
    }
}
