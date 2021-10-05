/* file is the same as ExpenseFprm.js but uses different approach at useState */

import React, { useState } from 'react';

import "./ExpenseForm.css";

const ExpenseForm = () => { /* instead of using three different useState we can use one by passing in an object instead of string */
	const [userInput, setUserInput] = useState({ /* one state approach */
		enteredTitle: '',
		enteredAmount: '',
		enteredDate: ''
	});

	const titleChangeHandler = (event) => { /* we automatically get the event object value at the point of time the event occurs: event.target.value */
		/* manually copying the other data in the object so it does not get lost using the spread operator */
		setUserInput((previousState) => {
			return { ...previousState, enteredTitle: event.target.value }; /* the safest way to operate on the latest snapshot, so no error is possible */
		});
	};

	const amountChangeHandler = (event) => {
		setUserInput((previousState) => {
			return { ...previousState, enteredAmount: event.target.value };
		});
	};
	
	const dateChangeHandler = (event) => {
		setUserInput((previousState) => {
			return { ...previousState, enteredDate: event.target.value };
		});
	};

	const submitHandler = (event) => {
		event.preventDefault(); /* preventing the request from being sent and page therefore will not reload */

		const expenseData = {
			title: enteredTitle,
			amount: enteredAmount,
			date: new Date(enteredDate)
		};

		
	};

	return (
		<form onSubmit={submitHandler}> 
			<div className='new-expense__controls'>
				<div className='new-expense__control'>
					<label>Title</label>
					<input type='text' onChange={titleChangeHandler} /> {/* pointer to the function that should execute when the event occurs */}
				</div>
				<div className='new-expense__control'>
					<label>Amount</label>
					<input type='number' min='0.01' step='0.01' onChange={amountChangeHandler} />
				</div>
				<div className='new-expense__control'>
					<label>Date</label>
					<input type='date' min='2020-01-01' max='2022-12-31' onChange={dateChangeHandler} />
				</div>
			</div>
			<div className='new-expense__actions'>
					<button type='submit'>Add Expense</button>
			</div>
		</form>
	);
};

export default ExpenseForm;
