import { IFilter, IFilterToApply } from './filter';
import { IOrder } from './order';

export type Orders = IOrder[];

export interface IOrdersState {
  items: Orders;
  data: Orders;
  page: number;
  total: number;
  loading: boolean;
  filters_to_apply: IFilterToApply[];
  available_filters: IFilter[];
}