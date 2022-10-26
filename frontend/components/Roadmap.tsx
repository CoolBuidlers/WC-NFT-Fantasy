import React from 'react'

const Roadmap = () => {
  return (
    <div>
        {/* Roadmap div with transitions starts here */}
        <div className='flex justify-center'> 
        <div className="relative inline-block">
            <div
              className="absolute -inset-1 bg-[#D100D1]
              to-[#F20089] blur-xl"
              ></div>
            <button className="relative border-t-4 border-[#D100D1] py-1 text-white text-3xl lg:text-4xl">
              Roadmap
            </button>
          </div>
        </div>
        {/* Roadmap div with transitions ends here */}

    </div>
  )
}

export default Roadmap