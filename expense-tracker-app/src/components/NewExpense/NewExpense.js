import React, { useState } from 'react';

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
	const [isEditing, setIsEditing] = useState(false); /* setIsEditing = state updating function */

	const SaveExpenseDataHandler = (enteredExpenseData) => {
		const expenseData = {
			...enteredExpenseData, /* copying the data */
			id: Math.random().toString() /* adding the new key */
		};
		props.onAddExpense(expenseData); 
		setIsEditing(false);
		/* calling the function and passing the expense data (recieved on the onAddExpense prop),
		this is lifting it up to the App component  */
	};

	const startEditingHandler = () => { /* new function that sets isEditing to true */
		setIsEditing(true);
	};

	const stopEditingHandler = () => {
		setIsEditing(false);
	};

	return (
		<div className='new-expense'>
			{!isEditing && <button onClick={startEditingHandler}>Add New Expense</button> }{/* only one is shown: button or form */}
			{isEditing && <ExpenseForm onSaveExpenseData={SaveExpenseDataHandler} onCancel={stopEditingHandler}/>} {/* pointer to a function: a value for this prop should be a function which can be called inside the component */}
		</div>
	);
};

export default NewExpense;
