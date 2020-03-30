import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.module.css';
import Aux from '../../../hoc/Hoc/Hoc';
import Backdrop from '../../UI/Backdrop/Backdrop';

const SideDrawer = (props) => {
  let attachedClasses = [classes.SideDrawer, classes.Close];
  if(props.showBackdrop){
    attachedClasses = [classes.SideDrawer, classes.Open];
  }
  return (
    <Aux>
      <Backdrop showBackdrop={props.showBackdrop} closeModal={props.closeBackdrop}/>
      <div className={attachedClasses.join(' ')}>
        <div className={classes.Logo}>

          <Logo />
        </div>
          <nav>
              <NavigationItems />
          </nav>
      </div>
    </Aux>
  )  
}
export default SideDrawer;