
// import { Link } from 'gatsby'
// import logo from '../images/logo.svg'
// import svgMobileNav from '../images/bg-pattern-mobile-nav.svg'
// import { IoIosMenu } from 'react-icons/io'

// const Header = () => {
//  return (
//   <header className="header">
//    <div className="container">
//     <div className="header-inner">
//      <div className="site-logo">
//       <Link to="/">
//        <img src={logo} alt="" />
//       </Link>
//      </div>
//      <div className="hamburger">
//       <IoIosMenu className="icon" />
//      </div>
//      <nav className="desktop-nav">
//       <ul>
//        <li><Link to="/about">how we work</Link></li>
//        <li><Link to="/blog">blog</Link></li>
//        <li><Link to="/account">account</Link></li>
//        <li><Link to="/plans">
//         <button className="button-dark">view plans</button>
//        </Link></li>
//       </ul>
//      </nav>
//     </div>
//    </div>
//    <nav className="mobile-nav">
//     <ul>
//      <li><Link to="/about">how we work</Link></li>
//      <li><Link to="/blog">blog</Link></li>
//      <li><Link to="/account">account</Link></li>
//      <li><Link to="/plans">
//       <button className="button-light">view plans</button>
//      </Link></li>
//     </ul>
//    </nav>
//   </header>
//  )
// }

// export default Header

import React, { Component } from 'react'
import { HamburgerCollapse } from 'react-animated-burgers'
import { Link } from 'gatsby'
import logo from '../images/logo.svg'

export default class Header extends Component {
 state = {
  isActiveCollapse: false,
 }

 toggleButton = () => {
  this.setState({
   isActiveCollapse: !this.state.isActiveCollapse
  })
 }

 render() {
  return (
   <header className="header">
    <div className="container">
     <div className="header-inner">
      <div className="site-logo">
       <Link to="/">
        <img src={logo} alt="" />
       </Link>
      </div>

      <HamburgerCollapse className="hamburger" isOpen={this.state.isActiveCollapse} onClick={this.toggleButton} barColor="rgb(43, 39, 47)" />
      <nav>
       <ul>
        <li><Link to="/about">how we work</Link></li>
        <li><Link to="/blog">blog</Link></li>
        <li><Link to="/account">account</Link></li>
        <li><Link to="/plans">
         <button className="button-dark">view plans</button>
        </Link></li>
       </ul>
      </nav>
     </div>
    </div>
   </header>
  )
 }
}

