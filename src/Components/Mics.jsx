import React from "react";
import chart from "../assets/chart.png";

const Mics = () => {
  return (
    <div className="py-20 w-full">
      <div className="container flex gap-9 justify-center flex-col items-center">
        <h1 className="text-center text-neutral-900 font-Modak text-7xl font-normal">
          Tokenomics
        </h1>
        <div className="grid w-full grid-cols-1 lg:grid-cols-2 justify-between gap-16">
          <img src={chart} alt="" />
          <div className="flex-col justify-start items-start gap-8 inline-flex">
            <div className=" w-full pt-[26px] pb-[25px] rounded-lg border border-neutral-950 justify-center items-center inline-flex">
              <div className="self-stretch flex-col justify-start items-center gap-1 inline-flex">
                <div className="text-center text-zinc-950 text-2xl font-normal">
                  Buy & Sell
                </div>
                <div className="text-center text-zinc-950 text-[40px] font-normal">
                  1%
                </div>
              </div>
            </div>
            <div className=" w-full pt-[26px] pb-[25px] rounded-lg border border-neutral-950 justify-center items-center inline-flex">
              <div className="self-stretch flex-col justify-start items-center gap-1 inline-flex">
                <div className="text-center capitalize text-black text-2xl font-normal">
                  total supply
                </div>
                <div className="text-center text-black text-[40px] font-normal">
                  69,000,000
                </div>
              </div>
            </div>
            <div className=" w-full pt-[26px] pb-[25px] rounded-lg border border-neutral-950 justify-center items-center inline-flex">
              <div className="self-stretch flex-col justify-start items-center gap-1 inline-flex">
                <div className="text-center text-neutral-950 text-2xl font-normal">
                  Max Wallet
                </div>
                <div className="text-center text-neutral-950 text-[40px] font-normal">
                  2%
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mics;
