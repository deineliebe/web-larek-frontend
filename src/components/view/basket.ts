import { IView } from '../../types/view';
import { IEvents } from '../base/events';

//DRAFT

export class BasketView implements IView {
    protected title: HTMLSpanElement;
    protected addButton: HTMLButtonElement;
    protected removeButton: HTMLButtonElement;

    protected id: string | null = null;

    constructor(protected container: HTMLElement, protected events?: IEvents) {
        //this.title = container.querySelector('.basket__item-delete')
        //this.addButton = container.querySelector('.basket__item-delete')
        //this.removeButton = container.querySelector('.basket__item-delete')
    }

    render(data?: { id: string; title: string }): HTMLElement {
        if (data) {
            this.id = data.id;
            this.title.textContent = data.title;
        }
        return this.container;
    }
}
