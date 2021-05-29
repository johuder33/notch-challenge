import React from 'react';
import classnames from 'classnames';

type Variant = 'body' | 'subtitle' | 'title' | 'caption';

interface TypographyProps {
  className?: string;
  text: string;
  variant?: Variant;
}

const Typography = ({ variant = 'body', text, className = '' }: TypographyProps) => {
  const classname = classnames(className, {
    [variant]: Boolean(variant)
  });
  return (
    <p className={classname}>{text}</p>
  );
};

export default Typography;
