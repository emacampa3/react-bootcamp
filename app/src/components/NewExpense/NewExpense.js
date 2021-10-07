import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
	const SaveExpenseDataHandler = (enteredExpenseData) => {
		const expenseData = {
			...enteredExpenseData, /* copying the data */
			id: Math.random().toString() /* adding the new key */
		};
		props.onAddExpense(expenseData); /* calling the function */
	};

	return (
		<div className='new-expense'>
		{/* calling a function, passing the data as the parameter */}
			<ExpenseForm onSaveExpenseData={SaveExpenseDataHandler} /> {/* pointer to a function: a value for this prop should be a function which can be called inside the component */}
		</div>
	);
};

export default NewExpense;
