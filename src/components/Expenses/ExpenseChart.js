import React, { useState } from "react";

const ExpenseChart = (props) => {
  const { filteredExpenses } = props;
  const [months, setMonths] = useState([
    { monthName: "January", value: 0 },
    { monthName: "February", value: 0 },
    { monthName: "March", value: 0 },
    { monthName: "April", value: 0 },
    { monthName: "May", value: 0 },
    { monthName: "June", value: 0 },
    { monthName: "July", value: 0 },
    { monthName: "August", value: 0 },
    { monthName: "September", value: 0 },
    { monthName: "October", value: 0 },
    { monthName: "November", value: 0 },
    { monthName: "December", value: 0 },
  ]);

  let progressBar = [];
  let totalSpendingsThatYear = 0;

  months.forEach((month) => {
    filteredExpenses.forEach((expense) => {
      if (
        expense.date.toLocaleString("en-US", { month: "long" }) ===
        month.monthName
      ) {
        month.value += expense.amount;
      }
    });
  });

  // when new expense created it added to month as a string BUG
  months.forEach((month) => (totalSpendingsThatYear += month.value));

  months.forEach((month) =>
    progressBar.push(
      <div key={Math.random()}>
        <label htmlFor="">{month.monthName}</label>
        <progress value={month.value} max={totalSpendingsThatYear}></progress>
      </div>
    )
  );

  return (
    <div>
      {progressBar}
      {/* <div>
        <label htmlFor="">January</label>
        <progress></progress>
      </div>
      <div>
        <label htmlFor="">February</label>
        <progress></progress>
      </div>
      <div>
        <label htmlFor="">March</label>
        <progress value="32" max="100"></progress>
      </div>
      <div>
        <label htmlFor="">April</label>
        <progress></progress>
      </div>
      <div>
        <label htmlFor="">May</label>
        <progress></progress>
      </div>
      <div>
        <label htmlFor="">June</label>
        <progress></progress>
      </div>
      <div>
        <label htmlFor="">July</label>
        <progress></progress>
      </div>
      <div>
        <label htmlFor="">August</label>
        <progress></progress>
      </div>
      <div>
        <label htmlFor="">September</label>
        <progress></progress>
      </div>
      <div>
        <label htmlFor="">October</label>
        <progress></progress>
      </div>
      <div>
        <label htmlFor="">November</label>
        <progress></progress>
      </div>
      <div>
        <label htmlFor="">December</label>
        <progress></progress>
      </div> */}
    </div>
  );
};

export default ExpenseChart;
