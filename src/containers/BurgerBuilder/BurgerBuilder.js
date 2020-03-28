import React, { Component } from "react";
import Aux from "../../hoc/Hoc";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import Backdrop from "../../components/UI/Backdrop/Backdrop";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.4,
  meat: 0.6,
  bacon: 0.9
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      meat: 0,
      cheese: 0
    },
    totalPrice: 4,
    showModal: false
  };
  addIngredientHandler = type => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = updatedCount;
    const updatedPrice = this.state.totalPrice + INGREDIENT_PRICES[type];
    this.setState({
      ingredients: updatedIngredients,
      totalPrice: updatedPrice
    });
  };
  removeIngredientsHandler = type => {
    const oldCount = this.state.ingredients[type];
    if (oldCount <= 0) {
      return;
    }
    const updatedCount = oldCount - 1;
    const updatedIngredients = {
      ...this.state.ingredients
    };
    updatedIngredients[type] = updatedCount;
    const updatedPrice = this.state.totalPrice - INGREDIENT_PRICES[type];
    this.setState({
      ingredients: updatedIngredients,
      totalPrice: updatedPrice
    });
  };

  placeOrder = () => {
    this.setState({
        showModal:true
    })
  }
  
  closeModal = () => {
      this.setState({
          showModal:false
      })
  };

  puchaseContinueHandler = () => {
    alert('Continue with the purchase!');
  }


  render() {
    const disabled = {
      ...this.state.ingredients
    };
    let orderDisabled = true;
    let totalOrders = 0;
    for (let key in disabled) {
      if (disabled.hasOwnProperty(key)) {
        totalOrders = totalOrders + disabled[key];
        disabled[key] = disabled[key] <= 0; // returns Boolean
      }
    }
    if (totalOrders > 0) {
      orderDisabled = false;
    }
    return (
      <Aux>
        <Backdrop closeModal={this.closeModal} showBackdrop={this.state.showModal}/>
        <Modal showModal={this.state.showModal}>
          <OrderSummary ingredients={this.state.ingredients} 
          continueOrderHandler={this.puchaseContinueHandler}
          cancelOrderHandler={this.closeModal}
          totalPrice={this.state.totalPrice.toFixed(2)}
          />
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientsHandler}
          disabledStatus={disabled}
          price={this.state.totalPrice}
          orderDisabled={orderDisabled}
          showModal={this.state.showModal}
          placeOrder={this.placeOrder}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;
