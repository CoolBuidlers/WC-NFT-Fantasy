import { ethers, Contract } from "ethers";
import { PREDICTION_ADDRESS, PREDICTION_ABI } from "../contractInfo/Prediction";
import {
  CHANGE_ORDERS_ABI,
  CHANGE_ORDERS_ADDRESS,
} from "../contractInfo/ChangeOrders";
import { EVOLVE_ABI, EVOLVE_ADDRESS } from "../contractInfo/Evolve";
import toast from "react-hot-toast";
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
    const tx = await PredictionContract.mintTopFourTeams(
      teamOne,
      teamTwo,
      teamThree,
      teamFour,
      {
        value: ethers.utils.parseEther(amount),
      }
    );
    await tx.wait()
    toast.success(`You Have Succesfully Minted Teams ${teamOne}, ${teamTwo}, ${teamThree}, and ${teamFour} !!!`);
  } catch (error: any) {
    console.log(error);
    toast.error("Make Sure You Pay The Minimum Amount Of Matic");
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
    const tx = await PredictionContract.mintOtherTwoTeams(teamFive, teamSix, {
      value: ethers.utils.parseEther(amount),
    });
    await tx.wait()
    toast.success(
      `You Have Succesfully Minted Teams ${teamFive}, ${teamSix} !!!`
    );
  } catch (error: any) {
    console.log(error);
    toast.error("Make Sure You Pay The Minimum Amount Of Matic");
  }
};

export const depositPoints = async (
  signer: any,
): Promise<void> => {
  try {
    const PredictionContract = new Contract(
      PREDICTION_ADDRESS,
      PREDICTION_ABI,
      signer
    );
    const tx = await PredictionContract.depositPoints();
    await tx.wait()
    toast.success(
      `You Have Succesfully Deposited Your Points!!!`
    );
  } catch (error: any) {
    console.log(error);
    toast.error("Make Sure You Are A Player And Didn't Miss The Deadline");
  }
};

export const changeOrderForTop32 = async (
  teamOne: string,
  teamTwo: string,
  signer: any
): Promise<void> => {
  try {
    let tx;
    const ChangeOrderContract = new Contract(
      CHANGE_ORDERS_ADDRESS,
      CHANGE_ORDERS_ABI,
      signer
    );
    if (
      (teamOne === "1" && teamTwo === "2") ||
      (teamOne === "2" && teamTwo === "1")
    ) {
      tx = await ChangeOrderContract.changeOrderForTop32(1);
    }
    if (
      (teamOne === "1" && teamTwo === "3") ||
      (teamOne === "3" && teamTwo === "1")
    ) {
      tx = await ChangeOrderContract.changeOrderForTop32(2);
    }
    if (
      (teamOne === "1" && teamTwo === "4") ||
      (teamOne === "4" && teamTwo === "1")
    ) {
      tx = await ChangeOrderContract.changeOrderForTop32(3);
    }
    if (
      (teamOne === "1" && teamTwo === "5") ||
      (teamOne === "5" && teamTwo === "1")
    ) {
      tx = await ChangeOrderContract.changeOrderForTop32(4);
    }
    if (
      (teamOne === "1" && teamTwo === "6") ||
      (teamOne === "6" && teamTwo === "1")
    ) {
      tx = await ChangeOrderContract.changeOrderForTop32(5);
    }
    if (
      (teamOne === "2" && teamTwo === "3") ||
      (teamOne === "3" && teamTwo === "2")
    ) {
      tx = await ChangeOrderContract.changeOrderForTop32(6);
    }
    if (
      (teamOne === "2" && teamTwo === "4") ||
      (teamOne === "4" && teamTwo === "2")
    ) {
      tx = await ChangeOrderContract.changeOrderForTop32(7);
    }
    if (
      (teamOne === "2" && teamTwo === "5") ||
      (teamOne === "5" && teamTwo === "2")
    ) {
      tx = await ChangeOrderContract.changeOrderForTop32(8);
    }
    if (
      (teamOne === "2" && teamTwo === "6") ||
      (teamOne === "6" && teamTwo === "2")
    ) {
      tx = await ChangeOrderContract.changeOrderForTop32(9);
    }
    if (
      (teamOne === "3" && teamTwo === "4") ||
      (teamOne === "4" && teamTwo === "3")
    ) {
      tx = await ChangeOrderContract.changeOrderForTop32(10);
    }
    if (
      (teamOne === "3" && teamTwo === "5") ||
      (teamOne === "5" && teamTwo === "3")
    ) {
      tx = await ChangeOrderContract.changeOrderForTop32(11);
    }
    if (
      (teamOne === "3" && teamTwo === "6") ||
      (teamOne === "6" && teamTwo === "3")
    ) {
      tx = await ChangeOrderContract.changeOrderForTop32(12);
    }
    if (
      (teamOne === "4" && teamTwo === "5") ||
      (teamOne === "5" && teamTwo === "4")
    ) {
      tx = await ChangeOrderContract.changeOrderForTop32(13);
    }
    if (
      (teamOne === "4" && teamTwo === "6") ||
      (teamOne === "6" && teamTwo === "4")
    ) {
      tx = await ChangeOrderContract.changeOrderForTop32(14);
    }
    await tx.wait();
    toast.success(
      `You Have Successfully Swapped Teams ${teamOne} and ${teamTwo}!!!`
    );
  } catch (error: any) {
    console.log(error);
    toast.error("Make Sure You Haven't Swapped in Top32 Already");
  }
};

export const changeOrderForTop16 = async (
   teamOne: string,
  teamTwo: string,
  signer: any
): Promise<void> => {
  try {
    let tx
    const ChangeOrderContract = new Contract(
      CHANGE_ORDERS_ADDRESS,
      CHANGE_ORDERS_ABI,
      signer
    );
     if (
       (teamOne === "1" && teamTwo === "2") ||
       (teamOne === "2" && teamTwo === "1")
     ) {
        tx = await ChangeOrderContract.changeOrderForTop16(1);
     }
     if (
       (teamOne === "1" && teamTwo === "3") ||
       (teamOne === "3" && teamTwo === "1")
     ) {
         tx = await ChangeOrderContract.changeOrderForTop16(2);
     }
     if (
       (teamOne === "1" && teamTwo === "4") ||
       (teamOne === "4" && teamTwo === "1")
     ) {
         tx = await ChangeOrderContract.changeOrderForTop16(3);
     }
     if (
       (teamOne === "1" && teamTwo === "5") ||
       (teamOne === "5" && teamTwo === "1")
     ) {
        tx = await ChangeOrderContract.changeOrderForTop16(4);
     }
     if (
       (teamOne === "1" && teamTwo === "6") ||
       (teamOne === "6" && teamTwo === "1")
     ) {
        tx = await ChangeOrderContract.changeOrderForTop16(5);
     }
     if (
       (teamOne === "2" && teamTwo === "3") ||
       (teamOne === "3" && teamTwo === "2")
     ) {
        tx = await ChangeOrderContract.changeOrderForTop16(6);
     }
     if (
       (teamOne === "2" && teamTwo === "4") ||
       (teamOne === "4" && teamTwo === "2")
     ) {
        tx = await ChangeOrderContract.changeOrderForTop16(7);
     }
     if (
       (teamOne === "2" && teamTwo === "5") ||
       (teamOne === "5" && teamTwo === "2")
     ) {
        tx = await ChangeOrderContract.changeOrderForTop16(8);
     }
     if (
       (teamOne === "2" && teamTwo === "6") ||
       (teamOne === "6" && teamTwo === "2")
     ) {
         tx = await ChangeOrderContract.changeOrderForTop16(9);
     }
     if (
       (teamOne === "3" && teamTwo === "4") ||
       (teamOne === "4" && teamTwo === "3")
     ) {
        tx = await ChangeOrderContract.changeOrderForTop16(10);
     }
     if (
       (teamOne === "3" && teamTwo === "5") ||
       (teamOne === "5" && teamTwo === "3")
     ) {
        tx = await ChangeOrderContract.changeOrderForTop16(11);
     }
     if (
       (teamOne === "3" && teamTwo === "6") ||
       (teamOne === "6" && teamTwo === "3")
     ) {
        tx = await ChangeOrderContract.changeOrderForTop16(12);
     }
     if (
       (teamOne === "4" && teamTwo === "5") ||
       (teamOne === "5" && teamTwo === "4")
     ) {
        tx = await ChangeOrderContract.changeOrderForTop16(13);
     }
     if (
       (teamOne === "4" && teamTwo === "6") ||
       (teamOne === "6" && teamTwo === "4")
     ) {
        tx = await ChangeOrderContract.changeOrderForTop16(14);
     }
     await tx.wait()
       toast.success(
         `You Have Successfully Swapped Teams ${teamOne} and ${teamTwo}!!!`
       );
  } catch (error: any) {
    console.log(error);
    toast.error("Make Sure You Haven't Swapped For Top16 Already")
  }
};

export const changeOrderForTop8 = async (
  teamOne: string,
  teamTwo: string,
  signer: any
): Promise<void> => {
  try {
    let tx
    const ChangeOrderContract = new Contract(
      CHANGE_ORDERS_ADDRESS,
      CHANGE_ORDERS_ABI,
      signer
    );
    if (
      (teamOne === "1" && teamTwo === "2") ||
      (teamOne === "2" && teamTwo === "1")
    ) {
     tx = await ChangeOrderContract.changeOrderForTop8(1);
    }
    if (
      (teamOne === "1" && teamTwo === "3") ||
      (teamOne === "3" && teamTwo === "1")
    ) {
      tx = await ChangeOrderContract.changeOrderForTop8(2);
    }
    if (
      (teamOne === "1" && teamTwo === "4") ||
      (teamOne === "4" && teamTwo === "1")
    ) {
      tx = await ChangeOrderContract.changeOrderForTop8(3);
    }
    if (
      (teamOne === "2" && teamTwo === "3") ||
      (teamOne === "3" && teamTwo === "2")
    ) {
      tx = await ChangeOrderContract.changeOrderForTop8(4);
    }
     if (
       (teamOne === "2" && teamTwo === "4") ||
       (teamOne === "4" && teamTwo === "2")
     ) {
        tx = await ChangeOrderContract.changeOrderForTop8(5);
     }
      if (
        (teamOne === "4" && teamTwo === "3") ||
        (teamOne === "3" && teamTwo === "4")
      ) {
        tx = await ChangeOrderContract.changeOrderForTop8(6);
      }
      await tx.wait()
       toast.success(
         `You Have Successfully Swapped Teams ${teamOne} and ${teamTwo}!!!`
       );
  } catch (error: any) {
    console.log(error);
    toast.error("Make Sure You Haven't Swapped For Top8 Already");
  }
};

export const changeOrderForTop4 = async (
  teamOne: string,
  teamTwo: string,
  signer: any
): Promise<void> => {
  try {
    let tx
    const ChangeOrderContract = new Contract(
      CHANGE_ORDERS_ADDRESS,
      CHANGE_ORDERS_ABI,
      signer
    );
     if (
       (teamOne === "1" && teamTwo === "2") ||
       (teamOne === "2" && teamTwo === "1")
     ) {
      tx = await ChangeOrderContract.changeOrderForTop4(1);
     }
     if (
       (teamOne === "1" && teamTwo === "3") ||
       (teamOne === "3" && teamTwo === "1")
     ) {
      tx = await ChangeOrderContract.changeOrderForTop4(2);
     }
     if (
       (teamOne === "1" && teamTwo === "4") ||
       (teamOne === "4" && teamTwo === "1")
     ) {
       tx = await ChangeOrderContract.changeOrderForTop4(3);
     }
     if (
       (teamOne === "2" && teamTwo === "3") ||
       (teamOne === "3" && teamTwo === "2")
     ) {
       tx = await ChangeOrderContract.changeOrderForTop4(4);
     }
     if (
       (teamOne === "2" && teamTwo === "4") ||
       (teamOne === "4" && teamTwo === "2")
     ) {
      tx = await ChangeOrderContract.changeOrderForTop4(5);
     }
     if (
       (teamOne === "4" && teamTwo === "3") ||
       (teamOne === "3" && teamTwo === "4")
     ) {
      tx = await ChangeOrderContract.changeOrderForTop4(6);
     }
     await tx.wait()
     toast.success(
       `You Have Successfully Swapped Teams ${teamOne} and ${teamTwo}!!!`
     );
  } catch (error: any) {
    console.log(error);
     toast.error("Make Sure You Haven't Swapped For Top4 Already");
  }
};

export const evolveToLevel2 = async (
  teamName: string,
  signer: any
): Promise<void> => {
  try {
    const EvolveContract = new Contract(EVOLVE_ADDRESS, EVOLVE_ABI, signer);
    const tx = await EvolveContract.evolveToLevel2(teamName);
    await tx.wait()
    toast.success(`You Have Successfully Evolved Team ${teamName} To Level 2!!!`)
  } catch (error: any) {
    console.log(error);
    toast.error("Make Sure This Team Has Made It To Top16 And You Haven't Evolved This Team To Top16 Yet")
  }
};

export const evolveToLevel3 = async (
  teamName: string,
  signer: any
): Promise<void> => {
  try {
    const EvolveContract = new Contract(EVOLVE_ADDRESS, EVOLVE_ABI, signer);
    const tx = await EvolveContract.evolveToLevel3(teamName);
    await tx.wait()
     toast.success(
       `You Have Successfully Evolved Team ${teamName} To Level 3!!!`
     );
  } catch (error: any) {
    console.log(error);
     toast.error(
       "Make Sure This Team Has Made It To Top8 And You Haven't Evolved This Team To Top8 Yet"
     );
  }
};

export const evolveToLevel4 = async (
  teamName: string,
  signer: any
): Promise<void> => {
  try {
    const EvolveContract = new Contract(EVOLVE_ADDRESS, EVOLVE_ABI, signer);
   const tx = await EvolveContract.evolveToLevel4(teamName);
   await tx.wait()
   toast.success(
     `You Have Successfully Evolved Team ${teamName} To Level 4!!!`
   );
  } catch (error: any) {
    console.log(error);
     toast.error(
       "Make Sure This Team Has Made It To Top4 And You Haven't Evolved This Team To Top4 Yet"
     );
  }
};
