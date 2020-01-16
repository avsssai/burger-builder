import React from "react";
import Aux from "../../../hoc/Aux";
import Button from '../../UI/Button/Button';


const OrderSummary = props => {
    const orderSummary = Object.keys(props.ingredients).map(item => {
        return <li key={item}>
            <span style={{textTransform:'capitalize'}}>{item}</span> : {props.ingredients[item]}
        </li>
    })
  return (
    <Aux>
        <h2>Your Order!</h2>
      <h3>Here is the summary of the Delicious Burger you ordered!</h3>
      <ul>
        {orderSummary}
      </ul>
      <p>
      <strong>
        Total Price : $ {props.price.toFixed(2)}
      </strong>

      </p>
      <p>Proceed with your order?</p>
      <Button btnType='Success' clicked={props.handleSuccessClick}>Yes, Continue</Button>
      <Button btnType='Danger' clicked={props.handleCancelClick}>No, Cancel</Button>
    </Aux>
  );
};
export default OrderSummary;
