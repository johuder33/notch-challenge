import React from 'react';
import Tag from '../tag';

const Supplier = ({ vendorName, isPendingVendorOnboarding, isBYOS }: any) => {
  return (
    <div>
      <span>{vendorName}</span>
      {!isBYOS ? <Tag level={'neutral'} text={'Market'} className={'space-left'} /> : null}
      {isPendingVendorOnboarding ? <Tag level={'warning'} rounded text={'1st'} className={'space-left'} /> : null}
    </div>
  );
};

export default Supplier;
