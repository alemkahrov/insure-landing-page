import React from "react"
import '../scss/styles.scss'

import Header from '../components/Header/Header'
// import Navbar from '../components/Header/Navbar'
import Intro from '../components/Intro'
import Features from '../components/Features'
import CtaBox from '../components/CtaBox'
import Footer from '../components/Footer'
// import HeaderNew from "../components/Header/HeaderNew"


const IndexPage = () => (
  <>
    {/* <HeaderNew /> *}
    {/* <Navbar /> */}
    <Header />
    <Intro />
    <Features />
    <CtaBox />
    <Footer />
  </>
)

export default IndexPage
