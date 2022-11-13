import { ethers, Contract } from "ethers";
import { PREDICTION_ADDRESS, PREDICTION_ABI } from "../contractInfo/Prediction";
import {
  CHANGE_ORDERS_ABI,
  CHANGE_ORDERS_ADDRESS,
} from "../contractInfo/ChangeOrders";
import { EVOLVE_ABI, EVOLVE_ADDRESS } from "../contractInfo/Evolve";
export const buyFirstFourTeams = async (
  teamOne: string,
  teamTwo: string,
  teamThree: string,
  teamFour: string,
  signer: any,
  amount: string
): Promise<void> => {
  try {
    const PredictionContract = new Contract(
      PREDICTION_ADDRESS,
      PREDICTION_ABI,
      signer
    );
    await PredictionContract.mintTopFourTeams(
      teamOne,
      teamTwo,
      teamThree,
      teamFour,
      {
        value: ethers.utils.parseEther(amount),
      }
    );
  } catch (error: any) {
    console.log(error);
  }
};

export const mintOtherTwoTeams = async (
  teamFive: string,
  teamSix: string,
  signer: any,
  amount: string
): Promise<void> => {
  try {
    const PredictionContract = new Contract(
      PREDICTION_ADDRESS,
      PREDICTION_ABI,
      signer
    );
    await PredictionContract.mintOtherTwoTeams(teamFive, teamSix, {
      value: ethers.utils.parseEther(amount),
    });
  } catch (error: any) {
    console.log(error);
  }
};

export const changeOrderForTop32 = async (
  signer: any,
  teamOne: string,
  teamTwo: string
): Promise<void> => {
  try {
    const ChangeOrderContract = new Contract(
      CHANGE_ORDERS_ADDRESS,
      CHANGE_ORDERS_ABI,
      signer
    );
    if (
      (teamOne === "1" && teamTwo === "2") ||
      (teamOne === "2" && teamTwo === "1")
    ) {
      await ChangeOrderContract.changeOrderForTop32(1);
    }
    if (
      (teamOne === "1" && teamTwo === "3") ||
      (teamOne === "3" && teamTwo === "1")
    ) {
      await ChangeOrderContract.changeOrderForTop32(2);
    }
    if (
      (teamOne === "1" && teamTwo === "4") ||
      (teamOne === "4" && teamTwo === "1")
    ) {
      await ChangeOrderContract.changeOrderForTop32(3);
    }
    if (
      (teamOne === "1" && teamTwo === "5") ||
      (teamOne === "5" && teamTwo === "1")
    ) {
      await ChangeOrderContract.changeOrderForTop32(4);
    }
    if (
      (teamOne === "1" && teamTwo === "6") ||
      (teamOne === "6" && teamTwo === "1")
    ) {
      await ChangeOrderContract.changeOrderForTop32(5);
    }
     if (
       (teamOne === "2" && teamTwo === "3") ||
       (teamOne === "3" && teamTwo === "2")
     ) {
       await ChangeOrderContract.changeOrderForTop32(6);
     }
      if (
        (teamOne === "2" && teamTwo === "4") ||
        (teamOne === "4" && teamTwo === "2")
      ) {
        await ChangeOrderContract.changeOrderForTop32(7);
      }
       if (
         (teamOne === "2" && teamTwo === "5") ||
         (teamOne === "5" && teamTwo === "2")
       ) {
         await ChangeOrderContract.changeOrderForTop32(8);
       }
       if (
         (teamOne === "2" && teamTwo === "6") ||
         (teamOne === "6" && teamTwo === "2")
       ) {
         await ChangeOrderContract.changeOrderForTop32(9);
       }
        if (
          (teamOne === "3" && teamTwo === "4") ||
          (teamOne === "4" && teamTwo === "3")
        ) {
          await ChangeOrderContract.changeOrderForTop32(10);
        }
         if (
           (teamOne === "3" && teamTwo === "5") ||
           (teamOne === "5" && teamTwo === "3")
         ) {
           await ChangeOrderContract.changeOrderForTop32(11);
         }
         if (
           (teamOne === "3" && teamTwo === "6") ||
           (teamOne === "6" && teamTwo === "3")
         ) {
           await ChangeOrderContract.changeOrderForTop32(12);
         }
           if (
             (teamOne === "4" && teamTwo === "5") ||
             (teamOne === "5" && teamTwo === "4")
           ) {
             await ChangeOrderContract.changeOrderForTop32(13);
           }
            if (
              (teamOne === "4" && teamTwo === "6") ||
              (teamOne === "6" && teamTwo === "4")
            ) {
              await ChangeOrderContract.changeOrderForTop32(14);
            }
  } catch (error: any) {
    console.log(error);
  }
};

export const changeOrderForTop16 = async (
   teamOne: string,
  teamTwo: string,
  signer: any
): Promise<void> => {
  try {
    const ChangeOrderContract = new Contract(
      CHANGE_ORDERS_ADDRESS,
      CHANGE_ORDERS_ABI,
      signer
    );
     if (
       (teamOne === "1" && teamTwo === "2") ||
       (teamOne === "2" && teamTwo === "1")
     ) {
       await ChangeOrderContract.changeOrderForTop16(1);
     }
     if (
       (teamOne === "1" && teamTwo === "3") ||
       (teamOne === "3" && teamTwo === "1")
     ) {
       await ChangeOrderContract.changeOrderForTop16(2);
     }
     if (
       (teamOne === "1" && teamTwo === "4") ||
       (teamOne === "4" && teamTwo === "1")
     ) {
       await ChangeOrderContract.changeOrderForTop16(3);
     }
     if (
       (teamOne === "1" && teamTwo === "5") ||
       (teamOne === "5" && teamTwo === "1")
     ) {
       await ChangeOrderContract.changeOrderForTop16(4);
     }
     if (
       (teamOne === "1" && teamTwo === "6") ||
       (teamOne === "6" && teamTwo === "1")
     ) {
       await ChangeOrderContract.changeOrderForTop16(5);
     }
     if (
       (teamOne === "2" && teamTwo === "3") ||
       (teamOne === "3" && teamTwo === "2")
     ) {
       await ChangeOrderContract.changeOrderForTop16(6);
     }
     if (
       (teamOne === "2" && teamTwo === "4") ||
       (teamOne === "4" && teamTwo === "2")
     ) {
       await ChangeOrderContract.changeOrderForTop16(7);
     }
     if (
       (teamOne === "2" && teamTwo === "5") ||
       (teamOne === "5" && teamTwo === "2")
     ) {
       await ChangeOrderContract.changeOrderForTop16(8);
     }
     if (
       (teamOne === "2" && teamTwo === "6") ||
       (teamOne === "6" && teamTwo === "2")
     ) {
       await ChangeOrderContract.changeOrderForTop16(9);
     }
     if (
       (teamOne === "3" && teamTwo === "4") ||
       (teamOne === "4" && teamTwo === "3")
     ) {
       await ChangeOrderContract.changeOrderForTop16(10);
     }
     if (
       (teamOne === "3" && teamTwo === "5") ||
       (teamOne === "5" && teamTwo === "3")
     ) {
       await ChangeOrderContract.changeOrderForTop16(11);
     }
     if (
       (teamOne === "3" && teamTwo === "6") ||
       (teamOne === "6" && teamTwo === "3")
     ) {
       await ChangeOrderContract.changeOrderForTop16(12);
     }
     if (
       (teamOne === "4" && teamTwo === "5") ||
       (teamOne === "5" && teamTwo === "4")
     ) {
       await ChangeOrderContract.changeOrderForTop16(13);
     }
     if (
       (teamOne === "4" && teamTwo === "6") ||
       (teamOne === "6" && teamTwo === "4")
     ) {
       await ChangeOrderContract.changeOrderForTop16(14);
     }
  } catch (error: any) {
    console.log(error);
  }
};

export const changeOrderForTop8 = async (
  teamOne: string,
  teamTwo: string,
  signer: any
): Promise<void> => {
  try {
    const ChangeOrderContract = new Contract(
      CHANGE_ORDERS_ADDRESS,
      CHANGE_ORDERS_ABI,
      signer
    );
    if (
      (teamOne === "1" && teamTwo === "2") ||
      (teamOne === "2" && teamTwo === "1")
    ) {
      await ChangeOrderContract.changeOrderForTop8(1);
    }
    if (
      (teamOne === "1" && teamTwo === "3") ||
      (teamOne === "3" && teamTwo === "1")
    ) {
      await ChangeOrderContract.changeOrderForTop8(2);
    }
    if (
      (teamOne === "1" && teamTwo === "4") ||
      (teamOne === "4" && teamTwo === "1")
    ) {
      await ChangeOrderContract.changeOrderForTop8(3);
    }
    if (
      (teamOne === "2" && teamTwo === "3") ||
      (teamOne === "3" && teamTwo === "2")
    ) {
      await ChangeOrderContract.changeOrderForTop8(4);
    }
     if (
       (teamOne === "2" && teamTwo === "4") ||
       (teamOne === "4" && teamTwo === "2")
     ) {
       await ChangeOrderContract.changeOrderForTop8(5);
     }
      if (
        (teamOne === "4" && teamTwo === "3") ||
        (teamOne === "3" && teamTwo === "4")
      ) {
        await ChangeOrderContract.changeOrderForTop8(6);
      }
  } catch (error: any) {
    console.log(error);
  }
};

export const changeOrderForTop4 = async (
  teamOne: string,
  teamTwo: string,
  signer: any
): Promise<void> => {
  try {
    const ChangeOrderContract = new Contract(
      CHANGE_ORDERS_ADDRESS,
      CHANGE_ORDERS_ABI,
      signer
    );
     if (
       (teamOne === "1" && teamTwo === "2") ||
       (teamOne === "2" && teamTwo === "1")
     ) {
       await ChangeOrderContract.changeOrderForTop4(1);
     }
     if (
       (teamOne === "1" && teamTwo === "3") ||
       (teamOne === "3" && teamTwo === "1")
     ) {
       await ChangeOrderContract.changeOrderForTop4(2);
     }
     if (
       (teamOne === "1" && teamTwo === "4") ||
       (teamOne === "4" && teamTwo === "1")
     ) {
       await ChangeOrderContract.changeOrderForTop4(3);
     }
     if (
       (teamOne === "2" && teamTwo === "3") ||
       (teamOne === "3" && teamTwo === "2")
     ) {
       await ChangeOrderContract.changeOrderForTop4(4);
     }
     if (
       (teamOne === "2" && teamTwo === "4") ||
       (teamOne === "4" && teamTwo === "2")
     ) {
       await ChangeOrderContract.changeOrderForTop4(5);
     }
     if (
       (teamOne === "4" && teamTwo === "3") ||
       (teamOne === "3" && teamTwo === "4")
     ) {
       await ChangeOrderContract.changeOrderForTop4(6);
     }
  } catch (error: any) {
    console.log(error);
  }
};

export const evolveToLevel2 = async (
  teamName: string,
  signer: any
): Promise<void> => {
  try {
    const EvolveContract = new Contract(EVOLVE_ADDRESS, EVOLVE_ABI, signer);
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
