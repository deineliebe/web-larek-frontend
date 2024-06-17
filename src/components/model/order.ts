import { IOrder, PaymentType } from '../../types/model';

export class Order implements IOrder {
    protected _payment: PaymentType;
    protected _address: string;
    protected _email: string;
    protected _phone: string;
    protected _total: number;
    protected _items: string[];

    constructor() {
        this._payment = '';
        this._address = '';
        this._email = '';
        this._phone = '';
        this._total = 0;
    }

    get payment(): PaymentType {
        return this._payment;
    }

    set payment(payment: PaymentType) {
        this._payment = payment;
    }

    get address(): string {
        return this._address;
    }

    set address(address: string) {
        this._address = address;
    }

    get email(): string {
        return this._email;
    }

    set email(email: string) {
        this._email = email;
    }

    get phone(): string {
        return this._phone;
    }

    set phone(phone: string) {
        this._phone = phone;
    }

    get total(): number {
        return this._total;
    }

    set total(total: number) {
        this._total = total;
    }

    get items(): string[] {
        return this._items;
    }

    set items(items: string[]) {
        this._items = [];
        for (const item of items) {
            this._items.push(item);
        }
    }

    submitOrder(): void {
        this.resetOrder();
    }

    resetOrder(): void {
        this._payment = '';
        this._address = '';
        this._email = '';
        this._phone = '';
        this._total = 0;
    }
}
