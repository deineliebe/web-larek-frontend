import { IModalView } from '../../types/view';
import { View } from './view';
import { IEvents } from '../base/events';
import { ensureElement } from '../../utils/utils';
import { Events, settings } from '../../utils/constants';

export class ModalView extends View implements IModalView {
	protected _closeButton: HTMLButtonElement;
	protected _content: HTMLElement;

	constructor(container: HTMLElement, protected events: IEvents) {
		super(container);

		this._closeButton = ensureElement<HTMLButtonElement>(
			settings.modalSettings.button,
			container
		);
		this._content = ensureElement<HTMLElement>(
			settings.modalSettings.content,
			container
		);

		this._closeButton.addEventListener('click', this.close.bind(this));
		this.container.addEventListener('click', this.close.bind(this));
		this._content.addEventListener('click', (event) => event.stopPropagation());
	}

	set content(value: HTMLElement) {
		this._content.replaceChildren(value);
	}

	open() {
		this.container.classList.add('modal_active');
		this.events.emit(Events.MODAL_WINDOW_OPEN);
	}

	close() {
		this.container.classList.remove('modal_active');
		this.content = null;
		this.events.emit(Events.MODAL_WINDOW_CLOSE);
	}

	render(data?: object | undefined): HTMLElement {
		super.render(data);
		this.open();
		return this.container;
	}
}
