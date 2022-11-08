import React from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";

// args is used to select second element of the map method which is index lol
const ExpenseList = (props) => {
  const listCreatedDynamically = props.expenses.map((...args) => {
    return <ExpenseItem expenses={props.expenses[args[1]]} />;
  });

  return (
    <Card>
      <ul className="card-list">{listCreatedDynamically}</ul>
    </Card>
  );
};

export default ExpenseList;
