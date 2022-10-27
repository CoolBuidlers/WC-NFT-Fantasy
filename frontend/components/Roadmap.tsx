import React from 'react'

const Roadmap = () => {
  return (
    <div className='py-20 border-8 border-dashed border-[#DB00B6]'>
        {/* Roadmap div with transitions starts here */}
        <div className='flex justify-center pb-40'> 
        <div className="relative inline-block">
            <div
              className="absolute -inset-1 bg-[#D100D1]
              to-[#F20089] blur-xl"
              ></div>
            <h1 className="relative border-t-4 border-[#D100D1] py-2 text-white text-3xl lg:text-4xl">
              Roadmap
            </h1>
          </div>
        </div>
        {/* Roadmap div with transitions ends here */}
        {/* Roadmap components here */}
        <div className='flex justify-start px-5 md:px-20'>
        <div className='text-white border-b-4 border-r-4 border-[#E500A4] sm:w-7/12 md:w-5/12'>
            <h2 className='text-3xl md:text-3xl sm:text-2xl text-[#F20089]'>1 <span className='text-white pl-5'>Lorem ipsum dolor sit amet</span></h2>
            <p className='sm:text-lg md:text-xl text-xl py-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            At ac etiam ac sollicit lorem in integer quam ac.</p>
        </div>
        </div>
        <div className='flex justify-end px-5 py-10 md:px-20'>
        <div className='text-white border-b-4 border-r-4 border-[#E500A4] sm:w-7/12 md:w-5/12'>
            <h2 className='text-3xl md:text-3xl sm:text-2xl text-[#F20089]'>2 <span className='text-white pl-5'>Lorem ipsum dolor sit amet</span></h2>
            <p className='sm:text-lg md:text-xl text-xl py-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            At ac etiam ac sollicit lorem in integer quam ac.</p>
        </div>
        </div>
        <div className='flex justify-start px-5 md:px-20'>
        <div className='text-white border-b-4 border-r-4 border-[#E500A4] sm:w-7/12 md:w-5/12'>
            <h2 className='text-3xl md:text-3xl sm:text-2xl text-[#F20089]'>3 <span className='text-white pl-5'>Lorem ipsum dolor sit amet</span></h2>
            <p className='sm:text-lg md:text-xl text-xl py-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            At ac etiam ac sollicit lorem in integer quam ac.</p>
        </div>
        </div>
        <div className='flex justify-end px-5 py-10 md:px-20'>
        <div className='text-white border-b-4 border-r-4 border-[#E500A4] sm:w-7/12 md:w-5/12'>
            <h2 className='text-3xl md:text-3xl sm:text-2xl text-[#F20089]'>4 <span className='text-white pl-5'>Lorem ipsum dolor sit amet</span></h2>
            <p className='sm:text-lg md:text-xl text-xl py-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            At ac etiam ac sollicit lorem in integer quam ac.</p>
        </div>
        </div>
        <div className='flex justify-start px-5 py-10 md:px-20'>
        <div className='text-white border-b-4 border-r-4 border-[#E500A4] sm:w-7/12 md:w-5/12'>
            <h2 className='text-3xl md:text-3xl sm:text-2xl text-[#F20089]'>5 <span className='text-white pl-5'>Lorem ipsum dolor sit amet</span></h2>
            <p className='sm:text-lg md:text-xl text-xl py-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            At ac etiam ac sollicit lorem in integer quam ac.</p>
        </div>
        </div>
        <div className='flex justify-end px-5 py-10 md:px-20'>
        <div className='text-white border-b-4 border-r-4 border-[#E500A4] sm:w-7/12 md:w-5/12'>
            <h2 className='text-3xl md:text-3xl sm:text-2xl text-[#F20089]'>6 <span className='text-white pl-5'>Lorem ipsum dolor sit amet</span></h2>
            <p className='sm:text-lg md:text-xl text-xl py-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            At ac etiam ac sollicit lorem in integer quam ac.</p>
        </div>
        </div>
        </div>
  )
}

export default Roadmap