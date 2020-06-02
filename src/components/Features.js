import React from 'react'
import iconSnappy from '../images/icon-snappy-process.svg'
import iconPrices from '../images/icon-affordable-prices.svg'
import iconPeople from '../images/icon-people-first.svg'

const Features = () => {
 return (
  <section className="features">
   <div className="container">
    <h2 className="section-heading">We're different</h2>
    <div className="features-inner">
     <div className="feature">
      <img src={iconSnappy} alt="snapp process" />
      <h3>Snappy Process</h3>
      <p>Our application process can be completed in minutes, not hours. Don't get stuck filling in tedious forms.</p>
     </div>
     <div className="feature">
      <img src={iconPrices} alt="affordable prices" />
      <h3>Affordable Prices</h3>
      <p>We don't want you worrying about high monthly costs. Our prices may be low, but we still offer the best coverage possible.</p>
     </div>
     <div className="feature">
      <img src={iconPeople} alt="people first" />
      <h3>People First</h3>
      <p>Our plans aren't full of conditions and clauses to prevent payouts. We make sure you're covered when you neet it.</p>
     </div>
    </div>
   </div>
  </section>
 )
}

export default Features
