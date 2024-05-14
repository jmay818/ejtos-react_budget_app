import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const { dispatch } = useContext(AppContext);
    const handleCurrencyChange = (event) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: event.target.value
        });
    }
    return (
        <div className='alert alert-secondary'>
        <select id="currency" className="custom-select" onChange={handleCurrencyChange}>
            <option value="$">$ Dollar</option>
            <option selected="true" value="£">£ Pound</option>
            <option value="€">€ Euro</option>
            <option value="₹">₹ Ruppee</option>
        </select>
        </div>
    );
};
export default Currency;