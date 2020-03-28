import React from 'react';
import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const BuildControls = (props) => {
    const controls = [
        {ingredient: 'Salad',type:'salad'},
        {ingredient: 'Bacon',type:'bacon'},
        {ingredient: 'Cheese',type:'cheese'},
        {ingredient: 'Meat',type:'meat'},
    ]
    return (
        <div className={classes.BuildControls}>
            <p><b><i>Price : ${props.price.toFixed(2)}</i></b> </p>
            {controls.map(control => {
               return <BuildControl
                key={control.type} 
                ingredient={control.ingredient} 
                className={classes.Label}
                added={()=>props.ingredientAdded(control.type)}
                removed={()=>props.ingredientRemoved(control.type)}
                disabled={props.disabledStatus[control.type]}
                 />
            })}
            <button className={classes.OrderButton} disabled={props.orderDisabled} onClick={props.placeOrder}>Order Now</button>
        </div>
    )
};

export default BuildControls;