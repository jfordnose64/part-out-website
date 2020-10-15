import React, { Component } from 'react'
import './header.css'

class Header extends Component {
  render() {
    return (
      <header class="head">
        <div id="nav" class="navigation-bar">
          <h1 class="logo">PartShop<span>r</span></h1>
          <nav>
        <ul>
          <li><a href="">Home</a></li>
          <li><a href="">Signup</a></li>
          <li><a href="">Why Us</a></li>
        </ul>
          </nav>
        </div>
        <hr></hr>
      </header>

    )
  }
}

export default Header
