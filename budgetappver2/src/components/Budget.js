import React, { useContext , useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, dispatch,remaining } = useContext(AppContext);
    const [newBudget,setNewBudget] = useState(budget);
    const [cost, setCost] = useState('');

  
    const increaseBudget = () =>{
        if(budget + 10 > 20000) {
           
            return;
        }
        
        setNewBudget(budget + 10)
      
        dispatch({
            type: 'ADD_BUDGET',
            payload: newBudget
        });

    }

    const decreaseBudget = () =>{      
        
        if(budget - 10 < budget - remaining) {
           alert('You cannot reduce the budget value lower than the spending')
            return;
        }
        setNewBudget(budget - 10)
             
        dispatch({
            type: 'RED_BUDGET',
            payload: newBudget
        });

    }

    return (
        <div className='alert alert-secondary'>
            <span>Budget: £{newBudget}</span>
            <span>
            <td><button onClick={increaseBudget}>+</button></td>
            <td><button onClick={decreaseBudget}>-</button></td>


            </span>
        </div>
    );
};

export default Budget;
