import React, { useMemo } from 'react';

type RenderItem = (item: any) => JSX.Element | null;

type Column = {
  title: string;
  renderItem: RenderItem;
  id: string;
};

interface TableProps {
  columns: Column[];
  data: any[];
  keyAttribute?: string;
}

const Header = ({ columns = [] }: any) => {
  const colsElements = useMemo(() => columns.map(({ title, id }: any, index: number) => (<th key={`header-${index}`}>{title}</th>)), [columns]);

  return (
    <thead>
      <tr>
        {colsElements}
      </tr>
    </thead>
  );
};

const Table = ({
  columns,
  data,
  keyAttribute = 'id'
}: TableProps) => {
  const list = data.map((item: any, col: number) => {
    const id = item[keyAttribute];
    return (
      <tr key={`col-${id}`}>
        {columns.map(({ renderItem }: any, row: number) => <td key={`col-data-${col}-${row}`}>{renderItem(item)}</td>)}
      </tr>
    );
  });

  return (
    <div className={'table-wrapper'}>
      <table>
        <Header columns={columns} />
        <tbody>
          {list}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
