import React from 'react';
import classes from './Logo.module.css';
import burgerLogo from '../../../src/assets/burger-logo.png';

const Logo = (props) => {
  return(
    <div className={classes.Logo} >
        <img src={burgerLogo} alt="MyBurger" />
    </div>
  )
}
export default Logo;