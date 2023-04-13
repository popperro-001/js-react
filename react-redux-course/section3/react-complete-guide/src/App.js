import React, {useState} from "react";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_DATA = [
  {id: 'e1', title: 'Car Insurance', amount: 87, date: new Date(2022, 3, 12)},
  {id: 'e2', title: 'Food', amount: 100, date: new Date(2022, 2, 11)},
  {id: 'e3', title: 'Go out', amount: 115, date: new Date(2021, 5, 12)},
  {id: 'e4', title: 'Health', amount: 30, date: new Date(2020, 10, 10)}
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_DATA);

  const addExpenseHandler = expense => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses list={expenses}/>
    </div>
  );
}

export default App;