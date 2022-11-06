import "./App.css";
import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
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
  ];

  // args is used to select second element of the map method which is index lol
  const ExpenseList = () => {
    let listCreatedDynamically = expenses.map((...args) => {
      return <ExpenseItem expenses={expenses[args[1]]} />;
    });

    return <ul>{listCreatedDynamically}</ul>;
  };

  return (
    <div className="App">
      <ExpenseList />
    </div>
  );
}

export default App;
