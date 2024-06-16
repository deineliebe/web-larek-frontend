import { IContactsView } from '../../types/view';
import { ensureElement } from '../../utils/utils';
import { settings } from '../../utils/constants';
import { FormView } from './form';
import { IEvents } from '../base/events';

export class ContactsView extends FormView implements IContactsView {
    email: HTMLInputElement;
    phone: HTMLInputElement;
    protected _button: HTMLButtonElement;

    constructor(protected container: HTMLElement, protected events: IEvents) {
        super(container, events);
        this.email = ensureElement<HTMLInputElement>(settings.contactsSettings.email);
        this.phone = ensureElement<HTMLInputElement>(settings.contactsSettings.phone);
        this._button = ensureElement<HTMLButtonElement>(settings.contactsSettings.button);
    }

    render(data?: { id: string; title: string }): HTMLElement {
        if (data) {
        }
        return this.container;
    }
}
