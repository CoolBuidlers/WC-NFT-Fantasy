import React from 'react'
import AvailableTeams from '../components/AvailableTeams'
import ChosenTeams from '../components/ChosenTeams'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const MainGame = () => {
  return (
    <div>
        <Navbar />
        <ChosenTeams />
        <AvailableTeams />
        <Footer />
    </div>
  )
}

export default MainGame