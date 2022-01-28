import React from 'react';

const Header = ({ getKeywords }) => {
  // console.log(getKeywords);
  return (
    <header>
      <div className='logo'>LOGO</div>
      <input onChange={getKeywords} />
      <div></div>
      <br />
    </header>
  );
};

export default Header;
