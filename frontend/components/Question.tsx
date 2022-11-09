import React from 'react';

const Question = (props: any) => {
    const {question, idx} = props
    return (
    <div className="flex flex-col items-center justify-center">
              <div className="bg-gradient-to-r from-[#E500A4] to-[#8900F2] mb-5 rounded w-[65vh]">
                <h1 className="text-center text-white text-2xl py-8 px-20">{question.question}</h1>
                <div className="flex items-center justify-around text-white text-xl py-5">
                    <p className="cursor-pointer hover:bg-gradient-to-l from-[#E500A4] to-[#8900F2]"
                    >{question.optionOne}</p>
                    <p className="cursor-pointer hover:bg-gradient-to-l from-[#E500A4] to-[#8900F2]">{question.optionTwo}</p>
                </div>
                <div className="flex items-center justify-around text-white text-xl py-5">
                    <p className="cursor-pointer hover:bg-gradient-to-l from-[#E500A4] to-[#8900F2]">{question.optionThree}</p>
                    <p className="cursor-pointer hover:bg-gradient-to-l from-[#E500A4] to-[#8900F2]">{question.optionFour}</p>
                </div>
              </div>
          </div>
  )
}

export default Question