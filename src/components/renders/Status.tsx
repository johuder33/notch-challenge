import React from 'react';
import Label from '../label';

const transformStatusString = (status: string) => String(status).replace(/\s/g, '-').toLowerCase();

const Status = ({ orderBuyerStatus }: any) => <Label status={transformStatusString(orderBuyerStatus)} text={orderBuyerStatus} />;

export default Status;