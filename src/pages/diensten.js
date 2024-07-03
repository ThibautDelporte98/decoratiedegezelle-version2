import React from "react";
import Nav from "../components/nav/nav.js";
import Footer from "../components/footer/Footer.js";
import Overview from "../components/services/overview.js";
import Data from "../components/services/data/overview.js";
import Cta from "../components/call-to-actions/cta.js";
import Header from "../components/page-title/header.js";

function Services() {
  return (
    <div>
      <Nav />
      {/* <CookieBanner /> */}
      <Header
        height={40}
        heightState={true}
        title="Ons aanbod"
        text="              
              Met een ongeëvenaarde mix van creativiteit en ervaring
              transformeren onze diensten uw woning tot een meesterwerk van
              verfijnde schoonheid."
      />
      <Overview items={Data} />
      <Cta />
      <Footer />
    </div>
  );
}

export default Services;
