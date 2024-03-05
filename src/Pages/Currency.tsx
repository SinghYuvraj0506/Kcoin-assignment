import React from "react";
import Graphs from "../Components/Graphs";
import { IoIosArrowRoundForward } from "react-icons/io";
import { RiTriangleFill } from "react-icons/ri";

interface metricObj{
    metricName:string,
    metricId:string
}


const OtherMetricsArray:metricObj[] = [
    {
        metricName:"Overview",
        metricId:"overview"
    },
    {
        metricName:"Fundamentals",
        metricId:"fundamentals"
    },
    {
        metricName:"News Insights",
        metricId:"news"
    },
    {
        metricName:"Sentiments",
        metricId:"sentiments"
    },
    {
        metricName:"Team",
        metricId:"team"
    },
    {
        metricName:"Technicals",
        metricId:"technicals"
    },
    {
        metricName:"Tokenomics",
        metricId:"Tokenomics"
    },
]



const NavigationMenu:React.FC = () =>{
    return (
        <section className="w-full flex items-center gap-5 text-sm border-b border-[#eee]">
            {OtherMetricsArray.map((e,i)=>{
                return <span key={`navmenu${i}`} className="cursor-pointer border-b-2 border-transparent hover:text-primary-blue text-[#4f4f4f] font-medium hover:border-b-primary-blue pb-2">{e.metricName}</span>
            })}
        </section>
    )
}




const Currency = () => {
  return (
    <div className="w-full px-10 box-border flex justify-between gap-3">
      <div className="min-w-[65%] h-[60vh]">

        {/* Graphs data ---------------- */}
        <Graphs />

        {/* Other Metrics ------------------------------------- */}
        
        <NavigationMenu/>



      </div>

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
                <div className="bg-[#ebf9f4] text-[#0fba83] flex items-center justify-center gap-2 px-3 rounded-sm"><RiTriangleFill color="#0fba83"/> 8.21%</div>
              </div>
              <div className="w-full flex items-center justify-between">
                <span className="text-sm ">Etherum(Eth)</span>
                <div className="bg-[#ebf9f4] text-[#0fba83] flex items-center justify-center gap-2 px-3 rounded-sm"><RiTriangleFill color="#0fba83"/> 8.21%</div>
              </div>
              <div className="w-full flex items-center justify-between">
                <span className="text-sm ">Etherum(Eth)</span>
                <div className="bg-[#ebf9f4] text-[#0fba83] flex items-center justify-center gap-2 px-3 rounded-sm"><RiTriangleFill color="#0fba83"/> 8.21%</div>
              </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Currency;
