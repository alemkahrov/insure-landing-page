import React from 'react'
import { IoLogoFacebook, IoLogoTwitter, IoLogoPinterest, IoLogoInstagram } from "react-icons/io";
import logo from '../images/logo.svg'
import { Link } from 'gatsby'

const Footer = () => {
 return (
  <footer className="footer">
   <div className="container">
    <div className="footer-top">
     <div class="footer-top-inner">
      <Link to="/">
       <img src={logo} alt="" />
      </Link>
      <div class="social-icons">
       <Link to="#" class="icon-box">
        <IoLogoFacebook className="icon" />
       </Link>
       <Link to="#" class="icon-box">
        <IoLogoTwitter className="icon" />
       </Link>
       <Link to="#" class="icon-box">
        <IoLogoPinterest className="icon" />
       </Link>
       <Link to="#" class="icon-box">
        <IoLogoInstagram className="icon" />
       </Link>
      </div>
     </div>
    </div>
    <hr class="border" />
    <div class="footer-bottom">
     <div class="footer-bottom-inner">
      <div class="footer-widget">
       <h4>our company</h4>
       <ul>
        <li><Link to="/about">how we work</Link></li>
        <li><Link to="/why">why insure?</Link></li>
        <li><Link to="/price">check price</Link></li>
        <li><Link to="/reviews">reviews</Link></li>
       </ul>
      </div>
      <div class="footer-widget">
       <h4>help me</h4>
       <ul>
        <li><Link to="/faq">faq</Link></li>
        <li><Link to="/terms of use">terms of use</Link></li>
        <li><Link to="/privacy">privacy policy</Link></li>
        <li><Link to="/cookies">cookies</Link></li>
       </ul>
      </div>
      <div class="footer-widget">
       <h4>contact</h4>
       <ul>
        <li><Link to="/sales">sales</Link></li>
        <li><Link to="/support">support</Link></li>
        <li><Link to="/chat">live chat</Link></li>
       </ul>
      </div>
      <div class="footer-widget">
       <h4>others</h4>
       <ul>
        <li><Link to="careers">careers</Link></li>
        <li><Link to="/press">press</Link></li>
        <li><Link to="/licenses">licenses</Link></li>
       </ul>
      </div>
     </div>
    </div>
   </div>
  </footer>
 )
}

export default Footer
