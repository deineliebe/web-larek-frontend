import { IAcceptedOrder } from '../../types/model';

export class AcceptedOrder implements IAcceptedOrder {
    id: string;
    total: number;
}
