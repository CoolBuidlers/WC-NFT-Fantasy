type Props = {};
import { useState, useEffect } from "react";
import { TimeLeft } from "../interfaces/Countdown";
import Ball from "../public/img/ball.jpg";
import Image from "next/image";
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
    <section>
      <div
        className="countdown bg-countdown bg-no-repeat 
      relative min-w-screen flex justify-center md:justify-between items-start md:items-center px-4"
      >
        <div className="timer text-white md:mt-0">
          <p className="md:text-3xl mb-6 text-xl">Tournament starts in</p>
          <p className="md:text-6xl text-2xl">{timeLeft.days} : {timeLeft.hours} : {timeLeft.minutes} : {timeLeft.seconds}</p>
        </div>
      </div>
    </section>
  );
}

export default Countdown;
