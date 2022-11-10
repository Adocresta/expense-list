import React from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";

// args is used to select second element of the map method which is index lol
const ExpenseList = (props) => {
  const allExpensesList = props.expenses.map((...args) => {
    return <ExpenseItem expenses={props.expenses[args[1]]} />;
  });

  const listCreatedDynamically = props.expenses.map((...args) => {
    return props.yearFilterValue ===
      props.expenses[args[1]].date.getUTCFullYear().toString() ? (
      <ExpenseItem expenses={props.expenses[args[1]]} />
    ) : null;
  });

  const showList =
    props.yearFilterValue === "all" ? allExpensesList : listCreatedDynamically;

  return (
    <Card>
      <ul className="card-list">{showList}</ul>
    </Card>
  );
};

export default ExpenseList;
