type Props = {};
import Ball from "../public/img/ball.jpg";
import Image from "next/image";
function Countdown({}: Props) {
  return (
    <section>
      <div
        className="countdown bg-countdown bg-no-repeat 
      relative min-w-screen flex justify-center md:justify-between items-start md:items-center px-4"
      >
        <div className="timer text-white md:mt-0">
          <p className="md:text-3xl mb-6 text-xl">Tournament starts in</p>
          <p className="md:text-6xl text-2xl">690 : 08 : 09 : 23</p>
        </div>
      </div>
    </section>
  );
}

export default Countdown;
