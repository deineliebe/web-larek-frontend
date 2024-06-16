import { IModalView } from '../../types/view';
import { ensureElement } from '../../utils/utils';
import { settings } from '../../utils/constants';
import { View } from './view';
import { IEvents } from '../base/events';

export class ModalView extends View implements IModalView {
    content: HTMLElement;
    protected _closeButton: HTMLButtonElement;

    constructor(container: HTMLElement, events: IEvents) {
        super(container, events);
        this._closeButton = ensureElement<HTMLButtonElement>(settings.modalSettings.button, container);
        this.content = ensureElement<HTMLElement>(settings.modalSettings.content, container);
    }

    render(data?: object | undefined): HTMLElement {
        super.render(data);
        this.open();
        return this.container;
    }

    open(): void {
        this.container.classList.add('modal_active');
    }

    close(): void {
        this.container.classList.remove('modal_active');
    }
}