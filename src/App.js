import { useState } from "react";
import "./App.css";
import ExpenseForm from "./components/ExpenseForm/ExpenseForm";
import ExpenseList from "./components/Expenses/ExpenseList";

const App = () => {
  const [expenses, setExpenses] = useState([
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    {
      id: "e2",
      title: "New TV",
      amount: 799.49,
      date: new Date(2021, 2, 12),
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ]);

  const userInputHandler = (userInput) => {
    setExpenses((prevState) => [
      {
        id: userInput.id,
        title: userInput.title,
        amount: userInput.amount,
        date: userInput.date,
      },
      ...prevState,
    ]);
  };

  return (
    <div className="App">
      <ExpenseForm onExpenseFormSave={userInputHandler} />
      <ExpenseList expenses={expenses} />
    </div>
  );
};

export default App;
