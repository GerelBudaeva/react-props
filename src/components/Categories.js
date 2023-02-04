import React from 'react';
import Expense from './Expense';

const Categories = (props) => {


    console.log(props)
    return (
        <div className='col'>
            <hr/>

           <h3>{props.categorie.title}</h3>
            {props.categorie.description}

            {props.expenses.filter(el => props.categorie.title === el.category)
                .map(el => <Expense key={el.id} expense={el}/>)}



        </div>
    );
};

export default Categories;
