import React from 'react'
import NavBar from './components/nav/NavBar'
import TopContainer from './components/TopContainer/TopContainer'
import AboutNew from './components/AboutNew/AboutNew'
import Features from './components/Features/Features'
import DownloadBox from './components/DownlodBox/DownloadBox'
import PricingPlan from './components/PricingPlan/PricingPlan'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <>
  
    <NavBar/>
    <TopContainer/>
    
    <AboutNew/>
    <Features/>
    <DownloadBox/>
    <PricingPlan/>
    <Footer/>
    </>
  )
}

export default App