/* non-final version of code, but holds information too good to delete and replace */

import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpensesFilter from "../extra-files/ExpenseFilter";
import "./Expenses.css";

const Expenses = (props) => {
	const [filteredYear, setFilteredYear] = useState("2021");

	const filterChangeHandler = (selectedYear) => {
		setFilteredYear(selectedYear);
	};

	const filteredExpenses = props.items.filter(expense => { /* filter() creates a new array, which is usefull, as we do not want to lose data */
		return expense.date.getFullYear().toString() === filteredYear; /* returns true if the year, stored in the date object, is the same as filteredYear (year, selected in the filter): only items that match, will be kept in filteredExpenses array */
	});

	return (
		<div>
			<Card className='expenses'>
				<ExpensesFilter
					selected={filteredYear}
					onChangeFilter={filterChangeHandler}
				/>

				{/* dynamically assigned data: map() takes in a function that loops over every item in the array; transforming expense object into component */}
				{filteredExpenses.length === 0 && <p>No expenses found.</p>} {/* if the first condition is met, the result will be the paragraph */}
				{filteredExpenses.length > 0 && filteredExpenses.map((expense) => ( /* only showing the expenses that have the same year input as the filter, if the first condition is true, we run the following code */
					<ExpenseItem
						key={expense.id} /* key is a prop that should be always added when mapping through a list of items: prevents the page from rearanging the divs while updating */
						title={expense.title}
						amount={expense.date}
						date={expense.date}
					/>
				))}
			</Card>
		</div>
	);
};

export default Expenses;
