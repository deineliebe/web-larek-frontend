import { IProduct } from '../../types/model';
import { IProductFullView } from '../../types/view';
import { settings } from '../../utils/constants';
import { ICardActions, View } from './view';

export class ProductFullView extends View implements IProductFullView {
	protected _image: HTMLImageElement;
	protected _category: HTMLSpanElement;
	protected _title: HTMLHeadingElement;
	protected _description: HTMLParagraphElement;
	protected _price: HTMLSpanElement;
	protected _button: HTMLButtonElement;

	set image(image: string) {
		this.setImage(this._image, image);
	}

	set category(category: string) {
		this.setText(this._category, category);
		if (!this._category.classList.contains('card__category_soft'))
			this._category.classList.remove('card__category_soft');
		switch (category) {
			case 'хард-скил':
				this._category.classList.add('card__category_hard');
				break;
			case 'другое':
				this._category.classList.add('card__category_other');
				break;
			case 'дополнительное':
				this._category.classList.add('card__category_additional');
				break;
			case 'кнопка':
				this._category.classList.add('card__category_button');
				break;
		}
	}

	set title(title: string) {
		this.setText(this._title, title);
	}

	set description(description: string) {
		this.setText(this._description, description);
	}

	set price(price: number) {
		if (price) this.setText(this._price, price + ' синапсов');
		else {
			this.setText(this._price, 'Бесценно');
			this.setDisabled(this._button, true);
		}
	}

	constructor(
		protected container: HTMLElement,
		protected actions?: ICardActions
	) {
		super(container);
		this._image = container.querySelector(settings.productFullSettings.image);
		this._category = container.querySelector(
			settings.productFullSettings.category
		);
		this._title = container.querySelector(settings.productFullSettings.title);
		this._price = container.querySelector(settings.productFullSettings.price);
		this._description = container.querySelector(
			settings.productFullSettings.description
		);
		this._button = container.querySelector(settings.productFullSettings.button);
		if (actions?.onClick) {
			this._button.addEventListener('click', actions.onClick);
		}
	}

	render(data?: IProduct | undefined): HTMLElement {
		this.container = super.render(data);
		if (data.busketId != -1) this.setDisabled(this._button, true);
		return this.container;
	}
}
