import React,{Component} from "react";
import Aux from '../../hoc/Hoc/Hoc';
import classes from './Layout.module.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/Sidedrawer/Sidedrawer';

class Layout extends Component {
  state = {
    showBackdrop : false
  };

  closeBackdrop = () => {
    this.setState({
      showBackdrop:false
    })
  }
  openSidedrawer = () => {
    this.setState({
      showBackdrop:true
    });
  }
  render(){
    return (
      <Aux>
        <SideDrawer showBackdrop={this.state.showBackdrop} closeBackdrop={this.closeBackdrop}/>
        <Toolbar openSidedrawer={this.openSidedrawer}/>      
        <main className={classes.Content}>{this.props.children}</main>
      </Aux>
    );
  }
};

export default Layout;
