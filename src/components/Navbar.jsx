import React, { Component } from "react";
import Basket from "../media/shopping-card.png";

export class Navbar extends Component {
  state = {
    openClass: "bar-full",
    isOpen: false
  };

  openMenu = () => {
    this.setState({ isOpen: !this.state.isOpen });
    console.log("button clicked");
  };

  render() {
    const { openClass, isOpen } = this.state;
    const { selectedProducts } = this.props;
    return (
      <nav className="navbar" id="navbar">
        <a href="#navbar" className="logo">
          clother
        </a>
        <div className="menu-container">
          <a href="#navbar" className="basket-icon">
            <img src={Basket} alt="shopping_basket"></img>
            <span
              style={
                selectedProducts === 0
                  ? { display: "none" }
                  : { display: "block" }
              }
            >
              {this.props.selectedProducts}
            </span>
          </a>
          <button className="navbar-toggler" onClick={this.openMenu}>
            <div
              className={
                isOpen === true ? `icon-bar bar1 ${openClass}` : "icon-bar bar1"
              }
            ></div>
            <div className="icon-bar bar2"></div>
            <div
              className={
                isOpen === true ? `icon-bar bar3 ${openClass}` : "icon-bar bar3"
              }
            ></div>
          </button>
        </div>
        <ul className={isOpen === true ? "menu menu-open" : "menu"}>
          <li className="menu-item">
            <a href="#navbar" className="menu-link i-1">
              Home
            </a>
          </li>
          <li className="menu-item">
            <a href="#navbar" className="menu-link i-2">
              Shope
            </a>
          </li>
          <li className="menu-item">
            <a href="#navbar" className="menu-link i-3">
              Support
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
