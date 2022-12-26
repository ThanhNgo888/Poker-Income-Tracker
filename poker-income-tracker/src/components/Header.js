//rfce =>tab
import React from 'react';

function Header({totalIncome}) {
  return (
    <header>
      <h1>Poker Income Tracker</h1>
      <div className='total-income'>${totalIncome}</div>
    </header>
  )
}

export default Header;
