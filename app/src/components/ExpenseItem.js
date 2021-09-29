import './ExpenseItem.css';

/* Component in react is just JS function */
function ExpenseItem() { /* shift + option + F = formatting the code */
  const expenseDate = new Date(2021, 2, 24);
  const expenseTitle = 'Car Insurance';
  const expenseAmount = 294.67;
  
  return (
    <div className="expense-item">
      <div>{expenseDate.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">${expenseAmount}</div>
      </div>
    </div>
  );
}

/* to use a component, it needs to be exported and then imported in another file */
export default ExpenseItem;
