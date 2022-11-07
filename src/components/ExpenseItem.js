import React from "react";
import Card from "./Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const { expenses } = props;
  // you can do this for day and year too
  const month = expenses.date.toLocaleString("en-US", { month: "long" });

  return (
    <Card>
      <li className="expense-item">
        <div className="expense-item__date">
          <div className="expense-date__month">{month}</div>
          <div className="expense-date__year">
            {expenses.date.getFullYear()}
          </div>
          <div className="expense-date__day">{expenses.date.getDate()}</div>
        </div>
        <div className="expense-item__description">
          <h2>{expenses.title}</h2>
          <div className="expense-item__price">${expenses.amount}</div>
        </div>
      </li>
    </Card>
  );
};

export default ExpenseItem;
