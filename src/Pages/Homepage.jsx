import React from "react";
import HomeCarousel from "../customer/Components/Carousel/HomeCarousel";
import HomeProductSection from "../customer/Components/Home/HomeProductSection";
import { sareePage1 } from "../Data/Saree/page1";
import { dressPage1 } from "../Data/dress/page1";
import { gounsPage1 } from "../Data/Gouns/gouns";
import { kurtaPage1 } from "../Data/Kurta/kurta";
import { mensShoesPage1 } from "../Data/shoes";
import { mens_kurta } from "../Data/Men/men_kurta";
import { lengha_page1 } from "../Data/Women/LenghaCholi";
import SalesSection from './SalesSection';
import WhyChooseUs from "./whyChooseUs";
import CustomerTestimonials from "./Testimonials";

const Homepage = () => {

  return (
    <div className="">
      <HomeCarousel/>

      <div className="space-y-10 py-20">
        <HomeProductSection data={mens_kurta} section={"Men's Kurta"} />
        <HomeProductSection data={mensShoesPage1} section={"Men's Shoes"} />
        <SalesSection/>
        <HomeProductSection data={lengha_page1} section={"Lengha Choli"} />
        <HomeProductSection data={sareePage1} section={"Saree"} />
        <WhyChooseUs/>
        <HomeProductSection data={dressPage1} section={"Dress"} />
        <HomeProductSection data={gounsPage1} section={"Women's Gouns"} />
        <CustomerTestimonials/>
        <HomeProductSection data={kurtaPage1} section={"Women's Kurtas"} />
        {/* <HomeProductSection data={mensPantsPage1} section={"Men's Pants"} /> */}
      </div>

      
    </div>
  );
};

export default Homepage;
