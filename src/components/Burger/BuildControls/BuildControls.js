import React from 'react';
import classes from './BuildControls.module.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    {label:'Salad',item:'salad'},
    {label:'Cheese',item:'cheese'},
    {label:'Bacon',item:'bacon'},   
    {label:'Meat',item:'meat'}

]

const BuildControls = (props) => {
    let allControls = controls.map(ctrl => {
       return <BuildControl key={ctrl.label} label={ctrl.label} 
       ingredientAdded={()=>props.ingredientAdded(ctrl.item)}
       ingredientRemoved = {()=>props.ingredientRemoved(ctrl.item)}
       disabled = {props.disabled[ctrl.item]}
       />
    }) 
    return(
        <div className={classes.BuildControls}>
            <div className="prices"><strong>${props.totalPrice.toFixed(2)}</strong></div>
            {allControls}
            <button className={classes.OrderNow} disabled={!props.purchasable} onClick={props.toggleModal}>Order Now!</button>

        </div>
    )
}

export default BuildControls;