import AliceCarousel from "react-alice-carousel";
import HomeProductCard from "./HomeProductCard";
import { Button } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useState } from "react";

const HomeProductSection = ({ section, data }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const slidePrev = () => setActiveIndex(activeIndex - 1);
  const slideNext = () => setActiveIndex(activeIndex + 1);
  const syncActiveIndex = ({ item }) => setActiveIndex(item);

  const responsive = {
    0:{
      items: 1,
      itemsFit: "contain"
    },
    436:{
      items: 1.5,
      itemsFit: "contain"
    },
    568: {
      items: 2,
      itemsFit: "contain",
    },
    700: {
      items: 2.5,
      itemsFit: "contain",
    },
    850: {
      items: 3,
      itemsFit: "contain",
    },
    1028: {
      items: 3.5,
      itemsFit: "contain",
    },
    1090: {
      items: 4,
      itemsFit: "contain",
    },
    1320: {
      items: 4.5,
      itemsFit: "contain",
    },
    1420: {
      items: 5,
      itemsFit: "contain",
    },
    1560: {
      items: 5.5,
      itemsFit: "contain",
    },
    1700: {
      items: 6,
      itemsFit: "contain",
    },
    1850: {
      items: 6.5,
      itemsFit: "contain",
    },
    2015: {
      items: 7,
      itemsFit: "contain",
    },
  };

  const items = data?.slice(0, 20).map((item) => (
    <div className="">
     
      <HomeProductCard product={item}/>
    </div>
  ));

  // const slideInFromRight = (t) => {
  //   return `translateX(${100 - t * 100}%)`;
  // };

  return (
    <div className="relative px-4 sm:px-6 lg:px-8 ">
      <h2 className="text-2xl font-extrabold text-gray-900 py-5">{section}</h2>
      <div className="relative border px-5 h-auto">
        <AliceCarousel
          disableButtonsControls
          disableDotsControls
          mouseTracking
          items={items}
          activeIndex={activeIndex}
          responsive={responsive}
          onSlideChanged={syncActiveIndex}
          animationType="fadeout"
          animationDuration={2000}
        />
        {activeIndex !== items.length - 5 && (
          <Button
            onClick={slideNext}
            variant="contained"
            className="z-40 bg-[]"
            sx={{
              position: "absolute",
              top: "8rem",
              right: "0rem",
              transform: "translateX(50%) rotate(90deg)",
            }}
            color="white"
            aria-label="next"
          >
            <ArrowForwardIosIcon
              className=""
              sx={{ transform: "rotate(-90deg)" }}
            />
          </Button>
        )}

        {activeIndex !== 0 && (
          <Button
            onClick={slidePrev}
            variant="contained"
            className="z-40 bg-[]"
            color="white"
            sx={{
              position: "absolute",
              top: "8rem",
              left: "0rem",
              transform: "translateX(-50%)  rotate(90deg)",
            }}
            aria-label="next"
          >
            <ArrowForwardIosIcon
              className=""
              sx={{ transform: " rotate(90deg)" }}
            />
          </Button>
        )}
      </div>
    </div>
  );
};

export default HomeProductSection;
