import React from 'react';
import classes from './NavigationItems.module.css';
import NavItem from './NavItem/NavItem';

const NavigationItems = (props) => {
  return(
    <div className={classes.Nav}>
        <ul className={classes.NavigationItems}>
            
            <NavItem link='/' active>Burger Builder</NavItem>
            <NavItem link='/'>Checkout</NavItem>
        </ul>
    </div>
  )
}
export default NavigationItems;

