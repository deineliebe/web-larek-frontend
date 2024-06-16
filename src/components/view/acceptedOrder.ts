import { IAcceptedOrderView } from '../../types/view';
import { ensureElement } from '../../utils/utils';
import { settings } from '../../utils/constants';
import { View } from './view';
import { IEvents } from '../base/events';

export class AcceptedOrderView extends View implements IAcceptedOrderView {
    description: HTMLParagraphElement;
    protected _button: HTMLButtonElement;

    constructor(container: HTMLElement, events: IEvents) {
        super(container, events);
        this.description = ensureElement<HTMLParagraphElement>(settings.successSettings.description);
        this._button = ensureElement<HTMLButtonElement>(settings.successSettings.button);
    }

    render(data?: { id: string; title: string }): HTMLElement {
        if (data) {
        }
        return this.container;
    }
}