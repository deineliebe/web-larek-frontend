import { IOrder, PaymentType } from '../../types/model';

//DRAFT
export class Order implements IOrder {
    payment: PaymentType;
    items: string[];

    constructor() {
        this.payment = '';
        this.address = '';
        this.email = '';
        this.phone = '';
        this.total = 0;
    }

    get paymentType(): PaymentType {
        return this.paymentType;
    }

    set paymentType(paymentType: PaymentType) {
        this.paymentType = paymentType;
    }

    get address(): string {
        return this.address;
    }

    set address(address: string) {
        this.address = address;
    }

    get email(): string {
        return this.email;
    }

    set email(email: string) {
        this.email = email;
    }

    get phone(): string {
        return this.phone;
    }

    set phone(phone: string) {
        this.phone = phone;
    }

    get total(): number {
        return this.total;
    }

    set total(total: number) {
        this.total = total;
    }

    submitOrder(): void {
        this.resetOrder();
    }

    resetOrder(): void {
        this.paymentType = '';
        this.address = '';
        this.email = '';
        this.phone = '';
        this.total = 0;
    }
}
