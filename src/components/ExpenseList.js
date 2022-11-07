import React from "react";
import Card from "./Card";
import ExpenseItem from "./ExpenseItem";

// args is used to select second element of the map method which is index lol
const ExpenseList = (props) => {
  let listCreatedDynamically = props.expenses.map((...args) => {
    return <ExpenseItem expenses={props.expenses[args[1]]} />;
  });

  return (
    <Card>
      <ul>{listCreatedDynamically}</ul>
    </Card>
  );
};

export default ExpenseList;
