import React from "react";
import About from "../../blocks/about/about";
import AdvantageList from "../../blocks/advantage-list/advantage-list";

function MainPage({advantages}) {
  return (
    <>
      <About />
      <AdvantageList advantages={advantages}/>
    </>
  );
}

export default MainPage;
