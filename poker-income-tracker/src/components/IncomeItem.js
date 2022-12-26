import React from 'react';
//=================================================
function IncomeItem( { income, index, removeIncome}) {
    let date = new Date(income.date);
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    const removeHandle = i => {
        removeIncome(i);
    }
    //=================================================
  return (
    <div className='income-item'>
        <button className='remove-item' onClick={() =>
        removeHandle(i)}>x</button>
      
    </div>
  )
}
//=================================================
export default IncomeItem;
