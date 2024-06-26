import { IProductInCatalogView } from '../../types/view';
import { settings } from '../../utils/constants';
import { ICardActions, View } from './view';

export class ProductInCatalogView
    extends View
    implements IProductInCatalogView
{
    protected _category: HTMLSpanElement;
    protected _title: HTMLHeadingElement;
    protected _image: HTMLImageElement;
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
        this._image = container.querySelector(
            settings.productInCatalogSettings.image
        );
        this._category = container.querySelector(
            settings.productFullSettings.category
        );
        this._title = container.querySelector(
            settings.productInCatalogSettings.title
        );
        this._price = container.querySelector(
            settings.productInCatalogSettings.price
        );
        this._button = container.querySelector(
            settings.productInCatalogSettings.button
        );
        if (actions?.onClick) {
            container.addEventListener('click', actions.onClick);
        }
    }
}
