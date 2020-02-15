import React from 'react';
import classes from './Backdrop.module.css';

const Backdrop = (props) => (
    props.showBackdrop ? <div className={classes.Backdrop} onClick={props.clicked}></div> : null 
)
export default Backdrop;