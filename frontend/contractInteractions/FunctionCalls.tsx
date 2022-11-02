import { ethers, Contract } from "ethers";
import { PREDICTION_ADDRESS, PREDICTION_ABI } from "../contractInfo/Prediction";
import { CHANGE_ORDERS_ABI, CHANGE_ORDERS_ADDRESS } from "../contractInfo/ChangeOrders";
import { EVOLVE_ABI, EVOLVE_ADDRESS } from "../contractInfo/Evolve";
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
         value: ethers.utils.parseEther("1"),
       }
     );
  } catch (error: any) {
    console.log(error)
  }
};

export const mintOtherTwoTeams = async (
  teamFive: string,
  teamSix: string,
  signer: any
): Promise<void> => {
  try {
    const PredictionContract = new Contract(
      PREDICTION_ADDRESS,
      PREDICTION_ABI,
      signer
    );
    await PredictionContract.mintOtherTwoTeams(teamFive, teamSix, {
      value: ethers.utils.parseEther("1"),
    });
  } catch (error: any) {
    console.log(error);
  }
};

export const changeOrderForTop32 = async (
  scenario:number,
  signer: any
): Promise<void> => {
  try {
    const ChangeOrderContract = new Contract(
      CHANGE_ORDERS_ADDRESS,
      CHANGE_ORDERS_ABI,
      signer
    );
    await ChangeOrderContract.changeOrderForTop32(scenario)
  } catch (error: any) {
    console.log(error);
  }
};

export const changeOrderForTop16 = async (
  scenario: number,
  signer: any
): Promise<void> => {
  try {
    const ChangeOrderContract = new Contract(
      CHANGE_ORDERS_ADDRESS,
      CHANGE_ORDERS_ABI,
      signer
    );
    await ChangeOrderContract.changeOrderForTop16(scenario);
  } catch (error: any) {
    console.log(error);
  }
};

export const changeOrderForTop8 = async (
  scenario:number,
  signer: any
): Promise<void> => {
  try {
    const ChangeOrderContract = new Contract(
      CHANGE_ORDERS_ADDRESS,
      CHANGE_ORDERS_ABI,
      signer
    );
    await ChangeOrderContract.changeOrderForTop8(scenario)
  } catch (error: any) {
    console.log(error);
  }
};

export const changeOrderForTop4 = async (
  scenario: number,
  signer: any
): Promise<void> => {
  try {
    const ChangeOrderContract = new Contract(
      CHANGE_ORDERS_ADDRESS,
      CHANGE_ORDERS_ABI,
      signer
    );
    await ChangeOrderContract.changeOrderForTop4(scenario);
  } catch (error: any) {
    console.log(error);
  }
};

export const evolveToLevel2 = async (
  teamName: string,
  signer: any
): Promise<void> => {
  try {
    const EvolveContract = new Contract(
      EVOLVE_ADDRESS,
      EVOLVE_ABI,
      signer
    );
    await EvolveContract.evolveToLevel2(teamName);
  } catch (error: any) {
    console.log(error);
  }
};

export const evolveToLevel3 = async (
  teamName: string,
  signer: any
): Promise<void> => {
  try {
    const EvolveContract = new Contract(EVOLVE_ADDRESS, EVOLVE_ABI, signer);
    await EvolveContract.evolveToLevel3(teamName);
  } catch (error: any) {
    console.log(error);
  }
};

export const evolveToLevel4 = async (
  teamName: string,
  signer: any
): Promise<void> => {
  try {
    const EvolveContract = new Contract(EVOLVE_ADDRESS, EVOLVE_ABI, signer);
    await EvolveContract.evolveToLevel4(teamName);
  } catch (error: any) {
    console.log(error);
  }
};












