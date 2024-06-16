import { IView } from '../../types/view';
import { IEvents } from '../base/events';

export abstract class View implements IView {
    protected container: HTMLElement;

    constructor(container: HTMLElement, events: IEvents) {
        
    }

    render(data?: object | undefined): HTMLElement {
        if (typeof data === 'object') {
            Object.assign(this, data);
        }
        return this.container;
    }
}