import { IAcceptedOrderView } from '../../types/view';
import { settings } from '../../utils/constants';
import { View } from './view';
import { IEvents } from '../base/events';

export class AcceptedOrderView extends View implements IAcceptedOrderView {
    protected _title: HTMLHeadingElement;
    protected _description: HTMLParagraphElement;
    protected _button: HTMLButtonElement;

    set description(description: HTMLParagraphElement) {
        this._description = description;
    }

    constructor(container: HTMLElement, events: IEvents) {
        super(container, events);
        this._description = container.querySelector(
            settings.successSettings.description
        );
        this._button = container.querySelector(settings.successSettings.button);
    }
}
