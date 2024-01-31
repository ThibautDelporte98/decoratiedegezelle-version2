import React from "react";
import { useParams } from "react-router-dom";
import Nav from "../components/nav/nav.js";
import Footer from "../components/footer/Footer.js";
import Cta from "../components/call-to-actions/cta.js";
import Header from "../components/page-title/header.js";
import DataDienst from "../components/services/data/overview.js";
import WayOfWork from "../components/services/overview-detail-steps.js";
import steps from "../components/services/data/wayofwork.js";
import ServiceSubject from "../components/services/overview-detail-subjects.js";
import Data from "../components/services/data/overview.js"
import image from "../images/carouselImages/home/A1.webp"



function Service() {
  const { id } = useParams();

  // Find the corresponding service based on the ID
  const service = DataDienst.find((item) => item.id === parseInt(id));
  return (
    <div>
      <Nav />
      {}
      <Header
        title={service.title}
        text="Wilt u graag uw huis opnieuw inrichten? Dan kunt u bij ons terecht voor zowel binnen- als buitenschilderwerken.Onze klassieke schilderwerken beslaan een breed gamma aan mogelijkheden. U kunt daarbij denken aan het schilderen van uw trap, plafonds, deuren, muren enz. Wij lichten graag alle mogelijkheden voor u toe zodat u op die manier de juiste keuze kunt maken."
        image={image}
        showImage={true}
      />
      <WayOfWork items={steps}/>
      <ServiceSubject items={Data}/>
      <Cta />
      <Footer />
    </div>
  );
}

export default Service;
