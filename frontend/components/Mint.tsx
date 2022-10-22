import Link from "next/link";

const Mint = () => {
  return (
    <section className="">
      <div className="text-white sm:flex justify-between px-6 mt-[400px]">
        <h2 className="text-5xl mb-20">MINT your nfts</h2>
        <p className="text-3xl">Unit Price : 0.050 </p>
      </div>
      <div className="text-white text-4xl sm:flex justify-between px-6">
        <div className="relative group w-fit">
          <div
            className="absolute inset-0 bg-gradient-to-r from-[#A100F2] via-[#D100D1]
             to-[#F20089] blur-lg transition-all"
          ></div>
          <span className="relative border-t-2 border-[#D100D1] py-1 transition-all divide-x divide-white">
            0.050 | 0.04 $
          </span>
        </div>
        <Link href="/">
          <span className="play-btn text-center py-4 w-[90%] sm:w-[30%] block animate-text cursor-pointer hover:animate-text-hover text-2xl">
            PlayGame
          </span>
        </Link>
      </div>
      <div className=" max-w-2xl my-20">
        <p className="text-white text-2xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in
          at faucibus blandit egestas congue. Felis, feugia t viverra quis
          felis.
        </p>
      </div>
    </section>
  );
};

export default Mint;
