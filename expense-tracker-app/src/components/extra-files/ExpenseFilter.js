import "./ExpensesFilter.css";

const ExpensesFilter = () => {
  const dropdownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value) /* forwarding the selected year to the Expenses.js */
  };

	return (
		<div className='expenses-filter'>
			<div className='expenses-filter__control'>
				<label>Filter by year</label>
        {/* two way binding, passing the data from Expenses.js to ExpenseFilter.js and reverse: creating a controlled/stateful component of ExpenseFilter: 
        the values as well as changes to the values are not handled at the component itself, but rather at a parent component;
        typical forstateful components: their state is managed and passed around to different components */}
				<select value={props.selected} onChange={dropdownChangeHandler}> {/* we want to listen to changes on the select element: pointing to a function */}
					<option value='2022'>2022</option>
					<option value='2021'>2021</option>
					<option value='2020'>2020</option>
					<option value='2019'>2019</option>
				</select>
			</div>
		</div>
	);
};

export default ExpensesFilter;
