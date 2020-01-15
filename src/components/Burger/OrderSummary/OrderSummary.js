import React from "react";
import Aux from "../../../hoc/Aux";


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
      <p>Proceed with your order?</p>
    </Aux>
  );
};
export default OrderSummary;
