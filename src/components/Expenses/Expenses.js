import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpenseList from './ExpenseList';
import ExpensesChart from '../NewExpenses/ExpensesChart';
import { useState } from 'react';

const Expenses = (props) => {
const [selectedYearl2, setYear] = useState('2020');

const yearFilterHandlerl2 = selectedYearl1 => setYear(selectedYearl1);
let filteredExpenses = props.items.filter(expense => expense.date.getFullYear().toString() === selectedYearl2)


 return (<Card className='expenses'>
    <ExpensesFilter selected={selectedYearl2} onChangeFilter={yearFilterHandlerl2}/>
    <ExpensesChart expenses = {filteredExpenses}/>
    <ExpenseList items = {filteredExpenses}/>
    </Card>
 );
}

export default Expenses;