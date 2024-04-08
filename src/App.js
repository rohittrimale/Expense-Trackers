import { useState } from "react";
import Expenses from "./component/Expenses/Expenses";
import NewExpense from "./component/NewExpense/NewExpense";
function App() {
  const expenses = [
    { id: 1, title: "Insurance", date: new Date(2023, 7, 15), price: 100 },
    { id: 2, title: "Book", date: new Date(2024, 8, 25), price: 10 },
    { id: 3, title: "Pen", date: new Date(2025, 2, 10), price: 1 },
    { id: 4, title: "Laptop", date: new Date(2023, 9, 17), price: 200 },
  ];

  const [expenses2, setExpenses2] = useState(expenses);
  const onSaveNewExpenseDataHadler = (newExpenseData) => {
    setExpenses2([...expenses2, newExpenseData]);
  };

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Expense Tracker</h2>
      <NewExpense onAddExpense={onSaveNewExpenseDataHadler}></NewExpense>
      <Expenses expenses={expenses2} />
    </div>
  );
}

export default App;
