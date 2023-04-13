import { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = ({onAddExpense}) => {
  const [showForm, setShowForm] = useState(false);

  const showFormHandler = () => {
    setShowForm(true);
  };

  const hideFormHandler = () => {
    setShowForm(false);
  };

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {...enteredExpenseData, id: Math.random().toString()};

    //pass data to App.js
    onAddExpense(expenseData);
    setShowForm(false);
  };

  let newExpenseContent = <button onClick={showFormHandler}>Add New Expense</button>;
  if(showForm) {
    newExpenseContent = <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={hideFormHandler}/>;
  }

  return (
    <div className='new-expense'>
      {newExpenseContent}
    </div>
  );
};

export default NewExpense;