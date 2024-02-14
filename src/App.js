import React from "react";
import "./App.css";
import Nav from "./components/nav/nav.js";
import HeaderLarge from "./components/page-title/header-large";
import About from "./components/home/about";
import Values from "./components/home/values";
import ServiceOverview from "./components/home/services-overview";
import References from "./components/home/references";
import DataValues from "./components/home/data/values";
import DataProjects from "./components/services/data/overview";
import DataRefs from "./components/references/data/Data";
import Footer from "./components/footer/Footer";
import Cta from "./components/call-to-actions/cta";
import CookieAcceptance from "./components/cookies/cookie";


function App() {

  

  return (
    <>
      <CookieAcceptance />
      <Nav />
      <HeaderLarge
        title="schilder & decoratiewerken"
        subtitle="Verf je wereld binnen & buiten!"
        text="Stap binnen en ervaar de kunst van schilderen bij Decoratie Degezelle. Wij transformeren niet alleen muren, maar creëren een levendige sfeer die jouw stijl weerspiegelt. Ontdek onze expertise, laat je inspireren en geef kleur aan jouw wereld."
        color="transparent"
        showCarousel={true}
      />
      <About />
      <Values items={DataValues} />
      <ServiceOverview items={DataProjects} />
      <References items={DataRefs} />
      <Cta />
      <Footer />
    </>
  );
}

export default App;
