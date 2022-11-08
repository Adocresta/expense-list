import React from "react";
import { useState } from "react";

const ExpenseForm = (props) => {
  const [userInput, setUserInput] = useState("");
  const userDataHandler = (e) => {
    setUserInput(e.target.value);
    // !TODO FIX BUG THAT ONLY SHOWS PREVIOUS STATE WHEN CONSOLE LOGGING
    // console.log(userInput);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    // using default enter submit for now
    // fix later
    props.onExpenseFormSave(userInput);
  };

  return (
    <form onSubmit={submitHandler}>
      <label for="expense-cost">Cost:</label>
      <input
        onChange={userDataHandler}
        type="text"
        id="expense-cost"
        name="expense-cost"
      />
    </form>
  );
};

export default ExpenseForm;
