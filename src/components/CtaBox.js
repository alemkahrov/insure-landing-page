import React from 'react'
import { Link } from 'gatsby'


const CtaBox = () => {
 return (
  <div className="container">
   <div className="cta-box">
    <div className="cta-box-inner">
     <h2>Find out more about how we work</h2>
     <div className="cta-button">
      <Link className="main-button" to="/about">How we work</Link>
     </div>
    </div>
   </div>
  </div>
 )
}

export default CtaBox
