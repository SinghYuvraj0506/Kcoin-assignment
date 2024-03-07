export interface metricObj {
  metricName: string;
  metricId: string;
}

export interface CoinFundamentals {
  parameterName: string;
  value: string;
  info?: string;
}

export interface NewsCardProps {
  headline: string;
  desc: string;
  type?: "News" | "Trend";
}

export interface CheckCardProps {
  title: string;
  buttonText: string;
  imgLink: string;
  buttonLink?: string;
}

export interface TeamCardProps {
  name: string;
  designation: string;
  about: string;
  profile: string;
}

export interface trendingData {
  item: {
    name: string;
    id:string;
    thumb: string;
    symbol:string;
    data: {
      price: string;
      price_change_percentage_24h: {
        usd: string;
      };
      sparkline: string;
    };
  };
}
