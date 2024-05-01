import React, { useContext, useState, useEffect } from 'react';
import { AppContext } from '../context/AppContext';


const Budget = () => {
    const { budget, dispatch } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);

    useEffect(() => {
        setNewBudget(budget);
    }, [budget]);

    const handleBudgetChange = (event) => {
        setNewBudget(event.target.value);
    }

    const updateBudget = () => {
        dispatch({ type: 'SET_BUDGET', payload: parseInt(newBudget) });
    }

    return (
        <div className='alert alert-secondary'>
            <span>Budget: £{budget}</span>
            <input 
                type="number" 
                step="10" 
                value={newBudget} 
                onChange={handleBudgetChange}
                onBlur={updateBudget} // Update budget when input loses focus
            />
        </div>
    );
};

export default Budget;