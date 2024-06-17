import { IAcceptedOrder } from '../../types/model';

export class AcceptedOrder implements IAcceptedOrder {
    protected _id: string;
    protected _total: number;

    get id(): string {
        return this._id;
    }

    set id(id: string) {
        this._id = id;
    }

    get total(): number {
        return this._total;
    }

    set total(total: number) {
        this._total = total;
    }
}
