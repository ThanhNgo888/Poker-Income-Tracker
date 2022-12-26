//rfce =>tab(using es7 nippets)
import React, { useRef } from 'react';//useRef = using refference
//=========================================================
function IncomeForm({ income, setIncome }) {
    const desc = useRef(null);
    const date = useRef(null);
    const price = useRef(null);
    //=========================================================
    const AddIncome = e => {
        e.preventDefault();

        let d = date.current.value.split("_");
        let newDate = new Date(d[0], d[1], d[2]);

        //...grab all income
        setIncome([...income, {
            "desc": desc.current.value,
            "price": price.current.value,
            "date": newDate.getTime()
        }]);
        desc.current.value = "";
        price.current.value = null;
        date.current.value = null;

        // console.log(desc.current.value);
    }
    //=========================================================
    return (
        <form className='income-form' onSubmit={AddIncome}>
            <div className='form-inner'>
                <input type="text" name="desc" id="desc" placeholder="Income Description..." ref={desc} />
                <input type="number" name='price' id="price" placeholder="Price..." ref={price}/>
                <input type="date" name="date" id="date" placeholder="Income date..." ref={date}/>
                <input type="submit" value="Add Income" />
            </div>
        </form>
    )
}
//=========================================================
export default IncomeForm
