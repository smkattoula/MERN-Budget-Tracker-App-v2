import React, { Component } from "react";

class AppNavBar extends Component {
  state = {
    isOpen: false,
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };

  render() {
    return (
      <nav className="navbar">
        <a href="#" className="logo">
          logo
        </a>
        <ul className="main-nav">
          <li>
            <a href="#" className="nav-links">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="nav-links">
              Products
            </a>
          </li>
          <li>
            <a href="#" className="nav-links">
              About Us
            </a>
          </li>
          <li>
            <a href="#" className="nav-links">
              Contact Us
            </a>
          </li>
          <li>
            <a href="#" className="nav-links">
              Blog
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default AppNavBar;
