import { IOrderView } from '../../types/view';
import { ensureElement } from '../../utils/utils';
import { settings } from '../../utils/constants';
import { FormView } from './form';
import { IEvents } from '../base/events';

export class OrderView extends FormView implements IOrderView {
    address: HTMLInputElement;
    protected _buttonCardName: HTMLButtonElement;
    protected _buttonCashName: HTMLButtonElement;
    protected _buttonSubmit: HTMLButtonElement;

    constructor(protected container: HTMLElement, protected events: IEvents) {
        super(container, events);
        this.address = ensureElement<HTMLInputElement>(settings.orderSettings.address);
        this._buttonCardName = ensureElement<HTMLButtonElement>(settings.orderSettings.buttonCardName);
        this._buttonCashName = ensureElement<HTMLButtonElement>(settings.orderSettings.buttonCashName);
        this._buttonSubmit = ensureElement<HTMLButtonElement>(settings.orderSettings.buttonSubmit);
    }

    render(data?: { id: string; title: string }): HTMLElement {
        if (data) {
        }
        return this.container;
    }
}
