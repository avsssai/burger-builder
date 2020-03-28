import React from 'react';
import BurgerLogo from '../../assets/Logo.png';
import classes from './Logo.module.css';

const Logo = (props) => {
  return (
    <div className={classes.Logo}>
        <img src={BurgerLogo} alt="Logo"/>
    </div>
  )  
}
export default Logo;