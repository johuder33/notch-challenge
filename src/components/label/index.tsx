import React from 'react';
import classnames from 'classnames';

const Label = ({ status, text, className = '' }: any) => {
  const classes = classnames('label', className, {
    [`label--${status}`]: true
  });

  return (
    <div className={classes}>
      {text}
    </div>
  );
};

export default Label;