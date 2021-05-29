import React from 'react';
import Typography from '../typography';
import dayjs from 'dayjs';

const DeliveryDay = ({ deliveryDay, }: any) => deliveryDay ? <Typography text={dayjs(deliveryDay).format('MMM, DD YYYY')} /> : null;

export default DeliveryDay;