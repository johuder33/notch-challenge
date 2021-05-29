import React, { useCallback, useEffect } from 'react';
import { connect } from 'react-redux';
import { requestOrders } from '../state/reducers/orders/actions';
import TableOrders from '../components/table';
import DeliveryDay from '../components/renders/DeliveryDay';
import Status from '../components/renders/Status';
import Supplier from '../components/renders/Supplier';
import Total from '../components/renders/Total';
import Pagination from '../components/pagination';
import Container from '../components/container';
import Loading from 'react-loading';

const columns = [
  {
    title: 'Status',
    renderItem: Status,
    id: 'id'
  },
  {
    title: 'Delivery Day',
    renderItem: DeliveryDay,
    id: 'id'
  },
  {
    title: 'Supplier',
    renderItem: Supplier,
    id: 'id'
  },
  {
    title: 'Total',
    renderItem: Total,
    id: 'id'
  }
];

const isNumber = (value: any) => !isNaN(Number(value));
const ORDERS_LIMIT = 20;

const Orders = ({ page, fetchOrders, loading, orders, total }: any) => {
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    let currentPage = urlParams.get('page');
    currentPage = isNumber(currentPage) ? Number(currentPage) : page;
    fetchOrders(currentPage, ORDERS_LIMIT);
  }, []);

  const onPageClick = useCallback((currentPage) => {
    window.history.pushState({}, '', `?page=${currentPage}`);
    fetchOrders(currentPage, ORDERS_LIMIT);
  }, []);

  const PaginationNode = (
    <div className={'pagination-wrapper'}>
      {loading ? <Loading color={'#1C474D'} type={'spin'} width={20} height={20} className={'spinning'} /> : null}
      <Pagination
        total={total}
        currentPage={page}
        limit={ORDERS_LIMIT}
        onClick={onPageClick}
      />
    </div>
  );

  return (
    <Container>
      {PaginationNode}
        <TableOrders
          data={orders}
          columns={columns}
        />
        {orders.length ? PaginationNode : null}
    </Container>
  );
};

const mapStateToProps = (state: any) => {
  const { items: orders, loading, total, page } = state.orders;
  return {
    orders,
    loading,
    total,
    page
  }
};
const mapDispatchToProps = (dispatch: any) => ({
  fetchOrders: (page: number, limit?: number) => {
    dispatch(requestOrders(page, limit));
  }
});

const OrdersContainer = connect(mapStateToProps, mapDispatchToProps)(Orders);

export default OrdersContainer;
