import React from 'react';
import classes from './NavItem.module.css';

const NavItem = (props) => {
  return(
    <div className={classes.NavItem}>
        <a href={props.link} className={props.active ? classes.active : null}>{props.children}</a>
    </div>
  )
}
export default NavItem;