import { View } from './view';

export abstract class FormView extends View {
    protected _errorText: HTMLSpanElement;

    set errorText(errorText: HTMLSpanElement) {
        this._errorText = errorText;
    }
}
