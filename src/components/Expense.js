import React from 'react';


const Expense = (props) => {

    console.log(props)
    return (
        <div>
            <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Amount: $ {props.expense.value}</h5>
                        <p className="card-text"> {props.expense.category}</p>
                        <p className="card-text"> {props.expense.date}</p>
                        <p className="card-text"> {props.expense.description}</p>
                    </div>
            </div>
        </div>
    );
};

export default Expense;
