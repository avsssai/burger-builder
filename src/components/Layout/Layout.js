import React, { Component } from "react";

import Aux from "../../hoc/Aux";
import classes from './Layout.module.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

class Layout extends Component {
  state = {
    showSidedrawer:false
  }
  handleSidebarClose = () => {
    this.setState({
      showSidedrawer:false
    })
  }

  handleBackdropClose = () => {
    this.setState({
      showSidedrawer:false
    })
  }

  // showSidedrawer = () => {
  //   this.setState({
  //     showSidedrawer:true
  //   })
  // }
  toggleSideDrawerHandler = () => {
    this.setState(prevState => {
      return {showSidedrawer:!prevState.showSidedrawer}
    })
  }

  render(){
    return (
      <Aux className={classes.Content}>
        <Toolbar toggleSideDrawer={this.toggleSideDrawerHandler}/>
        <SideDrawer show={this.state.showSidedrawer} closeBackdrop={this.handleBackdropClose} />

        <main className={classes.main}>{this.props.children}</main>
      </Aux>
    );
  
  }
};

export default Layout;
