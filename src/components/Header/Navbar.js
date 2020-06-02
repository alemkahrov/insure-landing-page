import React, { Component } from 'react'
import { Link } from 'gatsby'
import logo from '../../images/logo.svg'
import { IoIosMenu } from 'react-icons/io'

export default class Navbar extends Component {
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
    <div className="container">
     <div className="nav-inner">
      <div className="nav-header">
       <Link to="/" className="site-logo">
        <img src={logo} alt="" />
       </Link>
       <button type="button" className="toggleBtn" onClick={this.handleClick}>
        <IoIosMenu className="icon" />
       </button>
      </div>
      <ul className={this.state.isOpen ? 'nav-list-mobile show-nav' : 'nav-list-desktop'}>
       <li><Link to="/about">how we work</Link></li>
       <li><Link to="/blog">blog</Link></li>
       <li><Link to="/account">account</Link></li>
       <li><Link to="/plans">
        <button className="button-dark">view plans</button>
       </Link></li>
      </ul>
     </div>

    </div>
   </nav >
  )
 }
}
