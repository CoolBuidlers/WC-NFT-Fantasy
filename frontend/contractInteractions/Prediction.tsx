import { ethers, Contract } from "ethers";
import { PREDICTION_ADDRESS, PREDICTION_ABI } from "../contractInfo/Prediction";
export const buyFirstFourTeams = async (
  teamOne: string,
  teamTwo: string,
  teamThree: string,
  teamFour: string,
  signer: any
): Promise<void> => {
  try {
    const PredictionContract = new Contract(PREDICTION_ADDRESS, PREDICTION_ABI, signer);
     await PredictionContract.mintTopFourTeams(
       teamOne,
       teamTwo,
       teamThree,
       teamFour,
       {
         value: ethers.utils.parseEther("1.01"),
       }
     );
  } catch (error: any) {
    console.log(error)
  }
};