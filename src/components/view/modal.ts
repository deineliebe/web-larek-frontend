import { IModalView } from '../../types/view';
import { settings } from '../../utils/constants';
import { ICardActions, View } from './view';
import { IEvents } from '../base/events';

export class ModalView extends View implements IModalView {
    protected _content: HTMLElement;
    protected _closeButton: HTMLButtonElement;

    set content(content: HTMLElement) {
        this._content = content;
    }

    constructor(container: HTMLElement, actions?: ICardActions) {
        super(container);
        this._closeButton = container.querySelector(settings.modalSettings.button);
        this.content = container.querySelector(settings.modalSettings.content);
    }

    open(): void {
        this.container.classList.add('modal_active');
    }

    close(): void {
        this.container.classList.remove('modal_active');
    }

    render(data?: object | undefined): HTMLElement {
        super.render(data);
        this.open();
        return this.container;
    }
}
