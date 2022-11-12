import React from "react";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const { expenses } = props;
  // shows the date in the locale language and the locale date format
  const month = expenses.date.toLocaleString("en-US", { month: "long" });

  return (
    <li className="expense-item">
      <div className="expense-item__date">
        <div className="expense-date__month">{month}</div>
        <div className="expense-date__year">{expenses.date.getFullYear()}</div>
        <div className="expense-date__day">{expenses.date.getDate()}</div>
      </div>
      <div className="expense-item__description">
        <h2>{expenses.title}</h2>
        <div className="expense-item__price">${expenses.amount}</div>
      </div>
    </li>
  );
};

export default ExpenseItem;
