import React, { Component } from "react";
import classes from "./OrderSummary.module.css";
import Button from "../../UI/Button/Button";

class OrderSummary extends Component  {
  componentDidUpdate(){
    console.log('[Component did update...]');
  }
  render(){
    const ingredientSummary = Object.entries(this.props.ingredients).map(
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
        <p>Order Price : $<strong>{this.props.totalPrice}</strong></p>
        <ul>{ingredientSummary}</ul>
        <p>Continue to checkout?</p>
        <Button btnType="Danger" clicked={this.props.cancelOrderHandler}>
          CANCEL
        </Button>
        <Button btnType="Success" clicked={this.props.continueOrderHandler}>
          CONTINUE
        </Button>
      </div>
    );
  
  }
};
export default OrderSummary;
