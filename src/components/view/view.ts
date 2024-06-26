import { IView } from '../../types/view';

export interface ICardActions {
	onClick: (event: MouseEvent) => void;
}

export abstract class View implements IView {
    protected constructor(protected readonly container: HTMLElement) {}

    protected setText(element: HTMLElement, value: unknown) {
        if (element) {
            element.textContent = String(value);
        }
    }

    protected setValue(element: HTMLInputElement, value: unknown) {
        if (element) {
            element.value = String(value);
        }
    }

    setDisabled(element: HTMLElement, state: boolean) {
        if (element) {
            if (state) element.setAttribute('disabled', 'disabled');
            else element.removeAttribute('disabled');
        }
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
