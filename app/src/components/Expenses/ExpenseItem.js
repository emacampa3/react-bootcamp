/* cleaner version of ExpenseItem */

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

/* stateless component: doesn't have internal state */
const ExpenseItem = (props) => {
	return (
		<Card className='expense-item'>
			<ExpenseDate date={props.date} />
			<div className='expense-item__description'>
				<h2>{props.title}</h2> 
				<div className='expense-item__price'>${props.amount}</div>
			</div>
		</Card>
	);
}

export default ExpenseItem;
