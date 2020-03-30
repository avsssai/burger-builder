import React from 'react';
import classes from './Toolbar.module.css';
import Logo from '../../../components/Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

const Toolbar = (props) => {
  return (
  <header className={classes.Toolbar}>
      <div onClick={props.openSidedrawer} className={classes.Menu}>&#9776;</div>
      <div className={classes.Logo}>

      <Logo />
      </div>
      <nav className={classes.DesktopOnly}>
         <NavigationItems />
      </nav>
  </header>
  )  
}
export default Toolbar;