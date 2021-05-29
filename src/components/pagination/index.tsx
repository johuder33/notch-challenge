import React, { useMemo } from 'react';
import classnames from 'classnames';

interface PaginationProps {
  currentPage: number;
  total: number;
  limit: number;
  onClick: (page: number) => void;
};

const Pagination = ({ currentPage, limit, total, onClick }: PaginationProps) => {
  const maxPages = useMemo(() => Math.ceil(total / limit), [total, limit]);
  const pages = useMemo(() => Array(maxPages).fill(0).map((_, index) => {
    const page = index + 1;
    const isCurrentPage = page === Number(currentPage);
    const classname = classnames({
      selected: page === Number(currentPage)
    });
    return (
      <li key={`page-${page}`} className={classname}>
        <a onClick={() => !isCurrentPage && onClick(page)}>{page}</a>
      </li>
    );
  }), [maxPages, currentPage]);

  return (
    <ul className={'pagination'}>
      {pages}
    </ul>
  );
};

export default Pagination;
