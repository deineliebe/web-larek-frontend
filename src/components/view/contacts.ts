import { IContactsView } from '../../types/view';
import { settings } from '../../utils/constants';
import { FormView } from './form';
import { IEvents } from '../base/events';

export class ContactsView extends FormView implements IContactsView {
    protected _email: HTMLInputElement;
    protected _phone: HTMLInputElement;
    protected _button: HTMLButtonElement;

    set email(email: HTMLInputElement) {
        this._email = email;
    }

    set phone(phone: HTMLInputElement) {
        this._phone = phone;
    }

    constructor(protected container: HTMLElement, protected events: IEvents) {
        super(container, events);
        this.email = container.querySelector(settings.contactsSettings.email);
        this.phone = container.querySelector(settings.contactsSettings.phone);
        this._button = container.querySelector(settings.contactsSettings.button);
    }
}
