import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, dispatch, expenses } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        const totalExpenses = expenses.reduce((total, item) => {
            return (total += item.cost);
        }, 0);
        if (totalExpenses > event.target.value) {
            alert("You cannot reduce the budget value lower than the spending");
            setNewBudget(totalExpenses)
            dispatch({
                type: 'SET_BUDGET',
                payload: totalExpenses
            });
            document.getElementById('budget').value = totalExpenses;
        } else {
            setNewBudget(event.target.value);
            dispatch({
                type: 'SET_BUDGET',
                payload: event.target.value
            });
        }
    }
    return (
<div className='alert alert-secondary'>
<span>Budget: £{budget}</span>
<input id="budget" type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;
