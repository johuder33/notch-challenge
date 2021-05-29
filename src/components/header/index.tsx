import React from 'react';
import Logo from 'assets/chefhero_logo.png';

const Header = () => {
  return (
    <div className={'header'}>
      <img alt={'Chef Hero Logo'} title={'Notch'} src={Logo} className={'logo'} />
    </div>
  );
};

export default Header;