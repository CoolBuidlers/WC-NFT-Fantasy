import React from 'react'
import ActivityTable from '../components/ActivityTable'
import Footer from '../components/Footer'
import LevelSection from '../components/LevelSection'
import Navbar from '../components/Navbar'

const Activity = () => {
  return (
    <main>
        <Navbar />
        <div className='flex justify-center py-8'> 
        <div className="relative inline-block">
            <div
              className="absolute -inset-1 bg-[#D100D1]
              to-[#F20089] blur-xl"
              ></div>
            <h1 className="relative border-t-4 border-[#D100D1] py-2 text-white text-3xl lg:text-4xl">
              ACTIVITY
            </h1>
          </div>
        </div>
        <p className='text-white text-xl text-center w-full sm:w-8/12 md:w-6/12 lg:w-5/12 xl:w-4/12 mx-auto'>
            In this section, you can see all the activity
            going on in our dApp with the prize pot, the address of the players and their levelling up as well as the round and the current Teams</p>
            <div className='py-10'>
            <LevelSection />
            <ActivityTable />
            </div>
            <Footer />
    </main>
  )
}

export default Activity