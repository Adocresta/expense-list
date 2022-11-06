import React from "react";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const { expenses } = props;
  return (
    <li className="expense-item">
      <h2 className="expense-item__date">{expenses.date.toUTCString()}</h2>
      <div className="expense-item__description">
        <h2>{expenses.title}</h2>
        <div className="expense-item__price">${expenses.amount}</div>
      </div>
    </li>
  );
};

export default ExpenseItem;
