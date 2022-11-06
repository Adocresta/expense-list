import React from "react";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const { expenses } = props;
  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return (
    <li className="expense-item">
      <date className="expense-item__date">
        <div>{month[expenses.date.getMonth()]}</div>
        <div>{expenses.date.getDate()}</div>
        <div>{expenses.date.getFullYear()}</div>
      </date>
      <div className="expense-item__description">
        <h2>{expenses.title}</h2>
        <div className="expense-item__price">${expenses.amount}</div>
      </div>
    </li>
  );
};

export default ExpenseItem;
