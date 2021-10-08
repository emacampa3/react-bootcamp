/* cleaner version of the code */

import React, { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "../extra-files/ExpenseFilter";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";

const Expenses = (props) => {
	const [filteredYear, setFilteredYear] = useState("2021");

	const filterChangeHandler = (selectedYear) => {
		setFilteredYear(selectedYear);
	};

	/* filter() creates a new array, which is usefull, as we do not want to lose data */
	const filteredExpenses = props.items.filter((expense) => {
		return (
			expense.date.getFullYear().toString() === filteredYear
		); /* returns true if the year, stored in the date object, is the same as filteredYear (year, selected in the filter): only items that match, will be kept in filteredExpenses array */
	});

	return (
		<div>
			<Card className='expenses'>
				<ExpensesFilter
					selected={filteredYear}
					onChangeFilter={filterChangeHandler}
				/>
        <ExpensesList items={filteredExpenses} />
			</Card>
		</div>
	);
};

export default Expenses;
