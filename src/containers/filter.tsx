import React from 'react';
import { connect, MapStateToProps } from 'react-redux';
import { filterBy, resetFilters } from '../state/reducers/orders/actions';
import Filters from '../components/filter';
import Container from '../components/container';

const FilterContainer = ({ filters, addFilter, selected_filters, resetFilters, hasFilters }: any) => {
  return (
    <div className={'filter-container'}>
      <Container>
        <Filters filters={filters} onChange={addFilter} selected={selected_filters} />
        {hasFilters ? <button className={'reset-filter'} onClick={resetFilters}>Reset Filters</button> : null}
      </Container>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  const { available_filters, filters_to_apply } = state.orders;
  return {
    filters: available_filters,
    selected_filters: filters_to_apply.reduce((all: any, filter: any) => ({ ...all, [filter.id]: filter.value }), {}),
    hasFilters: Boolean(filters_to_apply.length)
  }
};

const mapDispatchToProps = (dispatch: any) => ({
  addFilter: (id: string, value: any, type: string) => dispatch(filterBy(id, value, type)),
  resetFilters: () => dispatch(resetFilters()),
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterContainer);
