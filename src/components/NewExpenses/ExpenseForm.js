import { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const [userInput, setUserInput] = useState({enteredTitle: '', enteredAmount: '', enteredDate: ''});
    const [isDisplayed,  setIsDisplayed] = useState(false);
    const [isBtnDisplayed,  setBtnDisplayed] = useState(true);

   
    const displayExpenseFormHandler = () => {
          setIsDisplayed(true);
          setBtnDisplayed(false);
    }

    const hideExpenseFormHandler = () => {
        setIsDisplayed(false);
        setBtnDisplayed(true);
  }

    const titleChangeHandler = event => {
        setUserInput((prevState) => {
        return { ...prevState, enteredTitle: event.target.value}
    });
    }

    const amountChangeHandler = event => {
        setUserInput((previousState) => {
        return {...previousState, enteredAmount: event.target.value}})
    }

    const dateChangeHandler = event => {
        setUserInput((previousState) => {
        return { ...previousState, enteredDate: event.target.value}})
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const newExpense = {
            title: userInput.enteredTitle,
            amount:  userInput.enteredAmount,
            date: new Date( userInput.enteredDate)
        };
        props.onAddedExpensel1(newExpense);
        setUserInput((previousState) => {
            return {enteredTitle: '', enteredAmount: '', enteredDate: ''}})
       
}

    return (
        <div>
            <form onSubmit={submitHandler}>
             <div className={isDisplayed ? '' : 'new-expense__hidden'}>
                <div className="new-expense__controls">
                    <div className="new-expense__control">
                        <label>Title</label>
                        <input type='text' value={userInput.enteredTitle} onChange={titleChangeHandler}></input>
                    </div>
                    <div className="new-expense__control">
                        <label>Amount</label>
                        <input type='number' value={userInput.enteredAmount} onChange={amountChangeHandler}></input>
                    </div>
                    <div className="new-expense__control">
                        <label>Date</label>
                        <input type='date' value={userInput.enteredDate} onChange={dateChangeHandler}></input>
                    </div>
                </div>
                <div className='new-expense__actions'>
                <button onClick={hideExpenseFormHandler}>Cancle</button>
                <button>Add Expense</button>
                </div>
            </div>
                <button className={isBtnDisplayed ? '' : 'new-expense__button__hidden'} onClick={displayExpenseFormHandler}>New Expense</button>
            </form>
        </div>
    )

}

export default ExpenseForm;