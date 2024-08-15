import React, { Fragment } from "react";
import PageTitle from "../../components/pagetitle/PageTitle";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/footer/Footer";
import Scrollbar from "../../components/scrollbar/scrollbar";
import PartnerSection from "../../components/PartnerSection";
import BrideGrooms from "../../components/BrideGrooms";

const BrideGroomsPage = () => {
  return (
    <div id="temoin">
      <Fragment>
        <BrideGrooms brClass={"pt-120"} />
      </Fragment>
    </div>
  );
};

export default BrideGroomsPage;
