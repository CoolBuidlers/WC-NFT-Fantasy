import React, { useEffect, useState } from "react";
import { useContract, useProvider, useSigner } from "wagmi";
import Navbar from "../components/Navbar";
import {
  QUIZ_GAME_CONTRACT_ABI,
  QUIZ_GAME_CONTRACT_ADDRESS,
} from "../Constants/Index";
import { useAccount } from "wagmi";

const AddQuestions = () => {
  const connectedAddress = useAccount();
  const provider = useProvider();
  const { data: signer } = useSigner();
  const contract = useContract({
    addressOrName: QUIZ_GAME_CONTRACT_ADDRESS,
    contractInterface: QUIZ_GAME_CONTRACT_ABI,
    signerOrProvider: signer || provider,
  });
  const [isOwner, setIsOwner] = useState<boolean>(false);
  const [inputData, setInputData] = useState<object>({
    question: "",
    optionOne: "",
    optionTwo: "",
    optionThree: "",
    optionFour: "",
    answer: "",
  });

  function handleInput(e: any): void {
    setInputData((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  }
  console.log(inputData);

  const addQuestion = async (val: any): Promise<void> => {
    if (
      val.question &&
      val.optionOne &&
      val.optionTwo &&
      val.optionThree &&
      val.optionFour &&
      val.answer
    ) {
      const txn: any = await contract.AddQuizOne(
        val.question,
        val.optionOne,
        val.optionTwo,
        val.optionThree,
        val.optionFour,
        val.answer
      );
      await txn.wait();
    } else {
      alert("input all the values dumbass");
    }
  };

  const checkIfOwner = async (): Promise<void> => {
    try {
      const _owner = await contract.owner();
      // console.log("OWNER",_owner.toLowerCase());
      if (_owner.toLowerCase() === connectedAddress.address?.toLowerCase()) {
        setIsOwner(true);
      }
    } catch (err: any) {
      console.error(err);
    }
  };

  useEffect(() => {
    checkIfOwner();
  }, [isOwner]);

  const renderQuestionInput = (): JSX.Element => {
    if (isOwner) {
      return (
        <div className="bg-gradient-to-r from-[#E500A4] to-[#8900F2] w-80 text-white flex flex-col mx-auto rounded-3xl pt-8 pb-10 px-10 ">
          <p>Question</p>
          <textarea
            className="bg-gradient-to-l from-[#E500A4] to-[#8900F2] border-2 border-white rounded-xl h-32 px-3 mt-1"
            onChange={handleInput}
            name="question"
          />
          <p>Option One</p>
          <input
            className="bg-gradient-to-l from-[#E500A4] to-[#8900F2] border-2 border-white rounded-xl px-3 my-3 py-1"
            onChange={handleInput}
            name="optionOne"
          />
          <p>Option Two</p>
          <input
            className="bg-gradient-to-l from-[#E500A4] to-[#8900F2] border-2 border-white rounded-xl px-3 mb-2 mt-1 py-1"
            onChange={handleInput}
            name="optionTwo"
          />
          <p>Option Three</p>
          <input
            className="bg-gradient-to-l from-[#E500A4] to-[#8900F2] border-2 border-white rounded-xl px-3 mb-2 mt-1 py-1"
            onChange={handleInput}
            name="optionThree"
          />
          <p>Option Four</p>
          <input
            className="bg-gradient-to-l from-[#E500A4] to-[#8900F2] border-2 border-white rounded-xl px-3 mb-2 mt-1 py-1"
            onChange={handleInput}
            name="optionFour"
          />
          <p>Answer</p>
          <input
            className="bg-gradient-to-l from-[#E500A4] to-[#8900F2] border-2 border-white rounded-xl px-3 mb-2 mt-1 py-1"
            onChange={handleInput}
            name="answer"
          />
          <button
            className="bg-gradient-to-l from-[#E500A4] to-[#8900F2] border-full py-2 px-5 rounded-lg border-2 border-[#b4b0d4] mt-5"
            onClick={() => addQuestion(inputData)}
          >
            Create Question
          </button>
        </div>
      );
    }
    return <h1 className="text-center text-2xl text-white">NOT OWNER</h1>;
  };

  return (
    <section>
      <Navbar />
      {/* <div className='bg-gradient-to-r from-[#E500A4] to-[#8900F2] w-80 text-white flex flex-col mx-auto rounded-3xl pt-8 pb-10 px-10 '>
        <p>Question</p>
        <textarea 
        className='bg-gradient-to-l from-[#E500A4] to-[#8900F2] border-2 border-white rounded-xl h-32 px-3 mt-1'
        onChange={handleInput}
        name="question"
        />
        <p>Option One</p>
        <input 
        className='bg-gradient-to-l from-[#E500A4] to-[#8900F2] border-2 border-white rounded-xl px-3 my-3 py-1'
        onChange={handleInput}
        name="optionOne"
        />
        <p>Option Two</p>
        <input 
        className='bg-gradient-to-l from-[#E500A4] to-[#8900F2] border-2 border-white rounded-xl px-3 mb-2 mt-1 py-1'
        onChange={handleInput}
        name="optionTwo"
        />
        <p>Option Three</p>
        <input 
        className='bg-gradient-to-l from-[#E500A4] to-[#8900F2] border-2 border-white rounded-xl px-3 mb-2 mt-1 py-1'
        onChange={handleInput}
        name="optionThree"
        />
        <p>Option Four</p>
        <input 
        className='bg-gradient-to-l from-[#E500A4] to-[#8900F2] border-2 border-white rounded-xl px-3 mb-2 mt-1 py-1'
        onChange={handleInput}
        name="optionFour"
        />
        <p>Answer</p>
        <input 
        className='bg-gradient-to-l from-[#E500A4] to-[#8900F2] border-2 border-white rounded-xl px-3 mb-2 mt-1 py-1'
        onChange={handleInput}
        name="answer"
        />
        <button className="bg-gradient-to-l from-[#E500A4] to-[#8900F2] border-full py-2 px-5 rounded-lg border-2 border-[#b4b0d4] mt-5"
        onClick={() => addQuestion(inputData)}
        >
        Create Question
        </button>
    </div> */}
      {renderQuestionInput()}
    </section>
  );
};

export default AddQuestions;
