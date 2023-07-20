import React from "react";
import Banner from "../assets/banner1.png";

const About = () => {
  return (
    <div className="py-20 w-full">
      <div className="container flex gap-9 justify-center flex-col items-center">
        <h1 className="text-center text-neutral-900 font-Modak text-7xl font-normal">
          About Pepe le pew
        </h1>
        <p className="text-center text-neutral-900 font-normal text-xl max-w-3xl leading-relaxed">
          Pepe and Toad the memecoin Launched on the ethereum. Our mission is to
          provide a fun, community-driven investment opportunity that celebrates
          the power of memes and pop culture. With a vision to become the
          leading memecoin in the market, we believe Pepe and Toad is the
          perfect addition to any investor’s portfolio. Join us on this journey
          to revolutionize the world of memecoins. the market, we believe Pepe
          and Toad is the perfect addition to any investor’s portfolio. Join us
          on this journey to revolutionize the world of memecoins.
        </p>
        <img src={Banner} alt="" className="pointer-events-none"/>
      </div>
    </div>
  );
};

export default About;
