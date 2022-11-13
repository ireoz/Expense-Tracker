import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpenses/NewExpense";

const App = () => {

const origExpenses = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const [expenses, setNewExpense]= useState(origExpenses)

const addExpenseHandlerl2 = newExpensel1 => {
  const newExpensel2 = {
    id: Math.random().toString(),
      ...newExpensel1
  }
  
  setNewExpense(prevstate => {
   return [newExpensel2, ...prevstate]
  } )
}


  return (
    <div>
      <h2>Let's get started!</h2>
      <NewExpense onAddedExpensel2 = {addExpenseHandlerl2}></NewExpense>
      <Expenses items={expenses}></Expenses>
    </div>
  );
}

export default App;
