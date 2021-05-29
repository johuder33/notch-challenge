import React from 'react';
import Typography from '../typography';
const currency = require('currency-formatter');

const currenyConfig = { code: 'CAD' };
const formatAsCAD = (amount: number) => currency.format(amount, currenyConfig);

const Total = ({ total }: any) => total > 0 ? <Typography text={formatAsCAD(total as number)} /> : null;

export default Total;