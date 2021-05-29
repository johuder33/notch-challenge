import { REQUEST_ORDERS, INCOMING_ORDERS, FILTER_ORDERS_BY, REMOVE_FILTER, RESET_FILTERS } from './constants';
import OrderService from '../../../api/orders';
import {IOrder} from '../../../types/order';
import {IFilterToApply} from '../../../types/filter';

const isLoading = (loading: boolean) => ({ type: REQUEST_ORDERS, payload: { loading } });
const setOrders = (orders: IOrder[], total: number, page: number) => ({ type: INCOMING_ORDERS, payload: { orders, total, page } });

export const requestOrders = (page = 1, limit = 20) => async (dispatch: any) => {
  dispatch(isLoading(true));

  try {
    const { totalCount: total, data: orders } = await OrderService.getOrders(page, limit);
    dispatch(setOrders(orders, total, page));
  } catch(e) {
    // we must handler errors
  } finally {
    dispatch(isLoading(false));
  }
}

export const filterBy = (id: string, value: string, filterType: string) => ({
  type: FILTER_ORDERS_BY,
  payload: {
    id,
    filterType,
    value,
  } as IFilterToApply
});

export const removeFilterById = (id: string) => ({
  type: REMOVE_FILTER,
  payload: {
    filterId: id
  }
});

export const resetFilters = () => ({
  type: RESET_FILTERS
});