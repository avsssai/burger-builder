import React from 'react';
import classes from './Toolbar.module.css';
import Logo from '../../../components/Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

const Toolbar = (props) => {
  return(
    <header className={classes.Toolbar}>
        <div className="Menu">MENU</div>
        <Logo />
      <NavigationItems></NavigationItems>
    </header>
  )
}
export default Toolbar;