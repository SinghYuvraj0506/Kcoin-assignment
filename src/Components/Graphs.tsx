import React, { useEffect, useRef } from "react";
import { RiTriangleFill } from "react-icons/ri";
import { useNavigate } from "react-router";

interface ImgGraphsProps {
  symbol: string;
  percentChange: string;
  thumb: string;
  graphImg: string;
  price: string;
  id:string,
}

interface GraphsProps {
  name: string;
  symbol: string;
  market_cap_rank: number;
  image: {
    thumb: string;
  };
  market_data: {
    current_price: {
      usd: number;
      inr: number;
    };
    price_change_percentage_24h: number;
    price_change_percentage_7d: number;
    price_change_percentage_14d: number;
    price_change_percentage_30d: number;
    price_change_percentage_60d: number;
    price_change_percentage_200d: number;
    price_change_percentage_1y: number;
  };
}

export const ImgGraphs: React.FC<ImgGraphsProps> = ({
  symbol,
  percentChange,
  thumb,
  graphImg,
  price,
  id
}) => {
  return (
    <div className="flex flex-col gap-2 w-[218w] min-w-[18vw] h-[130px] min-h-[130px] border border-[#E3E3E3] rounded-lg p-3 cursor-pointer hover:shadow-lg" onClick={()=>{
      window.open(`/${id}`,"_self")
    }}>
      <div className="flex items-center gap-2">
        <img src={thumb} alt="" className="w-5" />
        <span className="text-xs">{symbol}</span>
        <span
          className={`text-xs px-2 py-1 ${
            parseInt(percentChange) < 0
              ? "bg-light-red text-dark-red"
              : "bg-light-green text-dark-green"
          }  rounded`}
        >
          {parseInt(percentChange).toFixed(2) + "%"}
        </span>
      </div>

      <span className="text-lg">
        {price.includes("sub title") ? "$" + price.split(`"`)[1] : price}
      </span>

      {/* graph image */}
      <img src={graphImg} alt="" className="w-2/3 mx-auto relative bottom-4" />
    </div>
  );
};

const Graphs: React.FC<GraphsProps> = ({
  name,
  symbol,
  image,
  market_data,
  market_cap_rank,
}) => {
  const container = useRef();

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = `
        {
          "autosize": true,
          "symbol": "BITSTAMP:${symbol?.toUpperCase()}USD",
          "timezone": "Etc/UTC",
          "theme": "light",
          "style": "2",
          "locale": "en",
          "enable_publishing": false,
          "hide_top_toolbar": true,
          "hide_legend": true,
          "range": "1M",
          "save_image": false,
          "calendar": false,
          "hide_volume": true,
          "support_host": "https://www.tradingview.com"
        }`;

    if (container.current ) {
      container.current?.appendChild(script);
    }

    return () => {
      if (container.current) {
        container.current?.removeChild(script);
      }
    };
  }, [symbol]);

  return (
    <div className="w-full h-full py-3 px-5 box-border bg-white rounded-lg flex flex-col gap-5">
      {/* Name and rank ------------- */}
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-2">
          <img src={image?.thumb} alt="" />
          <h2 className="text-lg font-medium">{name}</h2>
          <span className="text-grey-text font-semibold text-sm uppercase">
            {symbol}
          </span>
        </div>

        <span className="px-3 py-2 rounded-lg bg-[#758396] text-white text-xs">
          Rank #{market_cap_rank}
        </span>
      </div>

      {/* Prices and fluctuations ----------------- */}
      <div className="flex gap-8 border-b border-[#dbdbdc] pb-4">
        <section className="flex flex-col gap-1">
          <h2 className="text-2xl font-medium">
            ${market_data?.current_price?.usd}
          </h2>
          <h3 className="text-xs text-grey-text">
            ₹{market_data?.current_price?.inr}
          </h3>
        </section>

        <section className="flex gap-2 items-center h-max">
          <div className="flex items-center justify-center gap-2 px-3 py-1 rounded-sm text-sm bg-light-green text-dark-green">
            <RiTriangleFill />{" "}
            {market_data?.price_change_percentage_24h?.toFixed(2)}%
          </div>

          <span className="text-xs text-grey-text">(24H)</span>
        </section>
      </div>

      {/* Graphs integration -------------- */}
      <div
        className="tradingview-widget-container w-full h-full"
        ref={container}
      ></div>
    </div>
  );
};

export default Graphs;
