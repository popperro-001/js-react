import { useState } from "react";

import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from'./ExpensesList';
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";

const Expenses = ({ list }) => {
  const [year, setYear] = useState("2021");

  const changeYearHandler = (year) => {
    setYear(year);
  };

  const filteredList = list.filter(
    (elem) => elem.date.getFullYear().toString() === year
  );
  
  return (
    <Card className="expenses">
      <ExpensesFilter onChangeYear={changeYearHandler} selectedYear={year} />
      <ExpensesChart expenses={filteredList}/>
      <ExpensesList filteredList={filteredList}/>
    </Card>
  );
};

export default Expenses;