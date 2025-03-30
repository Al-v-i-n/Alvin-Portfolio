"use client";

import { useSwiper } from "swiper/react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

const WorkSliderBtns = ({ 
  containerStyles = "", 
  btnStyles = "", 
  iconStyles = "" 
}) => {
  const swiper = useSwiper();
  
  return (
    <div className={`${containerStyles}`}>
      <button 
        onClick={() => swiper.slidePrev()} 
        className={`${btnStyles}`}
        aria-label="Previous slide"
      >
        <PiCaretLeftBold className={`${iconStyles}`} />
      </button>
      <button 
        onClick={() => swiper.slideNext()} 
        className={`${btnStyles}`}
        aria-label="Next slide"
      >
        <PiCaretRightBold className={`${iconStyles}`} />
      </button>
    </div>
  );
};

export default WorkSliderBtns;