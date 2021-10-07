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

	return (
		<div>
			<Card className='expenses'>
				<ExpensesFilter
					selected={filteredYear}
					onChangeFilter={filterChangeHandler}
				/>
				{/* map takes in a function that goes over every item in an array;
				transforming expense object into component */}
				{props.items.map((expense) => (
					<ExpenseItem
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
