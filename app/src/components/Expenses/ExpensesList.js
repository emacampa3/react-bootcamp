import ExpenseItem from "./ExpenseItem";
import './ExpensesList.css'

const ExpensesList = props => {
  if (props.items.length === 0) { /* if there are no expenses: show h2 */
    return <h2 className='expenses-list__fallback'>Found no expenses.</h2>;
  }

  return <ul className='expenses-list'>
    {props.items.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.date}
        date={expense.date}
      />
    ))}
  </ul>
};

export default ExpensesList;
