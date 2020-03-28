import React from "react";
import classes from "./OrderSummary.module.css";
import Button from "../../UI/Button/Button";

const OrderSummary = props => {
  const ingredientSummary = Object.entries(props.ingredients).map(
    ([ingredient, quantity]) => {
      return (
        <li key={ingredient}>
          {ingredient.charAt(0).toUpperCase() + ingredient.slice(1)} :{" "}
          {quantity}
        </li>
      );
    }
  );
  return (
    <div className={classes.OrderSummary}>
      <h3>Order summary of your delicious Burger!</h3>
      <p>Order Price : $<strong>{props.totalPrice}</strong></p>
      <ul>{ingredientSummary}</ul>
      <p>Continue to checkout?</p>
      <Button btnType="Danger" clicked={props.cancelOrderHandler}>
        CANCEL
      </Button>
      <Button btnType="Success" clicked={props.continueOrderHandler}>
        CONTINUE
      </Button>
    </div>
  );
};
export default OrderSummary;
