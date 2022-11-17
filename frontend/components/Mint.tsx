import Qatar from "../public/NFTs/0.png";
import Ecuador from "../public/NFTs/4.png";
import Senegal from "../public/NFTs/8.png";
import Netherlands from "../public/NFTs/12.png";
import England from "../public/NFTs/16.png";
import Iran from "../public/NFTs/20.png";
import USA from "../public/NFTs/24.png";
import Wales from "../public/NFTs/28.png";
import Argentina from "../public/NFTs/32.png";
import SaudiArabia from "../public/NFTs/36.png";
import Mexico from "../public/NFTs/40.png";
import Poland from "../public/NFTs/44.png";
import France from "../public/NFTs/48.png";
import Australia from "../public/NFTs/52.png";
import Denmark from "../public/NFTs/56.png";
import Tunisia from "../public/NFTs/60.png";
import Spain from "../public/NFTs/64.png";
import CostaRica from "../public/NFTs/68.png";
import Germany from "../public/NFTs/72.png";
import Japan from "../public/NFTs/76.png";
import Belgium from "../public/NFTs/80.png";
import Canada from "../public/NFTs/84.png";
import Morocco from "../public/NFTs/88.png";
import Croatia from "../public/NFTs/92.png";
import Brazil from "../public/NFTs/96.png";
import Serbia from "../public/NFTs/100.png";
import Switzerland from "../public/NFTs/104.png";
import Cameroon from "../public/NFTs/108.png";
import Portugal from "../public/NFTs/112.png";
import Ghana from "../public/NFTs/116.png";
import Uruguay from "../public/NFTs/120.png";
import Korea from "../public/NFTs/124.png";
import Image, { StaticImageData } from "next/image";
import Carousel from "better-react-carousel";
import { MdClose } from "react-icons/md";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import {
  buyFirstFourTeams,
  mintOtherTwoTeams,
} from "../contractInteractions/FunctionCalls";
import { PREDICTION_ADDRESS, PREDICTION_ABI } from "../contractInfo/Prediction";
import { ethers, Contract } from "ethers";
import { useSigner, useProvider, useAccount } from "wagmi";
import { useEffect, useState } from "react";
import { Transition } from "@headlessui/react";
const Mint = () => {
  const { data: signer } = useSigner();
  const { address } = useAccount();
  const [showModal, setShowModal] = useState(false);
  const [teamSelection, setTeamSelection] = useState<StaticImageData[]>([]);
  const [inputSelection, setInputSelection] = useState<string[]>([]);
  const [hasUserMinted, setHasUserMinted] = useState<boolean>(false);
  const [maticPrice, setMaticPrice] = useState<any>("0");
  const [maticBiggerThan40, setMaticBiggerThan40] = useState<boolean>(false);
  const [currentPhase, setCurrentPhase] = useState<number>(0);
  const [amount, setAmount] = useState<string>("0");
  const [hasUserMintedExtraTwo, setHasUserMintedExtraTwo] =
    useState<boolean>(false);
  const provider = useProvider();
  const haveYouMinted = async () => {
    try {
      const PredictionContract = new Contract(
        PREDICTION_ADDRESS,
        PREDICTION_ABI,
        provider
      );
      const hasUserMinted = await PredictionContract.haveYouMinted(address);
      setHasUserMinted(hasUserMinted);
    } catch (error: any) {
      console.log(error);
    }
  };

  const haveYouMintedExtraTwo = async () => {
    try {
      const PredictionContract = new Contract(
        PREDICTION_ADDRESS,
        PREDICTION_ABI,
        provider
      );
      const hasUserMintedExtraTwo = await PredictionContract.mintedExtraTwo(
        address
      );
      setHasUserMintedExtraTwo(hasUserMintedExtraTwo);
    } catch (error: any) {
      console.log(error);
    }
  };

  const getCurrentPhase = async () => {
    try {
      const PredictionContract = new Contract(
        PREDICTION_ADDRESS,
        PREDICTION_ABI,
        provider
      );
      const theCurrentPhase = await PredictionContract.currentPhase();
      setCurrentPhase(theCurrentPhase);
    } catch (error: any) {
      console.log(error);
    }
  };

  const getMaticPrice = async () => {
    const PredictionContract = new Contract(
      PREDICTION_ADDRESS,
      PREDICTION_ABI,
      provider
    );
    const re = new RegExp("^-?\\d+(?:.\\d{0," + (2 || -1) + "})?");
    const price = (await PredictionContract.getLatestPrice()) / 100000000;
    const priceWithConversion = await PredictionContract.getLatestPrice();
    if (priceWithConversion.toNumber() >= 40000000) {
      setMaticBiggerThan40(true);
    } else {
      setMaticBiggerThan40(false);
    }
    setMaticPrice(price.toString().match(re)?.[0]);
  };

  useEffect(() => {
    haveYouMinted();
    getCurrentPhase();
    haveYouMintedExtraTwo();
    getMaticPrice();
  }, [address]);

  const renderMintComponent = () => {
    if (hasUserMinted && currentPhase === 0) {
      return (
        <div
          className="bg-gradient-to-r bg-clip-text text-transparent 
        from-white via-green-200 to-green-400
        animate-text text-xl md:text-4xl tracking-wider py-48 md:px-10 px-2"
        >
          Thank you for choosing your teams! Please wait until next worldcup
          round to be able to mint two extra teams!
        </div>
      );
    } else if (!hasUserMinted && currentPhase > 0) {
      return (
        <div
          className="bg-gradient-to-r bg-clip-text text-transparent 
        from-white via-green-200 to-green-400
        animate-text text-xl md:text-4xl tracking-wider py-48 md:px-10 px-2"
        >
          Sorry, You are no longer able to mint teams
        </div>
      );
    } else if (!hasUserMintedExtraTwo && currentPhase > 1) {
      return (
        <div
          className="bg-gradient-to-r bg-clip-text text-transparent 
        from-white via-green-200 to-green-400
        animate-text text-xl md:text-4xl tracking-wider py-48 md:px-10 px-2"
        >
          Sorry, You are no longer able to mint your extra teams
        </div>
      );
    } else if (hasUserMintedExtraTwo) {
      return (
        <div
          className="bg-gradient-to-r bg-clip-text text-transparent 
        from-white via-green-200 to-green-400
        animate-text text-xl md:text-4xl tracking-wider py-48 md:px-10 px-2"
        >
          Thank you for minting!
        </div>
      );
    } else if (!hasUserMintedExtraTwo && currentPhase === 1) {
      return (
        <section className="">
          <div className="text-white sm:flex justify-between px-6 mt-28 mb-10">
            {currentPhase === 1 && (
              <h2 className="text-5xl mb-20">MINT your 2 extra teams</h2>
            )}
            {maticBiggerThan40 && (
              <p className="text-3xl">Unit Price : 12.5 Matic </p>
            )}
            {!maticBiggerThan40 && (
              <p className="text-3xl">Unit Price : 25 Matic </p>
            )}
          </div>

          <div className="flex items-center flex-wrap justify-center">
            {teamSelection[0] !== undefined && (
              <a
                className="text-white px-10 py-4 play-btn animate-text hover:animate-text-hover cursor-pointer rounded "
                onClick={() => {
                  setTeamSelection([]), setInputSelection([]);
                }}
              >
                Delete selections
              </a>
            )}
            {teamSelection[0] !== undefined && (
              <div className="max-w-[350px]">
                <div className=" relative flex justify-center my-4 ">
                  <Transition
                    show={true}
                    enter="transform transition duration-[500ms] ease-in"
                    enterFrom="opacity-0 rotate-[180deg] scale-0"
                    enterTo="opacity-100 rotate-0 scale-100"
                    leave="transform duration-200 transition ease-in-out"
                    leaveFrom="opacity-100 rotate-0 scale-100 "
                    leaveTo="opacity-0 scale-95 "
                    className=" max-w-[250px] mx-auto absolute -top-2 left-1/2 transform -translate-x-1/2  "
                  >
                    <span className="w-12 h-12 flex justify-center items-center text-2xl cursor-pointer bg-blue-600 text-white rounded-full">
                      1
                    </span>
                  </Transition>
                </div>
                <div className="w-[250px]">
                  <Image src={teamSelection[0]} layout="responsive" />
                </div>
              </div>
            )}
            {teamSelection[1] !== undefined && (
              <div className="max-w-[350px]">
                <div className=" relative flex justify-center my-4 ">
                  <Transition
                    show={true}
                    enter="transform transition duration-[500ms] ease-in"
                    enterFrom="opacity-0 rotate-[180deg] scale-0"
                    enterTo="opacity-100 rotate-0 scale-100"
                    leave="transform duration-200 transition ease-in-out"
                    leaveFrom="opacity-100 rotate-0 scale-100 "
                    leaveTo="opacity-0 scale-95 "
                    className=" max-w-[250px] mx-auto absolute -top-2 left-1/2 transform -translate-x-1/2  "
                  >
                    <span className="w-12 h-12 flex justify-center items-center text-2xl cursor-pointer  bg-purple-900 text-white rounded-full">
                      2
                    </span>
                  </Transition>
                </div>
                <div className="w-[250px]">
                  <Image src={teamSelection[1]} layout="responsive" />
                </div>
              </div>
            )}
          </div>

          <div className=" mb-20 3xl:px-40 w-full">
            <Carousel
              cols={4}
              rows={2}
              gap={1}
              loop={true}
              scrollSnap={true}
              arrowLeft={leftArrow}
              arrowRight={rightArrow}
              responsiveLayout={[
                {
                  breakpoint: 1350,
                  cols: 3,
                  rows: 2,
                  loop: true,
                },
                {
                  breakpoint: 700,
                  cols: 1,
                  rows: 2,
                  loop: true,
                },
                {
                  breakpoint: 1050,
                  cols: 2,
                  rows: 1,
                  loop: true,
                },
              ]}
            >
              <Carousel.Item>
                <div className="max-w-[250px] mx-auto">
                  <Image
                    src={Qatar}
                    className="cursor-pointer"
                    onClick={() => {
                      !teamSelection.includes(Qatar) &&
                        setTeamSelection([...teamSelection, Qatar]),
                        !inputSelection.includes("Qatar") &&
                          setInputSelection([...inputSelection, "Qatar"]);
                    }}
                  />
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="max-w-[250px] mx-auto">
                  <Image
                    src={Ecuador}
                    className="cursor-pointer"
                    onClick={() => {
                      !teamSelection.includes(Ecuador) &&
                        setTeamSelection([...teamSelection, Ecuador]),
                        !inputSelection.includes("Ecuador") &&
                          setInputSelection([...inputSelection, "Ecuador"]);
                    }}
                  />
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="max-w-[250px] mx-auto">
                  <Image
                    src={Senegal}
                    className="cursor-pointer"
                    onClick={() => {
                      !teamSelection.includes(Senegal) &&
                        setTeamSelection([...teamSelection, Senegal]),
                        !inputSelection.includes("Senegal") &&
                          setInputSelection([...inputSelection, "Senegal"]);
                    }}
                  />
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="max-w-[250px] mx-auto">
                  <Image
                    src={Netherlands}
                    className="cursor-pointer"
                    onClick={() => {
                      !teamSelection.includes(Netherlands) &&
                        setTeamSelection([...teamSelection, Netherlands]),
                        !inputSelection.includes("Netherlands") &&
                          setInputSelection([...inputSelection, "Netherlands"]);
                    }}
                  />
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="max-w-[250px] mx-auto">
                  <Image
                    src={England}
                    className="cursor-pointer"
                    onClick={() => {
                      !teamSelection.includes(England) &&
                        setTeamSelection([...teamSelection, England]),
                        !inputSelection.includes("England") &&
                          setInputSelection([...inputSelection, "England"]);
                    }}
                  />
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="max-w-[250px] mx-auto">
                  <Image
                    src={Iran}
                    className="cursor-pointer"
                    onClick={() => {
                      !teamSelection.includes(Iran) &&
                        setTeamSelection([...teamSelection, Iran]),
                        !inputSelection.includes("IR Iran") &&
                          setInputSelection([...inputSelection, "IR Iran"]);
                    }}
                  />
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="max-w-[250px] mx-auto">
                  <Image
                    src={USA}
                    className="cursor-pointer"
                    onClick={() => {
                      !teamSelection.includes(USA) &&
                        setTeamSelection([...teamSelection, USA]),
                        !inputSelection.includes("USA") &&
                          setInputSelection([...inputSelection, "USA"]);
                    }}
                  />
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="max-w-[250px] mx-auto">
                  <Image
                    src={Wales}
                    className="cursor-pointer"
                    onClick={() => {
                      !teamSelection.includes(Wales) &&
                        setTeamSelection([...teamSelection, Wales]),
                        !inputSelection.includes("Wales") &&
                          setInputSelection([...inputSelection, "Wales"]);
                    }}
                  />
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="max-w-[250px] mx-auto">
                  <Image
                    src={Argentina}
                    className="cursor-pointer"
                    onClick={() => {
                      !teamSelection.includes(Argentina) &&
                        setTeamSelection([...teamSelection, Argentina]),
                        !inputSelection.includes("Argentina") &&
                          setInputSelection([...inputSelection, "Argentina"]);
                    }}
                  />
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="max-w-[250px] mx-auto">
                  <Image
                    src={SaudiArabia}
                    className="cursor-pointer"
                    onClick={() => {
                      !teamSelection.includes(SaudiArabia) &&
                        setTeamSelection([...teamSelection, SaudiArabia]),
                        !inputSelection.includes("Saudi Arabia") &&
                          setInputSelection([
                            ...inputSelection,
                            "Saudi Arabia",
                          ]);
                    }}
                  />
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="max-w-[250px] mx-auto">
                  <Image
                    src={Mexico}
                    className="cursor-pointer"
                    onClick={() => {
                      !teamSelection.includes(Mexico) &&
                        setTeamSelection([...teamSelection, Mexico]),
                        !inputSelection.includes("Mexico") &&
                          setInputSelection([...inputSelection, "Mexico"]);
                    }}
                  />
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="max-w-[250px] mx-auto">
                  <Image
                    src={Poland}
                    className="cursor-pointer"
                    onClick={() => {
                      !teamSelection.includes(Poland) &&
                        setTeamSelection([...teamSelection, Poland]),
                        !inputSelection.includes("Poland") &&
                          setInputSelection([...inputSelection, "Poland"]);
                    }}
                  />
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="max-w-[250px] mx-auto">
                  <Image
                    src={France}
                    className="cursor-pointer"
                    onClick={() => {
                      !teamSelection.includes(France) &&
                        setTeamSelection([...teamSelection, France]),
                        !inputSelection.includes("France") &&
                          setInputSelection([...inputSelection, "France"]);
                    }}
                  />
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="max-w-[250px] mx-auto">
                  <Image
                    src={Australia}
                    className="cursor-pointer"
                    onClick={() => {
                      !teamSelection.includes(Australia) &&
                        setTeamSelection([...teamSelection, Australia]),
                        !inputSelection.includes("Australia") &&
                          setInputSelection([...inputSelection, "Australia"]);
                    }}
                  />
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="max-w-[250px] mx-auto">
                  <Image
                    src={Denmark}
                    className="cursor-pointer"
                    onClick={() => {
                      !teamSelection.includes(Denmark) &&
                        setTeamSelection([...teamSelection, Denmark]),
                        !inputSelection.includes("Denmark") &&
                          setInputSelection([...inputSelection, "Denmark"]);
                    }}
                  />
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="max-w-[250px] mx-auto">
                  <Image
                    src={Tunisia}
                    className="cursor-pointer"
                    onClick={() => {
                      !teamSelection.includes(Tunisia) &&
                        setTeamSelection([...teamSelection, Tunisia]),
                        !inputSelection.includes("Tunisia") &&
                          setInputSelection([...inputSelection, "Tunisia"]);
                    }}
                  />
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="max-w-[250px] mx-auto">
                  <Image
                    src={Spain}
                    className="cursor-pointer"
                    onClick={() => {
                      !teamSelection.includes(Spain) &&
                        setTeamSelection([...teamSelection, Spain]),
                        !inputSelection.includes("Spain") &&
                          setInputSelection([...inputSelection, "Spain"]);
                    }}
                  />
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="max-w-[250px] mx-auto">
                  <Image
                    src={CostaRica}
                    className="cursor-pointer"
                    onClick={() => {
                      !teamSelection.includes(CostaRica) &&
                        setTeamSelection([...teamSelection, CostaRica]),
                        !inputSelection.includes("Costa Rica") &&
                          setInputSelection([...inputSelection, "Costa Rica"]);
                    }}
                  />
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="max-w-[250px] mx-auto">
                  <Image
                    src={Germany}
                    className="cursor-pointer"
                    onClick={() => {
                      !teamSelection.includes(Germany) &&
                        setTeamSelection([...teamSelection, Germany]),
                        !inputSelection.includes("Germany") &&
                          setInputSelection([...inputSelection, "Germany"]);
                    }}
                  />
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="max-w-[250px] mx-auto">
                  <Image
                    src={Japan}
                    className="cursor-pointer"
                    onClick={() => {
                      !teamSelection.includes(Japan) &&
                        setTeamSelection([...teamSelection, Japan]),
                        !inputSelection.includes("Japan") &&
                          setInputSelection([...inputSelection, "Japan"]);
                    }}
                  />
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="max-w-[250px] mx-auto">
                  <Image
                    src={Belgium}
                    className="cursor-pointer"
                    onClick={() => {
                      !teamSelection.includes(Belgium) &&
                        setTeamSelection([...teamSelection, Belgium]),
                        !inputSelection.includes("Belgium") &&
                          setInputSelection([...inputSelection, "Belgium"]);
                    }}
                  />
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="max-w-[250px] mx-auto">
                  <Image
                    src={Canada}
                    className="cursor-pointer"
                    onClick={() => {
                      !teamSelection.includes(Canada) &&
                        setTeamSelection([...teamSelection, Canada]),
                        !inputSelection.includes("Canada") &&
                          setInputSelection([...inputSelection, "Canada"]);
                    }}
                  />
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="max-w-[250px] mx-auto">
                  <Image
                    src={Morocco}
                    className="cursor-pointer"
                    onClick={() => {
                      !teamSelection.includes(Morocco) &&
                        setTeamSelection([...teamSelection, Morocco]),
                        !inputSelection.includes("Morocco") &&
                          setInputSelection([...inputSelection, "Morocco"]);
                    }}
                  />
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="max-w-[250px] mx-auto">
                  <Image
                    src={Croatia}
                    className="cursor-pointer"
                    onClick={() => {
                      !teamSelection.includes(Croatia) &&
                        setTeamSelection([...teamSelection, Croatia]),
                        !inputSelection.includes("Croatia") &&
                          setInputSelection([...inputSelection, "Croatia"]);
                    }}
                  />
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="max-w-[250px] mx-auto">
                  <Image
                    src={Brazil}
                    className="cursor-pointer"
                    onClick={() => {
                      !teamSelection.includes(Brazil) &&
                        setTeamSelection([...teamSelection, Brazil]),
                        !inputSelection.includes("Brazil") &&
                          setInputSelection([...inputSelection, "Brazil"]);
                    }}
                  />
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="max-w-[250px] mx-auto">
                  <Image
                    src={Serbia}
                    className="cursor-pointer"
                    onClick={() => {
                      !teamSelection.includes(Serbia) &&
                        setTeamSelection([...teamSelection, Serbia]),
                        !inputSelection.includes("Serbia") &&
                          setInputSelection([...inputSelection, "Serbia"]);
                    }}
                  />
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="max-w-[250px] mx-auto">
                  <Image
                    src={Switzerland}
                    className="cursor-pointer"
                    onClick={() => {
                      !teamSelection.includes(Switzerland) &&
                        setTeamSelection([...teamSelection, Switzerland]),
                        !inputSelection.includes("Switzerland") &&
                          setInputSelection([...inputSelection, "Switzerland"]);
                    }}
                  />
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="max-w-[250px] mx-auto">
                  <Image
                    src={Cameroon}
                    className="cursor-pointer"
                    onClick={() => {
                      !teamSelection.includes(Cameroon) &&
                        setTeamSelection([...teamSelection, Cameroon]),
                        !inputSelection.includes("Cameroon") &&
                          setInputSelection([...inputSelection, "Cameroon"]);
                    }}
                  />
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="max-w-[250px] mx-auto">
                  <Image
                    src={Portugal}
                    className="cursor-pointer"
                    onClick={() => {
                      !teamSelection.includes(Portugal) &&
                        setTeamSelection([...teamSelection, Portugal]),
                        !inputSelection.includes("Portugal") &&
                          setInputSelection([...inputSelection, "Portugal"]);
                    }}
                  />
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="max-w-[250px] mx-auto">
                  <Image
                    src={Ghana}
                    className="cursor-pointer"
                    onClick={() => {
                      !teamSelection.includes(Ghana) &&
                        setTeamSelection([...teamSelection, Ghana]),
                        !inputSelection.includes("Ghana") &&
                          setInputSelection([...inputSelection, "Ghana"]);
                    }}
                  />
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="max-w-[250px] mx-auto">
                  <Image
                    src={Uruguay}
                    className="cursor-pointer"
                    onClick={() => {
                      !teamSelection.includes(Uruguay) &&
                        setTeamSelection([...teamSelection, Uruguay]),
                        !inputSelection.includes("Uruguay") &&
                          setInputSelection([...inputSelection, "Uruguay"]);
                    }}
                  />
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="max-w-[250px] mx-auto">
                  <Image
                    src={Korea}
                    className="cursor-pointer"
                    onClick={() => {
                      !teamSelection.includes(Korea) &&
                        setTeamSelection([...teamSelection, Korea]),
                        !inputSelection.includes("Korea Republic") &&
                          setInputSelection([
                            ...inputSelection,
                            "Korea Republic",
                          ]);
                    }}
                  />
                </div>
              </Carousel.Item>
            </Carousel>
          </div>
          <div className="text-white text-4xl sm:flex justify-center sm:justify-around items-center px-6 pt-20 ">
            <a
              className="play-btn text-center py-4 max-w-sm sm:w-[25%] block animate-text cursor-pointer hover:animate-text-hover text-2xl mb-12 md:mb-0"
              onClick={() => {
                setShowModal(!showModal);
              }}
            >
              Mint
            </a>

            <Transition
              show={showModal}
              enter="transform transition duration-[500ms] ease-in"
              enterFrom="opacity-0 scale-0"
              enterTo="opacity-100 rotate-0 scale-100"
              leave="transform duration-[300ms] transition ease-out"
              leaveFrom="opacity-100 rotate-0 scale-100 "
              leaveTo="opacity-0 scale-0 "
              className="w-[100vw] h-[100vh] bg-[#4d4c4cd9] fixed z-40 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 "
            >
              <div className=" bg-shade-bg sm:max-w-full  h-1/2 sm:w-1/2 sm:h-1/2 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-2 z-50 flex flex-col justify-center items-center">
                <p className="sm:mb-14 mb-6 text-lg">Please Select Amount</p>

                <div className="px-2  flex  flex-col sm:flex-row justify-center items-center">
                  <input
                    type="text"
                    className="text-white bg-shade-9 w-[300px] sm:max-w-sm text-2xl sm:text-2xl outline-none py-4 px-1 mb-6 sm:mb-0 sm:mr-24"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setAmount(e.target.value)
                    }
                  />
                  <p>MATIC</p>
                  <a
                    className="self-center text-center fixed z-50 top-1 sm:left-full left-[78%] rounded-full ml-3 bg-purple-900 px-2 py-2 "
                    onClick={() => {
                      setShowModal(!showModal);
                    }}
                  >
                    <MdClose className="text-4xl text-white" />
                  </a>
                </div>
                <a
                  className="play-btn text-center py-4 w-[90%] sm:w-[55%] block animate-text cursor-pointer hover:animate-text-hover text-2xl mt-10"
                  onClick={() =>
                    mintOtherTwoTeams(
                      inputSelection[0],
                      inputSelection[1],
                      signer,
                      amount
                    )
                  }
                >
                  Confirm
                </a>
              </div>
            </Transition>
            <div className="relative group w-fit mx-auto sm:mx-0">
              <div
                className="absolute -inset-2 bg-gradient-to-r from-[#A100F2] via-[#D100D1]
             to-[#F20089] blur-xl transition-all"
              ></div>
              <span className="relative border-t-2 border-[#D100D1] transition-all divide-x divide-white ">
                1 Matic | {maticPrice} $
              </span>
            </div>
          </div>
          <div className=" max-w-2xl mt-10 mb-20 mx-auto text-center">
            <p className="text-white text-2xl ">
              Mint your NFTs here when the World Cup starts, You can only own
              upto 6 NFTs and select 4 of them to be your top 4 teams for the
              World Cup.
            </p>
          </div>
        </section>
      );
    } else {
      return (
        <section className="">
          <div className="text-white sm:flex justify-between px-6 mt-28 mb-10">
            {currentPhase === 0 && (
              <h2 className="text-5xl mb-20">MINT your 4 teams</h2>
            )}
            {maticBiggerThan40 && (
              <p className="text-3xl">Unit Price : 25 Matic </p>
            )}
            {!maticBiggerThan40 && (
              <p className="text-3xl">Unit Price : 50 Matic </p>
            )}
          </div>

          <div className="flex items-center flex-wrap justify-center px-2">
            {teamSelection[0] !== undefined && (
              <a
                className="text-white px-10 py-4 play-btn animate-text hover:animate-text-hover cursor-pointer rounded "
                onClick={() => {
                  setTeamSelection([]), setInputSelection([]);
                }}
              >
                Delete selections
              </a>
            )}
            {teamSelection[0] !== undefined && (
              <div className="max-w-[350px]">
                <div className=" relative flex justify-center my-4 ">
                  <Transition
                    show={true}
                    enter="transform transition duration-[500ms] ease-in"
                    enterFrom="opacity-0 rotate-[180deg] scale-0"
                    enterTo="opacity-100 rotate-0 scale-100"
                    leave="transform duration-200 transition ease-in-out"
                    leaveFrom="opacity-100 rotate-0 scale-100 "
                    leaveTo="opacity-0 scale-95 "
                    className=" max-w-[250px] mx-auto absolute -top-2 left-1/2 transform -translate-x-1/2  "
                  >
                    <span className="w-12 h-12 flex justify-center items-center text-2xl cursor-pointer bg-blue-600 text-white rounded-full">
                      1
                    </span>
                  </Transition>
                </div>
                <div className="w-[250px]">
                  <Image src={teamSelection[0]} layout="responsive" />
                </div>
              </div>
            )}
            {teamSelection[1] !== undefined && (
              <div className="max-w-[350px]">
                <div className=" relative flex justify-center my-4 ">
                  <Transition
                    show={true}
                    enter="transform transition duration-[500ms] ease-in"
                    enterFrom="opacity-0 rotate-[180deg] scale-0"
                    enterTo="opacity-100 rotate-0 scale-100"
                    leave="transform duration-200 transition ease-in-out"
                    leaveFrom="opacity-100 rotate-0 scale-100 "
                    leaveTo="opacity-0 scale-95 "
                    className=" max-w-[250px] mx-auto absolute -top-2 left-1/2 transform -translate-x-1/2  "
                  >
                    <span className="w-12 h-12 flex justify-center items-center text-2xl cursor-pointer  bg-purple-900 text-white rounded-full">
                      2
                    </span>
                  </Transition>
                </div>
                <div className="w-[250px]">
                  <Image src={teamSelection[1]} layout="responsive" />
                </div>
              </div>
            )}
            {teamSelection[2] !== undefined && (
              <div className="max-w-[350px]">
                <div className=" relative flex justify-center my-4 ">
                  <Transition
                    show={true}
                    enter="transform transition duration-[500ms] ease-in"
                    enterFrom="opacity-0 rotate-[180deg] scale-0"
                    enterTo="opacity-100 rotate-0 scale-100"
                    leave="transform duration-200 transition ease-in-out"
                    leaveFrom="opacity-100 rotate-0 scale-100 "
                    leaveTo="opacity-0 scale-95 "
                    className=" max-w-[250px] mx-auto absolute -top-2 left-1/2 transform -translate-x-1/2  "
                  >
                    <span className="w-12 h-12 flex justify-center items-center text-2xl cursor-pointer  bg-red-500 text-white rounded-full">
                      3
                    </span>
                  </Transition>
                </div>
                <div className="w-[250px]">
                  <Image src={teamSelection[2]} layout="responsive" />
                </div>
              </div>
            )}
            {teamSelection[3] !== undefined && (
              <div className="max-w-[350px]">
                <div className=" relative flex justify-center my-4 ">
                  <Transition
                    show={true}
                    enter="transform transition duration-[500ms] ease-in"
                    enterFrom="opacity-0 rotate-[180deg] scale-0"
                    enterTo="opacity-100 rotate-0 scale-100"
                    leave="transform duration-200 transition ease-in-out"
                    leaveFrom="opacity-100 rotate-0 scale-100 "
                    leaveTo="opacity-0 scale-95 "
                    className=" max-w-[250px] mx-auto absolute -top-2 left-1/2 transform -translate-x-1/2  "
                  >
                    <span className="w-12 h-12 flex justify-center items-center text-2xl cursor-pointer bg-[#86761f] text-white rounded-full">
                      4
                    </span>
                  </Transition>
                </div>
                <div className="w-[250px]">
                  <Image src={teamSelection[3]} layout="responsive" />
                </div>
              </div>
            )}
          </div>

          <div className=" mb-20 3xl:px-40 w-full">
            <Carousel
              cols={4}
              rows={2}
              gap={1}
              loop={true}
              scrollSnap={true}
              arrowLeft={leftArrow}
              arrowRight={rightArrow}
              responsiveLayout={[
                {
                  breakpoint: 1350,
                  cols: 3,
                  rows: 2,
                  loop: true,
                },
                {
                  breakpoint: 700,
                  cols: 1,
                  rows: 2,
                  loop: true,
                },
                {
                  breakpoint: 1050,
                  cols: 2,
                  rows: 1,
                  loop: true,
                },
              ]}
            >
              <Carousel.Item>
                <div className="max-w-[250px] mx-auto">
                  <Image
                    src={Qatar}
                    className="cursor-pointer"
                    onClick={() => {
                      !teamSelection.includes(Qatar) &&
                        setTeamSelection([...teamSelection, Qatar]),
                        !inputSelection.includes("Qatar") &&
                          setInputSelection([...inputSelection, "Qatar"]);
                    }}
                  />
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="max-w-[250px] mx-auto">
                  <Image
                    src={Ecuador}
                    className="cursor-pointer"
                    onClick={() => {
                      !teamSelection.includes(Ecuador) &&
                        setTeamSelection([...teamSelection, Ecuador]),
                        !inputSelection.includes("Ecuador") &&
                          setInputSelection([...inputSelection, "Ecuador"]);
                    }}
                  />
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="max-w-[250px] mx-auto">
                  <Image
                    src={Senegal}
                    className="cursor-pointer"
                    onClick={() => {
                      !teamSelection.includes(Senegal) &&
                        setTeamSelection([...teamSelection, Senegal]),
                        !inputSelection.includes("Senegal") &&
                          setInputSelection([...inputSelection, "Senegal"]);
                    }}
                  />
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="max-w-[250px] mx-auto">
                  <Image
                    src={Netherlands}
                    className="cursor-pointer"
                    onClick={() => {
                      !teamSelection.includes(Netherlands) &&
                        setTeamSelection([...teamSelection, Netherlands]),
                        !inputSelection.includes("Netherlands") &&
                          setInputSelection([...inputSelection, "Netherlands"]);
                    }}
                  />
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="max-w-[250px] mx-auto ">
                  <Image
                    src={England}
                    className="cursor-pointer"
                    onClick={() => {
                      !teamSelection.includes(England) &&
                        setTeamSelection([...teamSelection, England]),
                        !inputSelection.includes("England") &&
                          setInputSelection([...inputSelection, "England"]);
                    }}
                  />
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="max-w-[250px] mx-auto">
                  <Image
                    src={Iran}
                    className="cursor-pointer"
                    onClick={() => {
                      !teamSelection.includes(Iran) &&
                        setTeamSelection([...teamSelection, Iran]),
                        !inputSelection.includes("IR Iran") &&
                          setInputSelection([...inputSelection, "IR Iran"]);
                    }}
                  />
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="max-w-[250px] mx-auto">
                  <Image
                    src={USA}
                    className=" cursor-pointer"
                    onClick={() => {
                      !teamSelection.includes(USA) &&
                        setTeamSelection([...teamSelection, USA]),
                        !inputSelection.includes("USA") &&
                          setInputSelection([...inputSelection, "USA"]);
                    }}
                  />
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="max-w-[250px] mx-auto">
                  <Image
                    src={Wales}
                    className="cursor-pointer"
                    onClick={() => {
                      !teamSelection.includes(Wales) &&
                        setTeamSelection([...teamSelection, Wales]),
                        !inputSelection.includes("Wales") &&
                          setInputSelection([...inputSelection, "Wales"]);
                    }}
                  />
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="max-w-[250px] mx-auto">
                  <Image
                    src={Argentina}
                    className="cursor-pointer"
                    onClick={() => {
                      !teamSelection.includes(Argentina) &&
                        setTeamSelection([...teamSelection, Argentina]),
                        !inputSelection.includes("Argentina") &&
                          setInputSelection([...inputSelection, "Argentina"]);
                    }}
                  />
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="max-w-[250px] mx-auto">
                  <Image
                    src={SaudiArabia}
                    className="cursor-pointer"
                    onClick={() => {
                      !teamSelection.includes(SaudiArabia) &&
                        setTeamSelection([...teamSelection, SaudiArabia]),
                        !inputSelection.includes("Saudi Arabia") &&
                          setInputSelection([
                            ...inputSelection,
                            "Saudi Arabia",
                          ]);
                    }}
                  />
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="max-w-[250px] mx-auto">
                  <Image
                    src={Mexico}
                    className="cursor-pointer"
                    onClick={() => {
                      !teamSelection.includes(Mexico) &&
                        setTeamSelection([...teamSelection, Mexico]),
                        !inputSelection.includes("Mexico") &&
                          setInputSelection([...inputSelection, "Mexico"]);
                    }}
                  />
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="max-w-[250px] mx-auto">
                  <Image
                    src={Poland}
                    className="cursor-pointer"
                    onClick={() => {
                      !teamSelection.includes(Poland) &&
                        setTeamSelection([...teamSelection, Poland]),
                        !inputSelection.includes("Poland") &&
                          setInputSelection([...inputSelection, "Poland"]);
                    }}
                  />
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="max-w-[250px] mx-auto">
                  <Image
                    src={France}
                    className="cursor-pointer"
                    onClick={() => {
                      !teamSelection.includes(France) &&
                        setTeamSelection([...teamSelection, France]),
                        !inputSelection.includes("France") &&
                          setInputSelection([...inputSelection, "France"]);
                    }}
                  />
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="max-w-[250px] mx-auto">
                  <Image
                    src={Australia}
                    className="cursor-pointer"
                    onClick={() => {
                      !teamSelection.includes(Australia) &&
                        setTeamSelection([...teamSelection, Australia]),
                        !inputSelection.includes("Australia") &&
                          setInputSelection([...inputSelection, "Australia"]);
                    }}
                  />
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="max-w-[250px] mx-auto">
                  <Image
                    src={Denmark}
                    className="cursor-pointer"
                    onClick={() => {
                      !teamSelection.includes(Denmark) &&
                        setTeamSelection([...teamSelection, Denmark]),
                        !inputSelection.includes("Denmark") &&
                          setInputSelection([...inputSelection, "Denmark"]);
                    }}
                  />
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="max-w-[250px] mx-auto">
                  <Image
                    src={Tunisia}
                    className="cursor-pointer"
                    onClick={() => {
                      !teamSelection.includes(Tunisia) &&
                        setTeamSelection([...teamSelection, Tunisia]),
                        !inputSelection.includes("Tunisia") &&
                          setInputSelection([...inputSelection, "Tunisia"]);
                    }}
                  />
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="max-w-[250px] mx-auto">
                  <Image
                    src={Spain}
                    className="cursor-pointer"
                    onClick={() => {
                      !teamSelection.includes(Spain) &&
                        setTeamSelection([...teamSelection, Spain]),
                        !inputSelection.includes("Spain") &&
                          setInputSelection([...inputSelection, "Spain"]);
                    }}
                  />
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="max-w-[250px] mx-auto">
                  <Image
                    src={CostaRica}
                    className="cursor-pointer"
                    onClick={() => {
                      !teamSelection.includes(CostaRica) &&
                        setTeamSelection([...teamSelection, CostaRica]),
                        !inputSelection.includes("Costa Rica") &&
                          setInputSelection([...inputSelection, "Costa Rica"]);
                    }}
                  />
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="max-w-[250px] mx-auto">
                  <Image
                    src={Germany}
                    className="cursor-pointer"
                    onClick={() => {
                      !teamSelection.includes(Germany) &&
                        setTeamSelection([...teamSelection, Germany]),
                        !inputSelection.includes("Germany") &&
                          setInputSelection([...inputSelection, "Germany"]);
                    }}
                  />
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="max-w-[250px] mx-auto">
                  <Image
                    src={Japan}
                    className="cursor-pointer"
                    onClick={() => {
                      !teamSelection.includes(Japan) &&
                        setTeamSelection([...teamSelection, Japan]),
                        !inputSelection.includes("Japan") &&
                          setInputSelection([...inputSelection, "Japan"]);
                    }}
                  />
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="max-w-[250px] mx-auto">
                  <Image
                    src={Belgium}
                    className="cursor-pointer"
                    onClick={() => {
                      !teamSelection.includes(Belgium) &&
                        setTeamSelection([...teamSelection, Belgium]),
                        !inputSelection.includes("Belgium") &&
                          setInputSelection([...inputSelection, "Belgium"]);
                    }}
                  />
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="max-w-[250px] mx-auto">
                  <Image
                    src={Canada}
                    className="cursor-pointer"
                    onClick={() => {
                      !teamSelection.includes(Canada) &&
                        setTeamSelection([...teamSelection, Canada]),
                        !inputSelection.includes("Canada") &&
                          setInputSelection([...inputSelection, "Canada"]);
                    }}
                  />
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="max-w-[250px] mx-auto">
                  <Image
                    src={Morocco}
                    className="cursor-pointer"
                    onClick={() => {
                      !teamSelection.includes(Morocco) &&
                        setTeamSelection([...teamSelection, Morocco]),
                        !inputSelection.includes("Morocco") &&
                          setInputSelection([...inputSelection, "Morocco"]);
                    }}
                  />
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="max-w-[250px] mx-auto">
                  <Image
                    src={Croatia}
                    className="cursor-pointer"
                    onClick={() => {
                      !teamSelection.includes(Croatia) &&
                        setTeamSelection([...teamSelection, Croatia]),
                        !inputSelection.includes("Croatia") &&
                          setInputSelection([...inputSelection, "Croatia"]);
                    }}
                  />
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="max-w-[250px] mx-auto">
                  <Image
                    src={Brazil}
                    className="cursor-pointer"
                    onClick={() => {
                      !teamSelection.includes(Brazil) &&
                        setTeamSelection([...teamSelection, Brazil]),
                        !inputSelection.includes("Brazil") &&
                          setInputSelection([...inputSelection, "Brazil"]);
                    }}
                  />
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="max-w-[250px] mx-auto">
                  <Image
                    src={Serbia}
                    className="cursor-pointer"
                    onClick={() => {
                      !teamSelection.includes(Serbia) &&
                        setTeamSelection([...teamSelection, Serbia]),
                        !inputSelection.includes("Serbia") &&
                          setInputSelection([...inputSelection, "Serbia"]);
                    }}
                  />
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="max-w-[250px] mx-auto">
                  <Image
                    src={Switzerland}
                    className="cursor-pointer"
                    onClick={() => {
                      !teamSelection.includes(Switzerland) &&
                        setTeamSelection([...teamSelection, Switzerland]),
                        !inputSelection.includes("Switzerland") &&
                          setInputSelection([...inputSelection, "Switzerland"]);
                    }}
                  />
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="max-w-[250px] mx-auto">
                  <Image
                    src={Cameroon}
                    className="cursor-pointer"
                    onClick={() => {
                      !teamSelection.includes(Cameroon) &&
                        setTeamSelection([...teamSelection, Cameroon]),
                        !inputSelection.includes("Cameroon") &&
                          setInputSelection([...inputSelection, "Cameroon"]);
                    }}
                  />
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="max-w-[250px] mx-auto">
                  <Image
                    src={Portugal}
                    className="cursor-pointer"
                    onClick={() => {
                      !teamSelection.includes(Portugal) &&
                        setTeamSelection([...teamSelection, Portugal]),
                        !inputSelection.includes("Portugal") &&
                          setInputSelection([...inputSelection, "Portugal"]);
                    }}
                  />
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="max-w-[250px] mx-auto">
                  <Image
                    src={Ghana}
                    className="cursor-pointer"
                    onClick={() => {
                      !teamSelection.includes(Ghana) &&
                        setTeamSelection([...teamSelection, Ghana]),
                        !inputSelection.includes("Ghana") &&
                          setInputSelection([...inputSelection, "Ghana"]);
                    }}
                  />
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="max-w-[250px] mx-auto">
                  <Image
                    src={Uruguay}
                    className="cursor-pointer"
                    onClick={() => {
                      !teamSelection.includes(Uruguay) &&
                        setTeamSelection([...teamSelection, Uruguay]),
                        !inputSelection.includes("Uruguay") &&
                          setInputSelection([...inputSelection, "Uruguay"]);
                    }}
                  />
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <div className="max-w-[250px] mx-auto">
                  <Image
                    src={Korea}
                    className="cursor-pointer"
                    onClick={() => {
                      !teamSelection.includes(Korea) &&
                        setTeamSelection([...teamSelection, Korea]),
                        !inputSelection.includes("Korea Republic") &&
                          setInputSelection([
                            ...inputSelection,
                            "Korea Republic",
                          ]);
                    }}
                  />
                </div>
              </Carousel.Item>
            </Carousel>
          </div>
          <div className="text-white text-4xl sm:flex justify-center sm:justify-around items-center px-6 pt-20 ">
            <a
              className="play-btn text-center py-4 max-w-sm sm:w-[25%] block animate-text cursor-pointer hover:animate-text-hover text-2xl mb-12 md:mb-0"
              onClick={() => {
                setShowModal(!showModal);
              }}
            >
              Mint
            </a>

            <Transition
              show={showModal}
              enter="transform transition duration-[500ms] ease-in"
              enterFrom="opacity-0 scale-0"
              enterTo="opacity-100 rotate-0 scale-100"
              leave="transform duration-[300ms] transition ease-out"
              leaveFrom="opacity-100 rotate-0 scale-100"
              leaveTo="opacity-0 scale-0"
              className="w-[100vw] h-[100vh] bg-[#4d4c4cd9] fixed z-40 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            >
              <div className=" bg-shade-bg sm:max-w-full  h-1/2 sm:w-2/2 sm:h-1/2 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-2 z-50 flex flex-col justify-center items-center">
                <p className="sm:mb-14 mb-6 text-lg">Please Select Amount</p>

                <div className="px-2  flex  flex-col sm:flex-row justify-center items-center">
                  <input
                    type="text"
                    className="text-white bg-shade-9 w-[300px] sm:max-w-sm text-2xl sm:text-2xl outline-none py-4 px-1 mb-6 sm:mb-0 sm:mr-24 md:w-3/6"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setAmount(e.target.value)
                    }
                  />
                  <p>MATIC</p>
                  <a
                    className="self-center text-center fixed z-50 top-1 sm:left-full left-[78%] rounded-full ml-3 bg-purple-900 px-2 py-2 "
                    onClick={() => {
                      setShowModal(!showModal);
                    }}
                  >
                    <MdClose className="text-4xl text-white cursor-pointer" />
                  </a>
                </div>
                <a
                  className="play-btn text-center py-4 w-[90%] sm:w-[55%] block animate-text cursor-pointer hover:animate-text-hover text-2xl mt-10"
                  onClick={() =>
                    buyFirstFourTeams(
                      inputSelection[0],
                      inputSelection[1],
                      inputSelection[2],
                      inputSelection[3],
                      signer,
                      amount
                    )
                  }
                >
                  Confirm
                </a>
              </div>
            </Transition>
            <div className="relative group w-fit mx-auto sm:mx-0">
              <div
                className="absolute -inset-2 bg-gradient-to-r from-[#A100F2] via-[#D100D1]
             to-[#F20089] blur-xl transition-all"
              ></div>
              <span className="relative border-t-2 border-[#D100D1] transition-all divide-x divide-white ">
                1 Matic | {maticPrice} $
              </span>
            </div>
          </div>
          <div className=" max-w-2xl mt-10 mb-20 mx-auto text-center">
            <p className="text-white text-2xl ">
              Mint your NFTs here when the World Cup starts, You can only own
              upto 6 NFTs and select 4 of them to be your top 4 teams for the
              World Cup.
            </p>
          </div>
        </section>
      );
    }
  };

  const leftArrow = () => (
    <button className="w-14 h-14 bg-skin-base flex absolute rounded-full top-[calc(90%+4rem)] left-[calc(50%-80px)] justify-center items-center shadow-md shadow-purple-200 cursor-pointer bg-purple-900 hover:opacity-80 hover:shadow-none transition-all ">
      <AiOutlineArrowLeft className="text-2xl text-white" />
    </button>
  );
  const rightArrow = () => (
    <button className="w-14 h-14 bg-skin-base absolute rounded-full top-[calc(90%+4rem)] right-[calc(50%-80px)] flex justify-center items-center shadow-md shadow-purple-200 cursor-pointer bg-purple-900 hover:opacity-80 transition-all hover:shadow-none">
      <AiOutlineArrowRight className="text-2xl text-white" />
    </button>
  );
  useEffect(() => {
    console.log(inputSelection);
  }, [inputSelection]);
  return <main>{renderMintComponent()}</main>;
};

export default Mint;
