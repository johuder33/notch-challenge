import React from 'react';
import classnames from 'classnames';

const Tag = ({ text, rounded, className = '', level }: any) => {
  const classname = classnames('tag', className, rounded, {
    ['tag--rounded']: rounded,
    [`tag--${level}`]: true,
  });

  return (
    <div className={classname}>
      {text}
    </div>
  );
};

export default Tag;
