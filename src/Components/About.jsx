import React from "react";
import Banner from "../assets/banner1.png";
import warrant from "../assets/warrant.png";

const About = () => {
  return (
    <div className="py-20 w-full">
      <div className="container flex gap-9 justify-center flex-col items-center">
        <h1 className="text-center stroke text-neutral-900 font-Modak text-7xl font-normal">
          Arrest Warrant
        </h1>
        <img src={warrant} className="md:w-[25rem]" alt="" />
        <p className="text-center text-neutral-900 font-normal text-xl max-w-3xl leading-relaxed">
          <strong className="text-2xl">BREAKING NEWS:</strong> A country wide
          search for an armed and dangerous individual named “Pepe Le Pew” was
          underway almost the entire month of July. Pepe Le Pew was booked and
          charged after prosecutors found him guilty of felony tax evasion,
          felony theft with intent to distribute about 1,200 wallet private
          keys/password, and was found with 69 kilos of cocaine.
          <br />
          <br />
          Pepe Le Pew has been sentenced to prison in the state of California
          with a sentence of 420 years.
        </p>
        <img src={Banner} alt="" className="pointer-events-none" />
      </div>
    </div>
  );
};

export default About;
