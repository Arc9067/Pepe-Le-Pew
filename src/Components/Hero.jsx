import React from "react";
import Report from "../assets/report.png";
import i1 from "../assets/1i.png";
import i2 from "../assets/2i.png";
import i3 from "../assets/3i.png";

const Hero = () => {
  return (
    <section
      className="py-20 w-full relative min-h-screen flex justify-center items-center"
      id="hero"
    >
      {/* <img
        src={i1}
        alt=""
        className="absolute left-0 top-0 w-[5rem] md:w-max"
      />
      <img
        src={i3}
        alt=""
        className="absolute left-0 bottom-0 w-[5rem] md:w-max"
      />
      <img
        src={i2}
        alt=""
        className="absolute top-10 w-[5rem] right-0 md:w-max"
      /> */}
      <div className="container gap-7 flex flex-col items-center justify-center">
        <h1 className="text-center text-black text-8xl lg:text-9xl  font-Modak stroke">
          Pepe le pew
        </h1>

        <div className="font-Modak flex-wrap justify-center items-start gap-4 inline-flex">
          <a
            href=""
            className="h-[66px] hover:scale-95 transition p-[3px] rounded-full border border-lime-500 justify-center items-center flex"
          >
            <div className="grow shrink basis-0 self-stretch px-8 py-4 bg-lime-500 rounded-full justify-center items-center gap-2.5 inline-flex">
              <div className="text-white text-xl font-normal leading-7 tracking-tight">
                BUY NOW
              </div>
            </div>
          </a>
          <a
            href="https://t.me/PepeLePewENTRY"
            className="h-[66px] hover:scale-95 transition p-[3px] rounded-full border border-red-400 justify-center items-center flex"
          >
            <div className="grow shrink basis-0 self-stretch px-8 py-4 bg-red-400 rounded-full justify-center items-center gap-2.5 inline-flex">
              <div className="text-white text-xl font-normal leading-7 tracking-tight">
                TELEGRAM
              </div>
            </div>
          </a>
        </div>
        <img src={Report} alt="" />
      </div>
    </section>
  );
};

export default Hero;
