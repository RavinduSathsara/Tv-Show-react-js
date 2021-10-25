import React, { useState } from "react";
import Episodes from "./Screens/Episodes";
import Cast from "./Screens/Cast";
import TvNavBar from "./Screens/TvNavBar";
import Quotes from "./Screens/Quotes";

const TvShows = () => {
  const [tvshow, setTvshow] = useState(1);
  function changebody() {
    setTvshow(2);
  }
  function gotoHome() {
    setTvshow(1);
  }
  function quotesShow() {
    setTvshow(3);
  }
  return (
    <div>
      <TvNavBar
        action={changebody}
        gotoHome={gotoHome}
        quotesShow={quotesShow}
      />
      {tvshow === 1 ? <Cast /> : tvshow === 2 ? <Episodes /> : <Quotes />}
    </div>
  );
};

export default TvShows;
