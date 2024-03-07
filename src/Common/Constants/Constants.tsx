import { CoinFundamentals, metricObj } from "../types/global";

export const OtherMetricsArray: metricObj[] = [
  {
    metricName: "Overview",
    metricId: "overview",
  },
  {
    metricName: "Fundamentals",
    metricId: "fundamentals",
  },
  {
    metricName: "News Insights",
    metricId: "news",
  },
  {
    metricName: "Sentiments",
    metricId: "sentiments",
  },
  {
    metricName: "Team",
    metricId: "team",
  },
  {
    metricName: "Technicals",
    metricId: "technicals",
  },
  {
    metricName: "Tokenomics",
    metricId: "tokenomics",
  },
];

export const FundamentalsArray = (
  coin: string,
  price: number,
  Low24h: number,
  High24h: number,
  Low7d: number,
  High7d: number,
  tradingVolume: number,
  marketCapRank: number,
  marketCap: number,
  marketCapDominance: number,
  allTimeHighValue: number,
  allTimeHighPercent: number,
  allTimeLowValue: number,
  allTimeLowPercent: number,
  allTimeHighInfo:string,
  allTimeLowInfo:string,
): CoinFundamentals[] => {
  return [
    {
      parameterName: `${coin} Price`,
      value: `$${price}`,
    },
    {
      parameterName: "24h Low / 24h High",
      value: `$${Low24h} / $${High24h}`,
    },
    {
      parameterName: "7d Low / 7d High",
      value: `$${Low7d} / $${High7d}`,
    },
    {
      parameterName: "Trading Volume",
      value: `$${tradingVolume}`,
    },
    {
      parameterName: "Market Cap Rank",
      value: `#${marketCapRank}`,
    },
    {
      parameterName: "Market Cap",
      value: `$${marketCap}`,
    },
    {
      parameterName: "Market Cap Dominance",
      value: `$${marketCapDominance}`,
    },
    {
      parameterName: "Volume / Market Cap ",
      value: (tradingVolume/marketCap).toFixed(0).toString(),
    },
    {
      parameterName: "All-Time High",
      value: `$${allTimeHighValue} ${allTimeHighPercent}`,
      info:allTimeHighInfo
    },
    {
        parameterName: "All-Time Low",
        value: `$${allTimeLowValue} ${allTimeLowPercent}`,
        info:allTimeLowInfo
    },
  ];
};
