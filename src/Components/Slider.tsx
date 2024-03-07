import React, { useEffect, useRef, useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const Slider: React.FC<{ dataToMap: React.ReactNode[] }> = ({ dataToMap }) => {
  const [showSlider, setShowSlider] = useState({ left: true, right: true });

  const sliderRef = useRef<HTMLDivElement>(null);
  const sliderWrapperRef = useRef<HTMLDivElement>(null);

  //  handle slider slide ---------------------------------------------
  const handleSlide = (from: string) => {
    if (sliderRef.current) {
      if (from === "left") {
        sliderRef.current.scrollLeft -= 400;
      } else {
        sliderRef.current.scrollLeft += 400;
      }

      if (sliderWrapperRef.current) {
        setShowSlider({
          left: sliderRef.current.scrollLeft > 0,
          right:
            sliderRef.current.scrollLeft <
            sliderRef.current.scrollWidth -
              sliderWrapperRef.current?.scrollWidth,
        });
      }
    }
  };

  //  effect to hide the slide buttons -----------------
  useEffect(() => {
      if (sliderWrapperRef.current && sliderRef.current) {
      setShowSlider({
        left: sliderRef.current.scrollLeft > 0,
        right:
          sliderRef.current.scrollLeft <
          sliderRef.current?.scrollWidth -
            sliderWrapperRef.current?.scrollWidth,
      });
    }
  }, [dataToMap]);

  return (
    <div
      className="w-full overflow-hidden flex items-center relative"
      ref={sliderWrapperRef}
    >
      {showSlider?.left && (
        <span
          className="absolute left-2 bg-white rounded-full p-2 text-grey-text text-xl hover:shadow-lg cursor-pointer font-medium"
          onClick={() => {
            handleSlide("left");
          }}
        >
          <MdKeyboardArrowLeft />
        </span>
      )}

      <div
        className="w-full overflow-x-auto flex items-center gap-5 h-full scroll-smooth"
        ref={sliderRef}
      >
        {dataToMap?.map((e) => {
          return e;
        })}
      </div>

      {showSlider?.right && (
        <span
          className="absolute right-2 bg-white rounded-full p-2 text-grey-text text-xl hover:shadow-lg cursor-pointer font-medium"
          onClick={() => {
            handleSlide("right");
          }}
        >
          <MdKeyboardArrowRight />
        </span>
      )}
    </div>
  );
};

export default Slider;
