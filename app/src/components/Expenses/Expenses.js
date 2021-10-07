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
				{/* dynamically assigned data: map takes in a function that loops over 
					every item in the array; transforming expense object into component */}
				{props.items.map((expense) => (
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
