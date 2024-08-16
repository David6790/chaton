import React, { Fragment } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Hero2 from "../../components/hero2/hero2";
import CoupleSection2 from "../../components/CoupleSection2/CoupleSection2";
import StorySection2 from "../../components/StorySection2/StorySection2";

import RsvpSection from "../../components/RsvpSection/RsvpSection";

import Footer from "../../components/footer/Footer";
import Scrollbar from "../../components/scrollbar/scrollbar";
import StoryPage1 from "../StoryPage2/StoryPage2";
import BrideGroomsPage from "../BrideGroomsPage/BrideGroomsPage";

const HomePage = () => {
  return (
    <Fragment>
      <Navbar />
      <Hero2 />
      <CoupleSection2 />
      <StorySection2 />
      <RsvpSection />
      <StoryPage1 />
      <BrideGroomsPage />
      <Footer />
      <Scrollbar />
    </Fragment>
  );
};

export default HomePage;
