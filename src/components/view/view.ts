import { IView } from '../../types/view';

export interface ICardActions {
    onClick: (event: MouseEvent) => void;
}

export abstract class View implements IView {
    protected container: HTMLElement;

    constructor(container: HTMLElement, actions?: ICardActions) {}

    toggleClass(element: HTMLElement, className: string, force?: boolean) {
        element.classList.toggle(className, force);
    }

    protected setText(element: HTMLElement, value: unknown) {
        if (element) {
            element.textContent = String(value);
        }
    }

    setDisabled(element: HTMLElement, state: boolean) {
        if (element) {
            if (state) element.setAttribute('disabled', 'disabled');
            else element.removeAttribute('disabled');
        }
    }

    protected setHidden(element: HTMLElement) {
        element.style.display = 'none';
    }

    protected setVisible(element: HTMLElement) {
        element.style.removeProperty('display');
    }
    
    protected setImage(element: HTMLImageElement, src: string, alt?: string) {
        if (element) {
            element.src = src;
            if (alt) {
                element.alt = alt;
            }
        }
    }

    render(data?: object | undefined): HTMLElement {
        if (typeof data === 'object') {
            Object.assign(this, data);
        }
        return this.container;
    }
}
