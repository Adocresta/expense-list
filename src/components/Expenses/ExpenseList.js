import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseChart from "./ExpenseChart";
import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";
import ExpensesFilter from "./ExpensesFilter";

const ExpenseList = (props) => {
  // desired filter method of the user. e.g Years & All Years
  const [selectedValue, setSelectedValue] = useState("all");

  // returns the filtered list to users choice
  const filteredExpensesList = props.expenses.filter((expense) => {
    return selectedValue === "all"
      ? props.expenses
      : expense.date.getUTCFullYear().toString() === selectedValue;
  });

  // creates Dynamic JSX for the list
  const listCreatedDynamically = filteredExpensesList.map((expense) => {
    return <ExpenseItem key={expense.id} expenses={expense} />;
  });

  // conditionally renders the list JSX or the list not found warning
  const expensesContent =
    filteredExpensesList.length > 0 ? (
      <Card>
        <ul className="card-list">{listCreatedDynamically}</ul>
      </Card>
    ) : (
      <p>No expenses found!</p>
    );

  return (
    <>
      <ExpenseChart filteredExpenses={filteredExpensesList} />
      <ExpensesFilter
        className="u-margin-bottom-small"
        onYearSelect={setSelectedValue}
      />
      {expensesContent}
    </>
  );
};

export default ExpenseList;
