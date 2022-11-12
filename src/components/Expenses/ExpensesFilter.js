import React from "react";

const ExpensesFilter = (props) => {
  // sends selected value to ExpenseList.js
  const yearSelectHandler = (e) => {
    props.onYearSelect(e.target.value);
  };

  return (
    <div className={props.className}>
      <select name="date" id="date" onChange={yearSelectHandler}>
        <option value="all">Show All</option>
        <option value="2020">2020</option>
        <option value="2021">2021</option>
        <option value="2022">2022</option>
        <option value="2023">2023</option>
      </select>
    </div>
  );
};

export default ExpensesFilter;
