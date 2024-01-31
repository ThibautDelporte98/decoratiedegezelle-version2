import React from "react";
import Nav from "../components/nav/nav.js";
import Footer from "../components/footer/Footer.js";
import Overview from "../components/references/oveview.js";
import Data from "../components/references/data/Data.js";


function References() {

  return (
    <div>
      <Nav />
      <Overview items={Data}/>
      <Footer />
    </div>
  );
}

export default References;
