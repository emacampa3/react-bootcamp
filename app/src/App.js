import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

const App = () => {
	const expenses = [
		{
			id: "e1",
			title: "Toilet Paper",
			amount: 94.12,
			date: new Date(2020, 7, 14),
		},
		{ id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
		{
			id: "e3",
			title: "Car Insurance",
			amount: 294.67,
			date: new Date(2021, 2, 28),
		},
		{
			id: "e4",
			title: "New Desk (Wooden)",
			amount: 450,
			date: new Date(2021, 5, 12),
		},
	];

	const addExpenseHandler = expense => { /* adding a defined function, expense is the parameter */

	};

	return (
		<div> {/* parent component that interacts with both child components */}
      <NewExpense onAddExpense={addExpenseHandler} /> {/* onAddExpense is a function pointer which is passed as an argument, we can then call it inside NewExpense.js */}
			<Expenses item={expenses} /> {/* passing down the array of expenses */}
		</div>
	);
};

export default App;

/* App.js (root component) -> Expenses.js (two paths) / -> NewExpense.js (fetches the data from another component, which is then passed back up) -> NewForm.js */
