import React, { useState } from "react";

const Banner = () => {
  const [hidden, setHidden] = useState(false);
  return (
    <div
      className={`min-h-screen w-full z-50 ${
        !hidden ? "fixed" : "hidden"
      } top-0 left-0 bg-black/50 flex justify-center items-center`}
    >
      <div className="container flex justify-center items-center">
        <article className="w-full md:w-[700px] md:h-[400px] bg-[#F30709] h-[500px] rounded-md  flex justify-center flex-col p-10">
          <div className="font-Modak break-all text-center text-white text-5xl font-normal leading-[52px] tracking-wide">
            Get the latest scoop on Pepe le pew’s arrest
          </div>
          <div className="font-Modak mt-6 flex-wrap justify-center items-start gap-4 inline-flex">
            <div
              onClick={() => {
                setHidden(true);
                const audio = new Audio("/sound.mpeg");
                audio.play();
              }}
              className="h-[66px] hover:scale-95 transition p-[3px] rounded-full border border-lime-500 justify-center items-center flex"
            >
              <div className="grow shrink basis-0 self-stretch px-8 py-4 bg-lime-500 rounded-full justify-center items-center gap-2.5 inline-flex">
                <div className="text-white text-xl font-normal leading-7 tracking-wider">
                  ENTER NOW!
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default Banner;
