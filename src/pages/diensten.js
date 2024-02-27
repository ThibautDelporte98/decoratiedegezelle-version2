import React from "react";
import Nav from "../components/nav/nav.js";
import Footer from "../components/footer/Footer.js";
import Overview from "../components/services/overview.js";
import Data from "../components/services/data/overview.js";
import Cta from "../components/call-to-actions/cta.js";
import Header from "../components/page-title/header.js";
// import CookieBanner from "../components/cookies/cookie.js";

function Services() {
  return (
    <div>
      <Nav />
      <Header
        height={40}
        heightState={true}
        title="Ons aanbod"
        text="              
              Met een ongeëvenaarde mix van creativiteit en vakmanschap
              transformeren onze diensten uw woning tot een meesterwerk van
              verfijnde schoonheid, stimuleren ze persoonlijke groei en
              verrijken ze jouw leven. Ervaar de kracht van maatwerk speciaal
              ontworpen om aan jouw behoeften te voldoen."
      />
      <Overview items={Data} />
      <Cta />
      {/* <CookieBanner /> */}
      <Footer />
    </div>
  );
}

export default Services;
