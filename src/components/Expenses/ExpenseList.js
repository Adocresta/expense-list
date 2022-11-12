import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./ExpenseList.css";
import ExpensesFilter from "./ExpensesFilter";

// args is used to select second element of the map method which is index lol
const ExpenseList = (props) => {
  const [selectedYear, setSelectedYear] = useState("all");
  const yearSelectHandler = (selectedYearValue) => {
    setSelectedYear(selectedYearValue);
    // console.log(selectedYear);
  };

  // returns all the expenses list if selected year value is 'all' otherwises checks the selected year
  const filteredExpensesList = props.expenses.filter((expense) => {
    return selectedYear === "all"
      ? props.expenses
      : expense.date.getUTCFullYear().toString() === selectedYear;
  });

  // not using index anymore cuz it's useless
  const listCreatedDynamically = filteredExpensesList.map((expense) => {
    return <ExpenseItem key={expense.id} expenses={expense} />;
  });

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
      <ExpensesFilter
        className="u-margin-bottom-small"
        onYearSelect={yearSelectHandler}
      />
      {expensesContent}
    </>
  );
};

export default ExpenseList;
