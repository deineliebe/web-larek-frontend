# Проектная работа "Веб-ларек"

Используемый стек: HTML, SCSS, TS.  
Для сборки используется Webpack.  
Подключены ESLint, Prettier.  
Для работы с проектом используется коллекция, которую можно импортировать по ссылке: https://larek-api.nomoreparties.co/weblarek.postman.json. В коллекции не указан `baseUrl`, в качестве него необходимо указать адрес, где развёрнут сайт.

Структура проекта:
- src/ — исходные файлы проекта
- src/components/ — папка с JS компонентами
- src/components/types/ - папка с кодом типов и интерфейсов
- src/components/base/ — папка с базовым кодом
- src/components/model/ — папка с кодом классов моделей
- src/components/view/ — папка с кодом классов отображений

Важные файлы:
- src/pages/index.html — HTML-файл главной страницы
- src/types/model.ts — файл с типами моделей
- src/types/api.ts — файл с типом вспомогательного API
- src/types/view.ts — файл с типами отображений
- src/index.ts — точка входа приложения
- src/styles/styles.scss — корневой файл стилей
- src/utils/constants.ts — файл с константами
- src/utils/utils.ts — файл с утилитами

## Установка и запуск
Для установки и запуска проекта необходимо выполнить команды

```
npm install
npm run start
```

или

```
yarn
yarn start
```
## Сборка

```
npm run build
```

или

```
yarn build
```

## Описание проекта
В этом проекте реализован интернет-магазин с товарами для веб-разработчиков — Web-ларёк. В нём можно посмотреть каталог товаров, добавить товары в корзину и сделать заказ.  
В данной работе используется модель MVP (Model-View-Presenter).

## Базовый код
### API
Для работы с API существует файл api.ts по пути "src/components/base/api.ts".  
В нём содержатся следующие типы:
- `ApiListResponse<Type>` - тип, описывающий структуру возвращаемого значения при запросе списка продуктов с сервера;
- `ApiPostMethods` - тип с методами запросов к API, которые могут понадобится в работе;

Класс `Api` - класс, необходимый для работы с запросами к серверу.   
Этот класс содержит два поля: 
1. `baseUrl` - строка с ссылкой на сервер, которая доступна только для чтения;
2. `options` - опциональный параметр, который можно использовать для передачи дополнительных заголовков (элементов "headers") при запросах к серверу.   

У этого класса есть три метода: 
1. `handleResponse(response: Response): Promise<object>` - метод для первичной обработки полученного с сервера запроса;
2. `get(uri: string)`, метод для получения данных с сервера;
3. `post(uri: string, data: object, method: ApiPostMethods = 'POST')` - метод для отправки данных на сервер.

### Events
Для работы с событиями существует файл events.ts по пути "src/components/base/events.ts".   
В этом файле есть типы:
- `EventName` - тип для работы со строками и регулярными выражениями;
- `Subscriber` - тип функций-наблюдателей;
- `EmitterEvent` - тип со структурой события: включает в себя название события и информацию о нём.

Интерфейс брокера событий выглядит следующим образом:
```typescript
interface IEvents {
    on<T extends object>(event: EventName, callback: (data: T) => void): void;
    emit<T extends object>(event: string, data?: T): void;
    trigger<T extends object>(event: string, context?: Partial<T>): (data: T) => void;
}
```
Класс `EventEmitter` имплементирует интерфейс `IEvents`.  
Он содержит один атрибут, словарь, где ключи - названия событий, значения - множества слушателей.
Также в этом классе содержатся следующие методы:
1. `on` - метод для подписки на событие;
2. `off` - метод для отписки от события;
3. `emit` - метод для уведомления подписчиков о наступлении события.

## Список событий
События осуществляются с помощью функции класса `EventEmitter`. Элементы их перечисления (`Enum Events`):
- `SET_PRODUCTS = 'gallery:add products'` - добавление списка продуктов в галерею;
- `PREVIEW_CHANGE = 'preview:change'` - открытие модального окна с информацией о товаре;
- `TAKE_PRODUCT = 'basket:add product'` - добавление продукта в корзину;
- `OPEN_BASKET = 'basket:open'` - открытие модального окна корзины;
- `REMOVE_PRODUCT = 'basket:delete product'` - удаление продукта в корзине по идентификатору;
- `CREATE_ORDER = 'order:create'` - обработка нажатия на кнопку оформления товара в корзине;
- `ORDER_SUBMIT = 'order:submit'` - обработка нажатия на кнопку "Далее" после выбора типа оплаты и адреса;
- `ACCEPT_ORDER = 'order:accept'` - отправка данных о заказе на сервер;
- `SUCCESS_SUMBIT = 'success:submit'` - нажатие на кнопку возвращения в галерею в окне завершения заказа;
- `MODAL_WINDOW_OPEN = 'modal:open'` - открытие модального окна;
- `MODAL_WINDOW_CLOSE = 'modal:close'` - закрытие модального окна.

## Типы
Добавлен тип `PaymentType`, который может принять одно из трёх значений: "online" при оплате картой, "upon receipt" при получении,  null для нового, незаполненного заказа.

## Интерфейсы моделей
### IProduct
Интерфейс продукта.   
Продукт - это основное наполнение сайта, то, что пользователь может выбрать и купить за какое-то количество синапсов.  
Содержит следующие поля:
1. `id` - идентификатор товара, строка;
2. `description` - описание продукта, строка, пример: "Если планируете решать задачи в тренажёре, берите два.";
3. `image` - ссылка на изображение продукта, строка, пример: "/5_Dots.svg";
4. `title` - наименование продукта, строка, пример: "+1 час в сутках";
5. `category` - категория, строка, пример: "софт-скил";
6. `price` - цена товара в синапсах, число;
7. `busketId` - номер продукта в корзине. 
```typescript
interface IProduct {
    id: string;
    description: string;
    image: string;
    title: string;
    category: string;
    price: number | null;
    busketId: number;
}
```

### IGallery
Интерфейс галереи.  
Содержит следующие поля:
1. `products` - список продуктов, тип - `IProduct[]`, массив интерфейсов продуктов;
2. `total` - количество продуктов, число.
```typescript
interface IGallery {
    products: IProduct[];
    total: number;
}
```

### IBasket
Интерфейс корзины.  
Единственное поле:
1. `products` - массив продуктов `IProduct[]` с данными обо всех выбранных пользователем продуктами.

Методы:   
1. `addProduct(id: IProduct): void` - метод добавления продукта в корзину;
2. `removeProduct(id: string): void` - метод удаления продукта из корзины;
3. `clearBasket() : void` - метод удаления всех продуктов из корзины.
```typescript
interface IBasket {
    products: IProduct[];
    addProduct(id: IProduct): void;
    removeProduct(id: string): void;
    clearBasket() : void;
}
```

### IOrder
Интерфейс заказа до его оформления.  
Поля:
1. `payment` - тип оплаты, тип - `PaymentType`;
2. `email` - адрес электронной почты пользователя, строка, пример: "test@test.ru";
3. `phone` - телефон пользователя, строка, пример: "+71234567890";
4. `address` - адрес пользователя, строка, пример: "Spb Vosstania 1";
5. `total` - количество продуктов в заказе, число;
6. `items` - список с идентификаторами, массив строк.

Метод:   
1. `resetOrder() : void` - метод удаления всех данных из заказа.
```typescript
interface IOrder {
    payment: PaymentType;
    email: string;
    phone: string;
    address: string;
    total: number;
    items: string[];
    submitOrder() : void;
    resetOrder() : void;
}
```

### IAcceptedOrder
Интерфейс одобренного заказа, необходимый для работы с информацией, полученной с сервера после успешной оплаты.
Конкретно в получившемся кейсе этот интерфейс не приносит много пользы, но он был бы ценным, если бы на нашем сервере была возможность авторизации и просмотра истории своих заказов.   
Поля:
1. `id` - идентификатор заказа, строка;
2. `total` - стоимость заказа в синапсах, число.
```typescript
interface IAcceptedOrder {
    id: string;
    total: number;
}
```

## Слой данных (Model)
Слой данных (Model) — данные, в которых отражена вся ценность приложения. Этот слой содержит значительную часть бизнес-логики. При изменении данные должны попадать в отображение.   


### Gallery
Галерея - это хранилище для всех продуктов. Модель галереи хранит данные обо всех продуктах, которые видны пользователю на сайте, - список, в качестве типа которого используется массив интерфейсов продуктов `IProduct[]`, - и количество продуктов, которые находятся в галерее.  

### Basket
Корзина хранит данные о всех продуктах, которые пользователь выбрал на сайте. В идеале - с намерением купить, оформить заказ с этими товарами.   
Модель корзины хранит массив элементов с типом `IProduct`.  
Методы:   
- Метод `addProduct(id: IProduct): void` используется для того, чтобы добавить продукт в корзину, то есть, положить значение переданного продукта в массив `products`.
- Метод `removeProduct(id: string): void` используется для удаления товара из корзины. Его принцип действия очень похож на предыдущий метод с небольшими изменениями: если в массиве продуктов нет того, у которого переданный идентификатор, то никаких дествий не происходит. Нельзя удалить того, чего нет. А вот если продукт с данным идентификатором найден, он удаляется из массива.
- Метод `clearBasket(): void` очищает словарь выбранных продуктов. Этот метод будет использоваться после успешной оплаты заказа.   
Корзина играет важную роль посредника между галереей и заказом.

### Order
Модель заказа нужна для того, чтобы сохранить все данные о заказе перед отправкой запроса с этими данными на сервер.  
В этой модели хранятся данные о типе оплаты, который характеризуется двумя фиксированныи значениями, некоторые данные пользователя в виде строк: адрес  почты и номер телефона для связи, а также почтовый адрес, на который пользователь хочет оформить доставку заказа. Также модель заказа получает некоторые данные из корзины: стоимость всех выбранных товаров и их идентификаторы. Так как в корзине идентификаторы хранятся в виде словаря, массив нужно создать вручную с помощью вложенного цикла, который пробегает по словарю и переносит ключ в массив количество раз, равное значению этого ключа.   
У этой модели один метод:   
- Метод `resetOrder(): void` удаляет все данные о заказе, если пользователь удачно оплатил покупку.  

## Интерфейс для API
### IShopApi
```typescript
interface IShopApi {
	getProductList(): Promise<IProduct[]>;
	getProductItem(id: string): Promise<IProduct>;
	postOrder(data: object): Promise<IAcceptedOrder>;
}
```

## Класс для API
### ShopApi
В этой работе уже есть класс `Api`, но я создала ещё один класс, `ShopApi`, как надстройку над ним. Этот класс наследуется от класса `Api` и реализует методы, которые есть в коллекции Postman.
У этого класса есть три атрибута:
1. `getProductList(): Promise<IProduct[]>` - метод, который получает данные обо всех продуктах с сервера;
2. `getProductItem(id: string): Promise<IProduct>` - метод, который получает информацию о продукте с переданным ему идентификатором;
3. `postOrder(data: object): Promise<IAcceptedOrder>` - метод, который отправляет данные о заказе на сервер.


## Интерфейсы отображений
### IView
```typescript
interface IView {
	setDisabled(element: HTMLElement, state: boolean): void;
	render(data?: object): HTMLElement;
}
```

### IViewConstructor
Интерфейс-конструктор для создания новых объектов.   
- Содержит конструктор, принимающий HTML-разметку элемента, и события, которое можно навесить на данный элемент. Возвращает новый объект типа `IView`.
```typescript
interface IViewConstructor {
    new (container: HTMLElement, events?: IEvents[]): IView
}
```

### IModalView
```typescript
interface IModalView {
	content: HTMLElement;
	open(): void;
	close(): void;
}
```

### IFormView
```typescript
interface IFormView {
	errorText: string;
}
```

### IPageView
```typescript
interface IPageView {
	productsInBusket: number;
	products: HTMLElement[];
}
```

### IProductInCatalogView
```typescript
interface IProductInCatalogView {
	category: string;
	title: string;
	image: string;
	price: number;
}
```

### IProductFullView
```typescript
interface IProductFullView {
	image: string;
	category: string;
	title: string;
	description: string;
	price: number;
}
```
### IBasketView
```typescript
interface IBasketView {
	products: HTMLElement[];
	total: number;
}
```

### IBasketItemView
```typescript
interface IBasketItemView {
	busketId: number;
	title: string;
	price: number;
}
```

### IOrderView
```typescript
interface IOrderView {
	address: string;
	getActiveButton(): PaymentType;
	clear(): void;
}
```

### IContactsView
```typescript
interface IContactsView {
	email: string;
	phone: string;
	clear(): void;
}
```

### IAcceptedOrderView
```typescript
interface IAcceptedOrderView {
	total: number;
}
```

## Слой отображения (View)
Слой отображения (View) — интерфейс для взаимодействия с пользователем. Его задача — выводить что-то на экран и генерировать события с действиями пользователя. Никаких решений тут не принимается.

### View
Абстрактный класс, использующийся для того, чтобы избежать дублирования в классах.
- Метод отображения элемента `render(data?: object): HTMLElement` принимает опциональный аргумент типа `object`, хранящий в себе данные об объекте. Метод возвращает HTML-разметку класса, заполненную переданными данными.

### ModalView
Класс для работы с модальным окном.   
Поля:   
- `_closeButton` - `HTMLButtonElement`, кнопка для закрытия модального окна;
- `content` - `HTMLElement`, содержимое модального окна.   

Методы:   
- `open(): void` - метод, который открывает модальное окно;
- `close(): void` - метод, который закрывает открытое модальное окно и очищает все данные модального окна.

Этот класс наследует метод `render` класса `View`.

### FormView
Абстрактный класс для отображений, в которых могут возникать ошибки, связанные с некорректно введёнными данными. В данной работе - для отображений, соответствующих первым двум этапам обработк заказа: тем, где пользователь вводит тип оплаты, адрес и свои контактные данные, отображениям `OrderView` и `ContactsView`.  
Поле:   
- `errorText` с типом `HTMLSpanElement` предназначено для подстановки сообщения об ошибке.  
Я не нашла примеров ошибок в макете, но в двух шаблонах есть поле `form__errors`, в которое можно записать текстовые данные. Это поле создано для работы с элементом этого класса.

### PageView
Класс для отображения страницы сайта.
Поля:
- `productsInBusket` - `HTMLSpanElement`, элемент, в который записывается количество продуктов в корзине; 
- `products` - `HTMLElement[]`, список HTML-элементов с данными о продуктах, которые находятся на странице; 
- `wrapper` - `HTMLElement`, обёртка страницы, позволяющая блокировать положение страницы при открытии модального окна;
- `basket` - `HTMLElement`, иконка корзины в шапке галереи;
- `_button` - `HTMLButtonElement`, кнопка, по нажатию на которую открывается модальное окно корзины.

Также есть метод `locked` с параметром `isOpened` логического типа, с помощью которого положение галереи блокируется или разблокируется в зависимости от значения пер

Этот класс является наследником `View`.

### ProductInCatalogView
Класс, который реализует отображение продукта в галерее.  
Поля:   
- `category` - `HTMLSpanElement`, хранящий информацию о категории продукта;
- `title` - `HTMLHeadingElement`, заголовок с наименованием продукта;
- `image` - `HTMLImageElement`, изображение продукта;
- `price` - `HTMLSpanElement`, элемент со стоимостью товара в синапсах;
- `_button` - `HTMLButtonElement`, кнопка, по нажатию на которую открывается модальное окно с информацией о продукте.  

Этот класс является наследником `View`.

### ProductFullView
Класс, который реализует отображение информации о продукте в модальном окне при клике на продукт.  
Поля:   
- `image` - `HTMLImageElement`, изображение продукта;
- `category` - `HTMLSpanElement`, хранящий информацию о категории продукта;
- `title` - `HTMLHeadingElement`, заголовок с наименованием продукта;
- `description` - `HTMLParagraphElement`, описание товара;
- `price` - `HTMLSpanElement`, элемент со стоимостью товара в синапсах.
- `_button` - `HTMLButtonElement`, кнопка, с помощью которой пользователь может добавить продукт в корзину.

Этот класс является наследником `View`.

### BasketView
Класс, который реализует отображение информации об объектах в корзине.  
Поля:   
- `products` - `HTMLElement[]`, список продуктов с HTML-разметкой, полученной с помощью конструктора класса `BasketItemView;
- `total` - `HTMLSpanElement`, элемент, в котором содержится стоимость всех продуктов в корзине в синапсах;
- `_button` - `HTMLButtonElement`, кнопка, с помощью которой пользователь может начать оформление заказа.

Этот класс является наследником `View`.

### BasketItemView
Класс, который реализует отображение информации об одном объекте в корзине.  
Поля:   
- `busketId` - `HTMLSpanElement`, порядковый номер товара в корзине;
- `title` - `HTMLSpanElement`, элемент, содержащий название продукта;
- `price` - `HTMLSpanElement`, элемент, содержащий стоимость товара в синапсах;
- `_button` - `HTMLButtonElement`, кнопка для удаления товара из корзины.

Этот класс является наследником `View`.

### OrderView
Класс, который реализует отображение модального окна на первом этапе оформления заказа.  
Поля:   
- `_buttonOnline` - `HTMLButtonElement`, кнопка, нажатие на которую подразумевает выбор оплаты онлайн;
- `_buttonUponReceipt` - `HTMLButtonElement` - кнопка, нажатие на которую подразумевает выбор оплаты при получении;
- `address` - `HTMLInputElement`, поле ввода для адреса пользователя;
- `_buttonSubmit` - `HTMLButtonElement`, кнопка для перехода на второй этап оформления заказа.

Методы:
- getActiveButton(): PaymentType - метод возвращает значение типа оплаты, основываясь на выбранной кнопке;
- clear(): void - метод очищает данные в модальном окне.

Этот класс наследует метод класса `View` и поле класса `FormView`.

### ContactsView
Класс, который реализует отображение модального окна на втором этапе оформления заказа.  
Поля:   
- `email` - `HTMLInputElement`, поле ввода для адреса почтовой почты;
- `phone` - `HTMLInputElement`, поле ввода для номера телефона;
- `_button` - `HTMLButtonElement` - кнопка для попытки отправки данных о заказе на сервер.

Методы:
- clear(): void - метод очищает данные в модальном окне.

Этот класс наследует метод класса `View` и поле класса `FormView`.

### AcceptedOrderView
Класс, который реализует отображение модального окна после успешной оплаты заказа.  
Поле:   
- `total` - `HTMLParagraphElement`, поле, в котором выводится списанное количество синапсов;
- `_button` - `HTMLButtonElement` - кнопка для закрытия модального окна с информцией об успешном заказе.

Этот класс является наследником `View`.

## Слой управления (Controller)
Cлушает события в пользовательском интерфейсе и принимает решение:
1. что с ними делать;
2. в какую модель отнести, чтобы она среагировала и поменялась.  

В данной работе контроллер реализован с помощью вызова функций класса брокера событий в файле `index.ts` в корне проекта.