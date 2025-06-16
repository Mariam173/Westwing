import React from 'react'
import Navbar from '../components/navigation/Navbar'
import Footer from '../components/navigation/Footer'
import BottomSide from '../components/SendFeedback/bottomSide'


export default function MiniLandingPage() {
  return (
    <div>
        <Navbar/>
        <BottomSide/>
        <Footer/>
    </div>
  )
}