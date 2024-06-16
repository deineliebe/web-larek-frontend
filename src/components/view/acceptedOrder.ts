import { IEvents } from '../base/events';

//DRAFT

export class acceptedModalView {
    title: HTMLSpanElement | null;
    description: HTMLSpanElement;
    button: HTMLButtonElement;

    constructor(protected container: HTMLElement, protected events: IEvents) {
        this.title = document.querySelector('.order-success__title');
    }
}
