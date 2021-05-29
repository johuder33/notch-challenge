import { AnyAction, Reducer } from 'redux';
import { IOrdersState } from '../../../types';
import { IFilterToApply } from '../../../types/filter';
import {
  INCOMING_ORDERS,
  REQUEST_ORDERS,
  FILTER_ORDERS_BY,
  RESET_FILTERS
} from './constants';

const initialState: IOrdersState = {
  items: [],
  data: [],
  page: 1,
  total: 0,
  loading: true,
  filters_to_apply: [],
  available_filters: [
    {
      id: 'vendorName',
      label: 'All Supplier',
      filterType: 'string',
      options: []
    },
    {
      id: 'orderBuyerStatus',
      label: 'All Statuses',
      filterType: 'string',
      options: []
    }
  ]
};

type Handler = (state: IOrdersState, action: AnyAction) => IOrdersState;
type HandlersReducer = {
  [key: string]: Handler;
}

const parserByFilterType: { [key: string]: (value: any) => any } = {
  string: (value: any) => String(value).trim(),
  boolean: (value: any) => Boolean(value),
  number: (value: any) => Number(value),
}

const applyFilters = (data: IOrdersState['data'], filters: IOrdersState['filters_to_apply']) => {
  if (!filters.length) {
    return data;
  }
  return data.filter(item => filters.every(({ id, value, filterType }) => {
    const parser = parserByFilterType[filterType];
    const attribute = item[id];
    return parser(attribute) === parser(value);
  }));
}

const fillFilters = (data: IOrdersState['data'], availableFilters: IOrdersState['available_filters']) => {
  const filters = availableFilters.reduce((all: any, filter) => {
    if (!all[filter.id]) {
      all[filter.id] = new Set();
    }
    return all;
  }, {});

  data.forEach(item => {
    availableFilters.forEach((filter) => {
      const attribute = filter.id;
      if (item.hasOwnProperty(attribute)) {
        filters[attribute].add(item[attribute]);
      }
    });
  });

  return availableFilters.reduce((all: any, filter) => {
    all.push({
      ...filter,
      options: Array.from(filters[filter.id]).map(value => ({ value }))
    })
    return all;
  }, []);
}

const incomingOrders: Handler = (state, { payload: { orders, total, page } }) => ({
  ...state,
  total,
  page,
  items: applyFilters(orders, state.filters_to_apply),
  data: orders,
  available_filters: fillFilters(orders, state.available_filters)
});

const requestOrders: Handler = (state, { payload: { loading } }) => ({
  ...state,
  loading
});

const addNextFilter = (filters: IOrdersState['filters_to_apply'], newFilter: IFilterToApply) => {
  const nextFilters = filters.filter((filter) => filter.id !== newFilter.id);
  if (newFilter.value) {
    nextFilters.push(newFilter)
  }
  return nextFilters;
}

const addNewFilter: Handler = (state, { payload }) => {
  const filters_to_apply = addNextFilter(state.filters_to_apply, payload);
  const itemsFiltered = applyFilters(state.data, filters_to_apply);
  return {
    ...state,
    filters_to_apply,
    items: itemsFiltered
  };
}

const resetFilterHandler: Handler = state => ({ ...state, filters_to_apply: [], items: state.data });

const handlers: HandlersReducer = {
  [INCOMING_ORDERS]: incomingOrders,
  [REQUEST_ORDERS]: requestOrders,
  [FILTER_ORDERS_BY]: addNewFilter,
  [RESET_FILTERS]: resetFilterHandler,
  default: state => state
};

const reducer: Reducer<IOrdersState> = (state = initialState, action) => {
  const { type } = action;
  const handler = handlers[type] || handlers.default;
  return handler(state, action);
};

export default reducer;
