import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

/* Component in react is just JS function */
function ExpenseItem(props) { /* shift + option + F = formatting the code */
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </div>
  );
}

/* to use a component, it needs to be exported and then imported in another file */
export default ExpenseItem;
