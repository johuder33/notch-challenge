import React from 'react';

interface FilterOption {
  value: string | number | boolean;
  label?: string;
}

interface Option {
  value: string;
}

export interface IFilter {
  label: string;
  id: string;
  options: Option[];
  filterType: string;
}

export interface IFilterSelected {
  [key: string]: any;
}

interface FilterProps {
  filters?: IFilter[];
  selected?: IFilterSelected;
  onChange?: (id: string, value: string, filterType: string) => void;
}

const Filter = ({ filters = [], onChange, selected = {} }: any) => {
  return filters.map(({ id, label, options = [], filterType }: any) => {
    const isSelected = selected[id];
    const selectedValue = isSelected ? selected[id] : '';
    return (
      <select
        key={id}
        onChange={(event) => {
          const { target } = event;
          onChange && onChange(id, target.value, filterType);
        }}
        value={selectedValue}
      >
        <option value={''}>{label}</option>
        {options.map(({ value }: any) => <option key={`option-${value}`} value={value}>{value}</option>)}
      </select>
    );
  });
};

export default Filter;