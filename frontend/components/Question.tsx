import React from 'react';

const Question = (props: any) => {
    const {question, idx, getValue} = props
    return (
    <div className="flex flex-col items-center justify-center">
              <div className="bg-gradient-to-r from-[#E500A4] to-[#8900F2] mb-5 rounded w-[65vh]">
                <h1 className="text-center text-white text-2xl py-8 px-20">{question.question}</h1>
                <div className="flex items-center justify-around text-white text-xl py-5">
                    <p className="cursor-pointer hover:bg-gray-800 w-20 text-center"
                    >{question.optionOne}</p>
                    <p className="cursor-pointer hover:bg-gray-800 w-20 text-center"
                    >{question.optionTwo}</p>
                </div>
                <div className="flex items-center justify-around text-white text-xl py-5">
                    <p className="cursor-pointer hover:bg-gray-800 w-20 text-center"
                    >{question.optionThree}</p>
                    <p className="cursor-pointer hover:bg-gray-800 w-20 text-center"
                    >{question.optionFour}</p>
                </div>
                <div className='flex justify-center'>
                <input 
                className='p-2 rounded-sm'
                placeholder='Input Answer'
                onChange={getValue}
                />
                </div>
              </div>
          </div>
  )
}

export default Question