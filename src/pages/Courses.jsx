import React from 'react'
import Navbar from '../components/navigation/Navbar'
import Footer from '../components/navigation/Footer'
import { Link } from 'react-router-dom'

export default function Courses() {
  return (
    <div>
        <Navbar/>
        <h1>Your Page Course here</h1>
        <Link to='/all-courses'>View all</Link>
        <Footer/>
    </div>
  )
}
