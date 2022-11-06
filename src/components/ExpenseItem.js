import React from "react";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const { expenses } = props;
  const month = expenses.date.toLocaleString("en-US", { month: "long" });
  return (
    <li className="expense-item">
      <date className="expense-item__date">
        <div>{month}</div>
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
