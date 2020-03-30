import React, { Component } from 'react';
import classes from './Modal.module.css';
import Aux from '../../../hoc/Hoc/Hoc'
import Backdrop from '../Backdrop/Backdrop';

class Modal extends Component{
  shouldComponentUpdate (nextProps,nextState) {
    //should return false to prevent update
    //renders only when the showModal is true
    return this.props.showModal !== nextProps.showModal;
  }
  render(){
    return (
      <Aux>
        <Backdrop />
        <div className={classes.Modal} style={{
          transform: this.props.showModal ? 'translateY(0)' : 'translateY(-100vh)',
          opacity: this.props.showModal ? '1' : '0'
        }}>
            {this.props.children}
        </div>
      </Aux>
    )  
  
  }
}
export default Modal;