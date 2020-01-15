import React from 'react';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
import classes from './Burger.module.css';

const Burger = (props) => {
    //get the keys of the object into an array.
    let transformedIngredients = Object.keys(props.ingredients)
    //make an array with the number individual ingredient.
        .map(item => {
            return [...Array(props.ingredients[item])]
                .map((_,i)=>{
                    return <BurgerIngredient key={item+i} type={item}/>
                })
        })
        .reduce((arr,itemToAdd)=>{
            return arr.concat(itemToAdd);
        },[]);

        if(transformedIngredients.length === 0){
             transformedIngredients = 'Please add more ingredients.';
        }
return(
        <div className={classes.Burger}>
            
            <BurgerIngredient type={'bread-top'}/>
            {transformedIngredients}
            <BurgerIngredient type={'bread-bottom'}/>
        </div>
    )
}
export default Burger;