import React from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";

// args is used to select second element of the map method which is index lol
const ExpenseList = (props) => {
  // returns all the expenses list if selected year value is 'all' otherwises checks the selected year
  const filteredExpensesList = props.expenses.filter((expense) => {
    return props.yearFilterValue === "all"
      ? props.expenses
      : expense.date.getUTCFullYear().toString() === props.yearFilterValue;
  });

  // not using index anymore cuz it's useless
  const listCreatedDynamically = filteredExpensesList.map((expense) => {
    return <ExpenseItem key={expense.id} expenses={expense} />;
  });

  return (
    <Card>
      <ul className="card-list">{listCreatedDynamically}</ul>
    </Card>
  );
};

export default ExpenseList;
