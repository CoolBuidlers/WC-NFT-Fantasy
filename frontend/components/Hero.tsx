import React, {useEffect} from "react";
import Link from "next/link";

const Hero = () => {
  const fetchData = async () => {
    //World Cup ID = 7
    //League ID = 788
    //Season ID = 3072
    // const response = await fetch(
    //   `https://app.sportdataapi.com/api/v1/soccer/seasons?apikey=3ea27ea0-48bc-11ed-b28c-c7621712479b&league_id=788`
    // );
    const response = await fetch(
      `https://app.sportdataapi.com/api/v1/soccer/teams/12501?apikey=3ea27ea0-48bc-11ed-b28c-c7621712479b`
    );

    /*
    12550 - Ecuador
    3080 - Netherlands
    12279 - Qatar
    56 - Senegal
    12302 - England
    12396 - Iran
    7850 - USA
    14218 - Wales
    12502 - Argentina
    12473 - Mexico
    3011 - Poland
    767 - Saudi Arabia
    3008 - Denmark
    12300 - France
    73 - Tunisia
    14219 - IC Play-Off 1
    14220 - IC Play-Off 2
    3017 - Germany
    12397 - Japan
    3024 - Spain
    3054 - Belgium
    7835 - Canada
    3026 - Croatia
    52 - Morocco
    12504 - Brazil
    85 - Cameroon
    3036 - Serbia
    3064 - Switzerland
    95 - Ghana
    755 - Republic of Korea
    12299 - Portugal
    12501 - Uruguay

    Costa Rica
    Australia
    */
    const mintedTokens = await response.json();
    console.log(mintedTokens);
  };

  useEffect(() => {
   //fetchData()
  },[])
  return (
    <section className="px-2 py-20 text-white">
      <div className="flex justify-start">
        <div className="md:w-3/5 md:px-12 px-4 ">
          <h2 className="text-4xl text-skin-base my-4 leading-tight lg:text-7xl tracking-tighter mb-6">
            World Cup{" "}
            <span
              className="bg-gradient-to-r bg-clip-text text-transparent 
            from-pink-400 via-purple-500 to-green-400
            animate-text"
            >
              2022
            </span>
            <br /> NFT Fantasy
          </h2>
          <p className="text-base text-skin-muted dark:text-skin-darkMuted lg:text-2xl sm:mb-14 mb-10">
            Purchase Team cards as NFTs and use them for prediction and play
            other games to earn extra points to earn your chance to win a grand
            prize!
          </p>
          <div>
            <Link href="/Usage">
              <span className="play-btn py-4 px-6 animate-text cursor-pointer hover:animate-text-hover ">
                PlayGame
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
