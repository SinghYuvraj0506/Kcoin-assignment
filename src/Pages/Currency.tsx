import React, { useState } from "react";
import Graphs, { ImgGraphs } from "../Components/Graphs";
import { IoIosArrowRoundForward } from "react-icons/io";
import { RiTriangleFill } from "react-icons/ri";
import { FaCircleInfo } from "react-icons/fa6";
import {
  FundamentalsArray,
  OtherMetricsArray,
} from "../Common/Constants/Constants";
import NewsCards, { CheckCards, TeamCard } from "../Components/Cards";
import {
  NewsCardProps,
  TeamCardProps,
  trendingData,
} from "../Common/types/global";
import { useAxios } from "../Common/Hooks/useAxios";
import { TbTriangleInvertedFilled } from "react-icons/tb";

interface OverviewProps{
  name:string,
  market_cap_rank:number,
  market_data:{
    current_price:{
      usd:number
    },
    ath:{
      usd:number
    },
    atl:{
      usd:number
    },
    ath_change_percentage:{
      usd:number
    },
    atl_change_percentage:{
      usd:number
    },
    ath_date:{
      usd:string
    },
    atl_date:{
      usd:string
    },
    market_cap:{
      usd:number
    },
    total_volume:{
      usd:number
    },
    market_cap_fdv_ratio:number,
    high_24h:{
      usd:number
    },
    low_24h:{
      usd:number
    }
}
}

const NavigationMenu: React.FC = () => {
  return (
    <section className="w-full flex items-center gap-10 text-sm border-b border-[#dbdbdc]">
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

const OverViewSection: React.FC<OverviewProps> = ({name,market_cap_rank,market_data}) => {
  return (
    <div className="w-full bg-white rounded-lg flex flex-col gap-5 px-6 py-5 box-border">
      <h2 className="text-xl font-semibold">Performance</h2>

      <div className="w-full flex flex-col items-center gap-5">
        <section className="flex w-full items-center justify-between">
          <div className="flex flex-col gap-1 items-center">
            <span className="text-grey-text text-xs">Today's Low</span>
            <span className="text-sm">---</span>
          </div>
          <div className="flex flex-col gap-1 items-center">
            <span className="text-grey-text text-xs">Today's High</span>
            <span className="text-sm">---</span>
          </div>
        </section>
        <section className="flex w-full items-center justify-between">
          <div className="flex flex-col gap-1 items-center">
            <span className="text-grey-text text-xs">52W Low</span>
            <span className="text-sm">---</span>
          </div>
          <div className="flex flex-col gap-1 items-center">
            <span className="text-grey-text text-xs">52W High</span>
            <span className="text-sm">---</span>
          </div>
        </section>
      </div>

      <div className="mt-3 flex flex-col gap-3">
        <h3 className="flex items-center gap-2 text-lg font-medium">
          Fundamentals <FaCircleInfo color="768396" />
        </h3>

        <section className="w-full grid grid-cols-2 gap-x-10 gap-y-4">
          {FundamentalsArray(
            name,
            market_data?.current_price?.usd,
            market_data?.low_24h?.usd,
            market_data?.high_24h?.usd,
            12,
            12,
            market_data?.total_volume?.usd,
            market_cap_rank,
            market_data?.market_cap?.usd,
            4,
            market_data?.ath?.usd,
            market_data?.ath_change_percentage?.usd,
            market_data?.atl?.usd,
            market_data?.atl_change_percentage?.usd,
            "hias",
            "asas"
          )?.map((e, i) => {
            return (
              <div className="w-full flex items-center justify-between border-b border-[#eff2f5] text-sm pb-2">
                <span className="text-grey-text ">{e.parameterName}</span>

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
  const [dummyEvents, setDummyEvents] = useState<NewsCardProps[]>([
    {
      headline:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus, quibusdam!",
      desc: "asdasdasd",
      type: "News",
    },
    {
      headline:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus, quibusdam!",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus, quibusdam! asdasd Lorem ipsum, dolor sit amet consectetur adipisicing tibus.",
      type: "Trend",
    },
    {
      headline:
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus, quibusdam!",
      desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus, quibusdam! asdasd Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repudiandae rem, nihil quidem reprehenderit fuga laboriosam esse harum totam, officia commodi placeat sunt. Dignissimos nihil doloribus ea molestias voluptas, id, temporibus dolore eaque similique beatae praesentium blanditiis, fugiat qui consectetur necessitatibus.l doloribus ea molestias voluptas, id, temporibus dolore eaque similique beatae praesentium blanditiis, fugiat qui consectetur necessitatibusl doloribus ea molestias voluptas, id, temporibus dolore eaque similique beatae praesentium blanditiis, fugiat qui consectetur necessitatibusl doloribus ea molestias voluptas, id, temporibus dolore eaque similique beatae praesentium blanditiis, fugiat qui consectetur necessitatibus",
      type: "Trend",
    },
  ]);

  return (
    <div className="w-full bg-white rounded-lg flex flex-col gap-5 px-6 py-5 box-border">
      <h2 className="text-xl font-semibold">Sentiment</h2>

      <section className="flex flex-col gap-2">
        <h3 className="flex items-center gap-2 text-lg font-medium">
          Key Events <FaCircleInfo color="768396" />
        </h3>

        <div className="w-full overflow-x-auto flex items-center gap-5">
          {dummyEvents?.map((e, i) => {
            return <NewsCards {...e} key={`news${i}`} />;
          })}
        </div>
      </section>

      <section className="flex flex-col gap-5">
        <h3 className="flex items-center gap-2 text-lg font-medium">
          Analyst Estimates <FaCircleInfo color="768396" />
        </h3>

        <div className="flex items-center gap-10">
          <div className="text-2xl flex items-center justify-center rounded-full bg-light-green w-24 h-24 text-dark-green font-semibold">
            76%
          </div>

          <div className="flex flex-col items-start gap-4 text-xs text-grey-text font-medium">
            <section>Buy</section>
            <section>Hold</section>
            <section>Sold</section>
          </div>
        </div>
      </section>
    </div>
  );
};

const AboutSection: React.FC<{ name:string,description:{en:string} }> = ({ name,description }) => {
  return (
    <div className="w-full bg-white rounded-lg flex flex-col gap-5 px-6 py-5 box-border">
      <h2 className="text-xl font-semibold">About {name}</h2>

      <section className="flex flex-col gap-2 border-b border-[#e4e4e7] pb-2">
        <h3 className="flex items-center gap-2 text-lg font-semibold">
          What is {name}?
        </h3>

        <p className="text-sm">
          {description?.en?.split("\r\n")[0]}
        </p>
      </section>

      <section className="flex flex-col gap-2 border-b border-[#e4e4e7] pb-2">
        <h3 className="flex items-center gap-2 text-lg font-semibold">
          Lorem ipsum dolor sit.
        </h3>

        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero sint
          consequuntur eaque et, totam ut voluptatem ratione nobis aliquam
          impedit, optio porro quaerat odit voluptates quo, eligendi
          reprehenderit unde dolore hic nulla laborum! At, magnam voluptatibus
          unde deleniti nulla inventore.
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Qui nam
          nobis doloremque delectus quisquam dicta! Deserunt, eos officiis!
          Incidunt, at cum alias dolor ab et quaerat laudantium odit culpa quos
          placeat accusamus maiores repellendus? Veritatis est iusto obcaecati
          similique laudantium. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Excepturi assumenda harum sed voluptate rem
          provident alias unde itaque, ducimus fugit eveniet vitae ipsam enim
          qui. Id, nemo eligendi maiores veritatis eius corporis dolores
          voluptates, recusandae nihil mollitia doloremque soluta nulla ipsum
          doloribus aliquam tenetur officiis repellendus fugiat! Enim minima
          iure ratione quaerat officia itaque delectus necessitatibus nemo
          aperiam rerum! Necessitatibus, architecto harum minus perferendis
          consectetur obcaecati explicabo officia error ipsum molestias dolore
          quibusdam corporis, esse nemo adipisci corrupti suscipit. Asperiores?
          <br />
          <br />
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
          mollitia minima. Explicabo eius blanditiis sed voluptates aut. Ullam,
          non corporis.
        </p>
      </section>

      <section className="flex flex-col gap-2 border-b border-[#e4e4e7] pb-2">
        <h2 className="text-xl font-semibold">Already Holding {name}?</h2>

        <div className="flex items-center gap-2 w-full">
          <CheckCards
            title="Calculate your Profits"
            buttonText="Check Now"
            imgLink="https://cdn.investsomemoney.com/wp-content/uploads/2023/02/Best-Investment-Apps-for-Beginners.jpg"
          />
          <CheckCards
            title="Calculate your tax liability"
            buttonText="Check Now"
            imgLink="https://images.unsplash.com/photo-1613843439331-2080752b4518?q=80&w=2835&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </div>
      </section>

      <p className="text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero sint
        consequuntur eaque et, totam ut voluptatem ratione nobis aliquam
        impedit, optio porro quaerat odit voluptates quo, eligendi reprehenderit
        unde dolore hic nulla laborum! At, magnam voluptatibus unde deleniti
        nulla inventore.
      </p>
    </div>
  );
};

const TokenomicsSection: React.FC = () => {
  return (
    <div className="w-full bg-white rounded-lg flex flex-col gap-5 px-6 py-5 box-border">
      <h2 className="text-xl font-semibold">Tokenomics</h2>

      <section className="flex flex-col gap-2 pb-2">
        <h3 className="flex items-center gap-2 text-lg font-semibold">
          Initial Distribution
        </h3>

        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni maxime
          quasi nemo minima dolores! Asperiores natus explicabo reiciendis. Est
          quidem illo voluptatibus, omnis corrupti ab cupiditate mollitia iste.
          Facere, similique sed distinctio adipisci expedita enim repudiandae,
          porro doloremque architecto repellat minima nulla nisi voluptas quidem
          fuga culpa reiciendis, molestiae a laborum mollitia. Dolores illo
          reiciendis asperiores facere consequuntur temporibus deleniti.
        </p>
      </section>
    </div>
  );
};

const TeamSection: React.FC = () => {
  const [dummyTeam, setDummyTeam] = useState<TeamCardProps[]>([
    {
      profile:
        "https://www.allprodad.com/wp-content/uploads/2021/03/05-12-21-happy-people.jpg",
      name: "John Smith",
      designation: "Software Developer",
      about:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, dolorem! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur perferendis consequatur cumque illum molestias nihil ducimus, aperiam corporis neque dolor.",
    },
    {
      profile:
        "https://static.independent.co.uk/s3fs-public/thumbnails/image/2015/06/06/15/Chris-Pratt.jpg",
      name: "Chris Hemsworth",
      designation: "Son of God",
      about:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, dolorem! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur perferendis consequatur cumque illum molestias nihil ducimus, aperiam corporis neque dolor.",
    },
    {
      profile:
        "https://www.discoverwalks.com/blog/wp-content/uploads/2023/03/michael_b._jordan_cannes_2018.jpg",
      name: "Chris Evans",
      designation: "Founder",
      about:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, dolorem! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur perferendis consequatur cumque illum molestias nihil ducimus, aperiam corporis neque dolor.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, dolorem! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur perferendis consequatur cumque illum molestias nihil ducimus, aperiam corporis neque dolor.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, dolorem! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequuntur perferendis consequatur cumque",
    },
  ]);

  return (
    <div className="w-full bg-white rounded-lg flex flex-col gap-5 px-6 py-5 box-border">
      <h2 className="text-xl font-semibold">Team</h2>

      <p className="text-sm">
        reiciendis, molestiae a laborum mollitia. Dolores illo reiciendis
        asperiores facere consequuntur temporibus deleniti.
      </p>

      <div className="flex flex-col items-center gap-5">
        {dummyTeam?.map((e, i) => {
          return <TeamCard {...e} key={`team${i}`} />;
        })}
      </div>
    </div>
  );
};

const LikeSection: React.FC<{ trendingCoinsData: trendingData[] }> = ({
  trendingCoinsData,
}) => {
  return (
    <div className="w-full bg-white px-10 py-8 box-border flex flex-col gap-8">
      <section className="flex flex-col gap-2">
        <h2 className="text-xl font-semibold">You May Also Like</h2>
        <div className="flex items-center gap-5 w-full overflow-x-auto">
          {trendingCoinsData?.map((e, i) => {
            return (
              <ImgGraphs
                graphImg={e?.item?.data?.sparkline}
                percentChange={e?.item?.data?.price_change_percentage_24h?.usd}
                thumb={e?.item?.thumb}
                price={e?.item?.data?.price}
                symbol={e?.item?.symbol}
                key={`trendingcoinz${i}`}
              />
            );
          })}
        </div>
      </section>
      <section className="flex flex-col gap-2">
        <h2 className="text-xl font-semibold">Trending Coins</h2>
        <div className="flex items-center gap-5 w-full overflow-x-auto">
          {trendingCoinsData?.map((e, i) => {
            return (
              <ImgGraphs
                graphImg={e?.item?.data?.sparkline}
                percentChange={e?.item?.data?.price_change_percentage_24h?.usd}
                thumb={e?.item?.thumb}
                price={e?.item?.data?.price}
                symbol={e?.item?.symbol}
                key={`trendingcoinz${i}`}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
};

const Currency = () => {
  const slug = "bitcoin";

  const { data: trendingData } = useAxios(
    "https://api.coingecko.com/api/v3/search/trending"
  );

  const { data: coinData } = useAxios(
    `https://api.coingecko.com/api/v3/coins/${slug}`
  );

  return (
    <div className="w-full pt-5 flex flex-col gap-20">
      <div className="w-full px-10 box-border flex justify-between gap-3 h-max relative">
        {/* Left Side Panel ----------------------------------- */}
        <div className="min-w-[72%] w-[72%] flex flex-col gap-4 box-border">
          <div className="w-full h-[80vh] mb-6">
            {coinData && <Graphs {...coinData}/>}
          </div>

          {/* Other Metrics ------------------------------------- */}
          <NavigationMenu />
          <OverViewSection {...coinData}/>
          <SentimentSection />
          <AboutSection {...coinData}/>
          <TokenomicsSection />
          <TeamSection />
        </div>

        {/* Right Side Panel ----------------------------------- */}
        <div className="w-full flex flex-col items-center gap-4 h-10">
          {/* Get Started Section ----------------------- */}
          <section className="bg-primary-blue flex flex-col items-center py-10 w-full text-center text-white gap-6 rounded-xl">
            <h2 className="text-xl font-bold">
              Get Started with KoinX <br /> for FREE
            </h2>

            <p className="text-xs">
              With our range of features that you can equip for <br /> free,
              KoinX allows you to be more educated and <br /> aware of your tax
              reports.
            </p>

            <img src="/ilus1.webp" alt="" className="w-40" />

            <button className="flex items-center gap-2 font-medium bg-white rounded-lg py-2 px-5 text-black text-sm">
              Get Started for FREE <IoIosArrowRoundForward />
            </button>
          </section>

          {/* Trending Coins -------------------------------------- */}
          <div className="w-full bg-white rounded-xl flex flex-col gap-5 px-5 py-5 box-border">
            <h2 className="text-xl font-semibold">Trending Coins (24h)</h2>

            <section className="flex flex-col gap-5">
              {trendingData?.coins?.slice(0, 3)?.map((e: trendingData) => {
                return (
                  <div className="w-full flex items-center justify-between">
                    <span className="text-sm flex items-center gap-2">
                    <img src={e?.item?.thumb} alt="" className="w-5"/>
                      {e?.item?.name} ({e?.item?.symbol})
                    </span>
                    <div
                      className={`${
                        parseInt(
                          e?.item?.data?.price_change_percentage_24h?.usd
                        ) < 0
                          ? "bg-light-red text-dark-red"
                          : "bg-light-green text-dark-green"
                      } flex items-center justify-center gap-2 px-3 py-1 rounded-sm text-sm`}
                    >
                      {parseInt(
                          e?.item?.data?.price_change_percentage_24h?.usd
                        ) > 0 ? <RiTriangleFill /> : <TbTriangleInvertedFilled />}{" "}
                      {parseInt(
                        e?.item?.data?.price_change_percentage_24h?.usd
                      ).toFixed(2) + "%"}
                    </div>
                  </div>
                );
              })}
            </section>
          </div>
        </div>
      </div>

      {/* You Like Section ----------------------- */}
      <LikeSection trendingCoinsData={trendingData?.coins} />
    </div>
  );
};

export default Currency;
