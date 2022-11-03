import "./App.css";
import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenseList = [
    {
      date: new Date("2022-11-11"),
      name: "An expensive car",
      price: 70000,
    },
    {
      date: new Date("2022-10-11"),
      name: "An expensive phone",
      price: 3999,
    },
    {
      date: new Date("2020-11-11"),
      name: "An expensive iron",
      price: 400,
    },
  ];

  return (
    <div className="App">
      <ExpenseItem expenses={expenseList} />
    </div>
  );
}

export default App;
