import React, { useEffect, useRef } from "react";

interface ImgGraphsProps {
  symbol: string;
  percentChange: string;
  thumb: string;
  graphImg: string;
  price: string;
}

export const ImgGraphs: React.FC<ImgGraphsProps> = ({
  symbol,
  percentChange,
  thumb,
  graphImg,
  price,
}) => {
  return (
    <div className="flex flex-col gap-2 w-[218w] min-w-[18vw] h-[130px] min-h-[130px] border border-[#E3E3E3] rounded-lg p-3 cursor-pointer hover:shadow-lg">
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

const Graphs: React.FC = () => {
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
          "symbol": "BITSTAMP:BTCUSD",
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

    container.current.appendChild(script);

    return () => {
      container.current.removeChild(script);
    };
  }, []);

  return (
    <div
      className="tradingview-widget-container w-full h-full"
      ref={container}
    ></div>
  );
};

export default Graphs;
