import React, { useRef } from "react";
import HomeProductCard from "./HomeProductCard";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

const HomeProductSection = ({ section, data }) => {
  const scrollRef = useRef();

  const scrollLeft = () => {
    scrollRef.current.scrollBy({
      left: -300,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({
      left: 300,
      behavior: "smooth",
    });
  };

  return (
    <section className="w-full px-6 py-12 bg-gradient-to-b from-white to-gray-50">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-extrabold text-gray-800">{section}</h2>
        <div className="flex gap-2">
          <button
            onClick={scrollLeft}
            className="p-3 bg-white shadow-lg border rounded-full hover:scale-110 transition"
          >
            <ArrowBackIosNewIcon fontSize="small" />
          </button>
          <button
            onClick={scrollRight}
            className="p-3 bg-white shadow-lg border rounded-full hover:scale-110 transition"
          >
            <ArrowForwardIosIcon fontSize="small" />
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scroll-smooth px-1 py-2"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {data?.slice(0, 15).map((product, index) => (
          <div
            key={index}
            className="shrink-0"
            style={{ scrollSnapAlign: "start" }}
          >
            <HomeProductCard product={product} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeProductSection;
