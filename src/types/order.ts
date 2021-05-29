export interface IOrder {
  [key: string]: any;
  vendorName: string;
  orderBuyerStatus: string;
  deliveryDay?: string;
  total?: number;
}