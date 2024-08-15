import React, { Fragment } from "react";

import Scrollbar from "../../components/scrollbar/scrollbar";

import StorySection from "../../components/StorySection";

const StoryPage1 = () => {
  return (
    <div id="info">
      <Fragment>
        <StorySection />
        <Scrollbar />
      </Fragment>
    </div>
  );
};

export default StoryPage1;
