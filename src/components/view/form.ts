import { View } from './view';

export abstract class FormView<T> extends View<T> {
	protected _errorText: HTMLSpanElement;

	get errorText(): string {
		return this._errorText.textContent;
	}

	set errorText(errorText: string) {
		this.setText(this._errorText, errorText);
	}
}
