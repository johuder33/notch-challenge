import { IOrder } from '../types/order';
const API_ENDPOINT = 'http://api.interview.staging.foodieorders.com/v3/orders/search';

interface NotchResponse {
  totalCount: number;
  data: IOrder[];
  limit: number;
}

export default class OrderService {
  static getOrders(page: number, limit: number): Promise<NotchResponse> {
    return fetch(API_ENDPOINT, {
      method: 'POST',
      body: JSON.stringify({
        page,
        limit,
        offset: (page - 1) * limit
      })
    })
    .then(response => response.json());
  }
};
