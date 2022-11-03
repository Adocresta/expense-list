import React from "react";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const [expenses] = props.expenses;
  return (
    <div className="expense-item">
      <h2 className="expene-item__date">{expenses.date.toUTCString()}</h2>
      <div className="expense-item__description">
        <h2>{expenses.name}</h2>
        <div className="expense-item__price">${expenses.name}</div>
      </div>
    </div>
  );
};

export default ExpenseItem;
