type Props = {};
import { useState, useEffect } from "react";
import { TimeLeft } from "../interfaces/Countdown";
import Ball from "../public/img/ball.svg";
import Image from "next/image";
import bg from "../public/img/bg.png";

const Countdown = ({}: Props) => {
  const calculateTimeLeft = (): TimeLeft => {
    let year: number = new Date().getFullYear();
    const difference: number = +new Date(`${year}-11-20`) - +new Date();
    let timeLeft: TimeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const timerComponents: JSX.Element[] = [];

  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Get the current time every second
    setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
  });

  useEffect(() => {
    setTimeLeft(calculateTimeLeft());
  }, []);

  Object.keys(timeLeft).forEach((interval) => {
    if (timeLeft[interval] == 0) {
      return;
    }

    timerComponents.push(
      <span>
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });

  return (
    <section className="relative ">
      <div
        className="text-white 
      w-full -z-10 "
      >
        <Image src={bg} layout="responsive" alt="rolling-ball" />

        <div className="absolute bottom-[23%] left-[25%] sm:left-[10%]">
          <p className="md:text-3xl mb:mb-6 text-lg sm:text-xl">
            Tournament starts in
          </p>
          <p className="md:text-6xl text-xl sm:text-2xl">
            {timeLeft.days} : {timeLeft.hours} : {timeLeft.minutes} :{" "}
            {timeLeft.seconds}
          </p>
          </div>
      <div className="absolute top-[100%] xl:-top-20 left-2 xl:left-[58%] 3xl:left-[71%] 3xl:bottom-[18%] bottom-1 z-4 ">
        <Ball className="lg:text-[600px] 3xl:text-[48rem] md:text-[400px] text-[350px] animate-spin " />
      </div>
      </div>
    </section>
  );
};

export default Countdown;
