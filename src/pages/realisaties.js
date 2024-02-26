import React from "react";
import Nav from "../components/nav/nav.js";
import Footer from "../components/footer/Footer.js";
import Overview from "../components/references/oveview.js";
import Header from "../components/page-title/header.js";
import Data from "../components/references/data/Data.js";


function References() {

  return (
    <div>
      <Nav />
      <Header
        height={40}
        heightState={true}
        title="Projecten"
        text="Neem een moment om de realisaties te verkennen en ontdek waarom samenwerken met Decoratie Degezelle een positieve impact heeft. Neem een kijkje en ontdek hoe wij waarde toevoegen aan elke samenwerking."
      />
      <Overview items={Data}/>
      <Footer />
    </div>
  );
}

export default References;
