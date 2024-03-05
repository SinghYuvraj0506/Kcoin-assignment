import React from "react";
import Graphs from "../Components/Graphs";
import { IoIosArrowRoundForward } from "react-icons/io";
import { RiTriangleFill } from "react-icons/ri";
import { FaCircleInfo } from "react-icons/fa6";
import {
  FundamentalsArray,
  OtherMetricsArray,
} from "../Common/Constants/Constants";

const NavigationMenu: React.FC = () => {
  return (
    <section className="w-full flex items-center gap-5 text-sm border-b border-[#eee]">
      {OtherMetricsArray.map((e, i) => {
        return (
          <span
            key={`navmenu${i}`}
            className="cursor-pointer border-b-2 border-transparent hover:text-primary-blue text-[#4f4f4f] font-medium hover:border-b-primary-blue pb-2"
          >
            {e.metricName}
          </span>
        );
      })}
    </section>
  );
};

const OverViewSection: React.FC = () => {
  return (
    <div className="w-full bg-white rounded-lg flex flex-col gap-5 px-5 py-5 box-border">
      <h2 className="text-xl font-semibold">Performance</h2>

      <div className="w-full flex flex-col items-center gap-5">
        <section className="flex w-full items-center justify-between">
          <div className="flex flex-col gap-1 items-center">
            <span className="text-[#768396] text-xs">Today's Low</span>
            <span className="text-sm">46900.00</span>
          </div>
          <div className="flex flex-col gap-1 items-center">
            <span className="text-[#768396] text-xs">Today's Low</span>
            <span className="text-sm">46900.00</span>
          </div>
        </section>
        <section className="flex w-full items-center justify-between">
          <div className="flex flex-col gap-1 items-center">
            <span className="text-[#768396] text-xs">Today's Low</span>
            <span className="text-sm">46900.00</span>
          </div>
          <div className="flex flex-col gap-1 items-center">
            <span className="text-[#768396] text-xs">Today's Low</span>
            <span className="text-sm">46900.00</span>
          </div>
        </section>
      </div>

      <div className="mt-3 flex flex-col gap-3">
        <h3 className="flex items-center gap-2 text-lg font-medium">
          Fundamentals <FaCircleInfo color="768396" />
        </h3>

        <section className="w-full grid grid-cols-2 gap-x-10 gap-y-4">
          {FundamentalsArray(
            "Bitcoin",
            16000,
            1212,
            12,
            12,
            12,
            12,
            113,
            4,
            3,
            43,
            5,
            634,
            63,
            "hias",
            "asas"
          )?.map((e, i) => {
            return (
              <div className="w-full flex items-center justify-between border-b border-[#eff2f5] text-sm pb-2">
                <span className="text-[#768396] ">{e.parameterName}</span>

                <span>{e.value}</span>
              </div>
            );
          })}
        </section>
      </div>
    </div>
  );
};

const SentimentSection: React.FC = () => {
  return (
    <div className="w-full bg-white rounded-lg flex flex-col gap-5 px-5 py-5 box-border">
      <h2 className="text-xl font-semibold">Sentiment</h2>

      <section>
        <h3 className="flex items-center gap-2 text-lg font-medium">
          Key Events <FaCircleInfo color="768396" />
        </h3>

        <div>
            
        </div>
      </section>

      <section>
        <h3 className="flex items-center gap-2 text-lg font-medium">
          Analyst Estimates <FaCircleInfo color="768396" />
        </h3>
      </section>
    </div>
  );
};

const Currency = () => {
  return (
    <div className="w-full px-10 box-border flex justify-between gap-3 h-max">
      {/* Left Side Panel ----------------------------------- */}
      <div className="min-w-[65%] flex flex-col gap-4">
        <div className="w-full h-[60vh] mb-6">
          <Graphs />
        </div>

        {/* Other Metrics ------------------------------------- */}
        <NavigationMenu />
        <OverViewSection />
        <SentimentSection />
      </div>

      {/* Right Side Panel ----------------------------------- */}
      <div className="w-full flex flex-col items-center gap-4 h-10">
        {/* Get Started Section ----------------------- */}
        <section className="bg-primary-blue flex flex-col items-center py-10 w-full text-center text-white gap-6 rounded-xl">
          <h2 className="text-xl font-bold">
            Get Started with KoinX <br /> for FREE
          </h2>

          <p className="text-xs">
            With our range of features that you can equip for <br /> free, KoinX
            allows you to be more educated and <br /> aware of your tax reports.
          </p>

          <img src="/ilus1.webp" alt="" className="w-40" />

          <button className="flex items-center gap-2 font-medium bg-white rounded-lg py-2 px-5 text-black text-sm">
            Get Started for FREE <IoIosArrowRoundForward />
          </button>
        </section>

        {/* Trending Coins -------------------------------------- */}
        <div className="w-full bg-white rounded-xl flex flex-col gap-5 px-5 py-5 box-border">
          <h2 className="text-xl font-semibold">Trending Coins (24h)</h2>

          <section className="flex flex-col gap-4">
            <div className="w-full flex items-center justify-between">
              <span className="text-sm ">Etherum(Eth)</span>
              <div className="bg-[#ebf9f4] text-[#0fba83] flex items-center justify-center gap-2 px-3 rounded-sm">
                <RiTriangleFill color="#0fba83" /> 8.21%
              </div>
            </div>
            <div className="w-full flex items-center justify-between">
              <span className="text-sm ">Etherum(Eth)</span>
              <div className="bg-[#ebf9f4] text-[#0fba83] flex items-center justify-center gap-2 px-3 rounded-sm">
                <RiTriangleFill color="#0fba83" /> 8.21%
              </div>
            </div>
            <div className="w-full flex items-center justify-between">
              <span className="text-sm ">Etherum(Eth)</span>
              <div className="bg-[#ebf9f4] text-[#0fba83] flex items-center justify-center gap-2 px-3 rounded-sm">
                <RiTriangleFill color="#0fba83" /> 8.21%
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Currency;
