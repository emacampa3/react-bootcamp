import React, { useState } from 'react'; 
/* useState: a React Hook that allows you to have state variables in functional components. 
You pass the initial state to this function and it returns a variable with the 
current state value (not necessarily the initial state) and another function to update this value */

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

/* Component in react is just JS function */
const ExpenseItem = (props) => { /* shift + option + F = formatting the code */

  /* we call useState directly inside a React component functions */
  const [title, setTitle] = useState(props.title); 
  /* initial value is passed in as an argument and stored inside an array constant: useState always returns an array with 2 elements */
  /* first element is a pointer to current state value (props.title), a second element is a function whic we cal later call to set a new title */
  
  const clickHandler = () => {
    setTitle('Updated!'); /* calling a state-updating function that assigns a new value */
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}></button>
    </Card>
  );
}

/* to use a component, it needs to be exported and then imported in another file */
export default ExpenseItem;