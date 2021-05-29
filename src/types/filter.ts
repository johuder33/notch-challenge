export interface IFilterOption {
  value: string;
}

export interface IFilterToApply {
  filterType: string;
  id: string;
  value: any;
}

export interface IFilter extends Omit<IFilterToApply, 'value'> {
  label: string;
  options: IFilterOption[];
}

export interface IFilterSelected {
  [key: string]: any;
}