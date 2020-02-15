import React from 'react';
import Logo from '../../../components/Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.module.css';
import Backdrop from '../../UI/backdrop/Backdrop';
import Aux from '../../../hoc/Aux';

const SideDrawer = (props) => {
    const attachedClasses = [classes.SideDrawer, props.show ? classes.Open : classes.Close].join(' ');
  return(
      <Aux >
            <Backdrop showBackdrop={props.show}  
            clicked={props.closeBackdrop}
            />
            <div className={attachedClasses}>
                <div className={classes.Logo}>
                    <Logo />

                </div>
                <nav>
                    <NavigationItems></NavigationItems>

                </nav>
            </div>

        </Aux>
    )
}
export default SideDrawer;