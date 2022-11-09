import React from "react";
import { useState } from "react";
import Card from "../UI/Card";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [userInput, setUserInput] = useState({
    id: Math.random().toString(),
    title: "New TV",
    // random number between 0-1000
    // ? Not working as intended only 1 random number is generated and it never changes
    amount: Math.floor(Math.random() * 1000),
    date: new Date(2021, 2, 12),
  });

  const titleChangeHandler = (e) => {
    setUserInput((prevState) => {
      return { ...prevState, title: e.target.value };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    // // using default enter submit for now FIXED
    props.onExpenseFormSave(userInput);
  };

  const amountChangeHandler = (e) => {
    setUserInput((prevState) => {
      return { ...prevState, amount: e.target.value };
    });
  };

  const dateChangeHandler = (e) => {
    setUserInput((prevState) => {
      return { ...prevState, date: new Date(e.target.value) };
    });
  };

  return (
    <Card className="expense-form u-margin-bottom-small">
      <form onSubmit={submitHandler}>
        <div className="expense-form__section">
          <label for="expense-cost" className="expense-form__label">
            Cost Title
          </label>
          <input
            onChange={titleChangeHandler}
            type="text"
            id="expense-cost"
            name="expense-cost"
          />
        </div>
        <div className="expense-form__section">
          <label for="expense-cost" className="expense-form__label">
            Amount
          </label>
          <input
            onChange={amountChangeHandler}
            type="text"
            id="expense-cost"
            name="expense-cost"
          />
        </div>
        <div className="expense-form__section">
          <label for="expense-cost" className="expense-form__label">
            Date
          </label>
          <input
            onChange={dateChangeHandler}
            type="date"
            id="expense-cost"
            name="expense-cost"
          />
        </div>
        <div className="btn">
          <button type="submit">Add Expense</button>
        </div>
      </form>
    </Card>
  );
};

export default ExpenseForm;
