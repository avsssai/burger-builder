import React,{ Component } from "react";
import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/modals/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGREDIENT_PRICES = {
    salad:0.4,
    cheese:0.8,
    meat:1.5,
    bacon:1.4
}

class BurgerBuilder extends Component{
    state = {
        ingredients : {
            'salad':0,
            'cheese':0,
            'bacon':0,
            'meat':0,
            
        },
        price:4,
        purchasable:false,
        showModal:false
    };
    
    addIngredientHandler = item => {
        const count = this.state.ingredients[item];
        const updatedCount  = count + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[item] = updatedCount;
        
        const priceAddition = INGREDIENT_PRICES[item];
        const updatedPrice = this.state.price + priceAddition;
        
        this.setState({
            ingredients:updatedIngredients,
            price:updatedPrice
        })
        this.updatePurchasableState(updatedIngredients);
    };

    removeIngredientHandler = item => {
        if(this.state.ingredients[item] < 1){
            return;
        }
        const count = this.state.ingredients[item];
        const updatedCount = count - 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[item] = updatedCount;

        const updatedPrice = this.state.price - INGREDIENT_PRICES[item];
         
        this.setState({
            ingredients:updatedIngredients,
            price:updatedPrice
        })
        this.updatePurchasableState(updatedIngredients);
    };


    updatePurchasableState = ingredients => {
        //we need to check if the number of ingredients are > 1
        //1 . convert the state to an array.
        const sum = Object.keys(ingredients).map(item => {
            return ingredients[item]
        }).reduce((sum,el)=>sum = sum +el,0)
        this.setState({purchasable:sum>0});
    }


    toggleModal = ()=>{
        this.setState({
            showModal:!this.state.showModal
        })
    }


    render(){
        const disabledIngredients = {
            ...this.state.ingredients
        };
        
        for (let key in disabledIngredients){
            disabledIngredients[key] = disabledIngredients[key] < 1;
        }
        return(
            <Aux>
                <Modal>
                    <OrderSummary ingredients={this.state.ingredients}/>
                </Modal>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls 
                ingredientAdded = {this.addIngredientHandler}
                ingredientRemoved = {this.removeIngredientHandler}
                disabled={disabledIngredients}
                totalPrice={this.state.price}
                purchasable={this.state.purchasable}
                toggleModal={this.toggleModal}
                />
            </Aux>
        )
    }
}

export default BurgerBuilder;
