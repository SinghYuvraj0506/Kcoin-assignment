import { HiOutlineNewspaper } from "react-icons/hi";
import { IoMdArrowForward, IoMdTrendingUp } from "react-icons/io";
import {
  CheckCardProps,
  NewsCardProps,
  TeamCardProps,
} from "../Common/types/global";

export const CheckCards: React.FC<CheckCardProps> = ({
  imgLink,
  title,
  buttonText,
  buttonLink,
}) => {
  const bgColorArray: string[] = [
    "bg-gradient-to-r from-cyan-500 to-blue-500",
    "bg-gradient-to-r from-sky-500 to-indigo-500",
    "bg-gradient-to-r from-violet-500 to-fuchsia-500",
    "bg-gradient-to-r from-purple-500 to-pink-500",
  ];

  return (
    <div
      className={`flex items-center gap-5 p-3 ${
        bgColorArray[Math.floor(Math.random() * bgColorArray.length)]
      } rounded-lg w-full min-w-[50%] h-full max-h-[200px]`}
    >
      <img src={imgLink} alt="" className="rounded-lg w-28 h-28" />

      <div className="flex flex-col gap-4">
        <h2 className="text-white font-bold w-32">{title}</h2>

        <button className="bg-white flex items-center gap-2 justify-center text-xs font-medium py-2 rounded-lg">
          {buttonText} <IoMdArrowForward />{" "}
        </button>
      </div>
    </div>
  );
};

export const TeamCard: React.FC<TeamCardProps> = ({
  profile,
  name,
  designation,
  about,
}) => {
  return (
    <div className="w-full px-5 py-2 box-border bg-[#E8F4FD] flex md:flex-row flex-col items-center md:items-start gap-3 md:gap-6 rounded-lg">
      <div className="flex flex-col gap-1 items-center text-center">
        <img src={profile} alt="" className="w-28 h-28 rounded-lg object-cover"/>

        <h4 className="text-sm font-medium">{name}</h4>
        <span className="text-grey-text text-xs">{designation}</span>
      </div>
 
      <p className="w-full h-full overflow-auto text-xs text-[#0E1629] pt-0 md:pt-8 leading-5">{about}</p>
    </div>
  );
};

const NewsCards: React.FC<NewsCardProps> = ({
  headline,
  desc,
  type = "News",
}) => {
  return (
    <section
      className={`min-w-[90%] md:min-w-[50%] h-full max-h-[150px] md:max-h-[200px] overflow-auto w-1/2 flex items-start gap-2 p-2 md:p-5 box-border ${
        type === "News" ? "bg-[#E8F4FD]" : "bg-light-green"
      } rounded-lg md:rounded-xl`}
    >
      <span
        className={`${
          type === "News" ? "bg-[#0082FF]" : "bg-dark-green"
        } rounded-full p-1 md:p-2 text-xl md:text-2xl text-white`}
      >
        {type === "News" ? <HiOutlineNewspaper /> : <IoMdTrendingUp />}
      </span>

      <div className="w-full flex flex-col gap-2">
        <h5 className="text-xs font-medium">{headline}</h5>
        <span className="text-xs leading-normal text-[#3E5766] h-full">
          {desc}
        </span>
      </div>
    </section>
  );
};

export default NewsCards;
