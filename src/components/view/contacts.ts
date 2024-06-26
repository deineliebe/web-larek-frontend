import { IContactsView } from '../../types/view';
import { settings } from '../../utils/constants';
import { FormView } from './form';
import { ICardActions } from './view';

export class ContactsView extends FormView implements IContactsView {
    protected _email: HTMLInputElement;
    protected _phone: HTMLInputElement;
    protected _button: HTMLButtonElement;

    set email(email: string) {
        this.setValue(this._email, email);
    }

    get email(): string {
        return this._email.value;
    }

    set phone(phone: string) {
        this.setValue(this._phone, phone);
    }

    get phone(): string {
        return this._phone.value;
    }

    clear(): void {
        this.email = '';
        this.phone = '';
    }

    constructor(
		protected container: HTMLElement,
		protected actions?: ICardActions
    ) {
        super(container);
        this._email = container.querySelector(settings.contactsSettings.email);
        this._phone = container.querySelector(settings.contactsSettings.phone);
        this._errorText = container.querySelector(settings.errorField);
        this._email.addEventListener('input', () => {
            if (this.email) {
                if (this.phone) {
                    this.setDisabled(this._button, false);
                    this.errorText = '';
                } else {
                    this.errorText = 'Необходимо указать номер телефона';
                }
            } else {
                this.setDisabled(this._button, true);
                this.errorText = 'Необходимо указать адрес электронной почты';
            }
        });
        this._phone.addEventListener('input', () => {
            if (this.phone) {
                if (this.email) {
                    this.setDisabled(this._button, false);
                    this.errorText = '';
                } else {
                    this.errorText = 'Необходимо указать адрес электронной почты';
                }
            } else {
                this.setDisabled(this._button, true);
                this.errorText = 'Необходимо указать номер телефона';
            }
        });
        this._button = container.querySelector(settings.contactsSettings.button);
        if (actions?.onClick) {
            this._button.addEventListener('click', actions.onClick);
        }
    }
}
