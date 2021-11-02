import React, { useState } from 'react';

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
		event.preventDefault(); /* preventing the request from being sent and page therefore will not reload */

		const expenseData = {
			title: enteredTitle,
			amount: +enteredAmount,
			date: new Date(enteredDate),
		};

		/* receiving a function from the parent component, which we call in the child component */
		/* passing in the expense data, generated as an argument, which is a value as a parameter in new expense */
		props.onSaveExpenseData(); /* executing the function from the NewExpense.js: communicating up to the parent component */
		setEnteredTitle(""); /* two way binding: clears the form after submiting */
		setEnteredAmount("");
		setEnteredDate("");
	};

  return (
		<form onSubmit={submitHandler}> 
			<div className='new-expense__controls'>
				<div className='new-expense__control'>
					<label>Title</label>
					<input type='text' value={enteredTitle} onChange={titleChangeHandler} /> {/* pointer to the function that should execute when the event occurs */}
				</div>
				<div className='new-expense__control'>
					<label>Amount</label>
					<input type='number' min='0.01' step='0.01' value={enteredAmount} onChange={amountChangeHandler} />
				</div>
				<div className='new-expense__control'>
					<label>Date</label>
					<input type='date' min='2020-01-01' max='2022-12-31' value={enteredDate} onChange={dateChangeHandler} />
				</div>
			</div>
			<div className='new-expense__actions'>
				<button type='button' onClick={props.onCancel}>Cancel</button> {/* on click of the button here, a function called onCancel is called and executed */}
				<button type='submit'>Add Expense</button>
			</div>
		</form>
	);
};

export default ExpenseForm;
/* communication works only from parent to child and from child to parent, there is no direct connection between two sibling components
if we want to share information between them, we utilize the closest parent component that has direct on indirect access to both */
