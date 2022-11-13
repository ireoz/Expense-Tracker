import ExpenseForm from "./ExpenseForm"
import './NewExpense.css'

const NewExpense = (props) => {
 
    const addExpenseHandlerl1 = (newExpense) => {
    const newExpensel1 = {
        ...newExpense,
        id: Math.random().toString()
    }
    props.onAddedExpensel2(newExpensel1);
    }


    return (
        <div className="new-expense">
            <ExpenseForm onAddedExpensel1 = {addExpenseHandlerl1}></ExpenseForm>
        </div>
    )
}

export default NewExpense;