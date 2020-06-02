import React, { Component } from 'react'
import { Link } from 'gatsby'
import logo from '../../images/logo.svg'
import { IoIosMenu } from 'react-icons/io'

export default class Header extends Component {
 state = {
  isOpen: false,
 }

 handleClick = () => {
  this.setState({
   isOpen: !this.state.isOpen
  })
  console.log(this.isOpen);
 }

 render() {
  return (
   <nav className="nav">
    <div className="container nav-container">
     <div className="nav-header">
      <Link to="/" className="site-logo">
       <img src={logo} alt="" />
      </Link>
      <button type="button" className="toggleBtn" onClick={this.handleClick}>
       <IoIosMenu className="icon" />
      </button>
     </div>

     <ul className={this.state.isOpen ? 'nav-links show-nav' : 'nav-links'}>
      <li><Link to="/about">how we work</Link></li>
      <li><Link to="/blog">blog</Link></li>
      <li><Link to="/account">account</Link></li>
      <li><Link to="/plans" className="btn-desktop btn-mobile">view plans</Link></li>
     </ul>

    </div>
   </nav>
  )
 }
}
