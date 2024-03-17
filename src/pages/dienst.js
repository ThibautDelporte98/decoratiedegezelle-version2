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
// import Data from "../components/services/data/overview.js"
import image from "../images/carouselImages/home/A1.webp";

function Service() {
  const { url } = useParams();

  // Find the corresponding service based on the ID
  const service = DataDienst.find((item) => item.url === url);

  return (
    <div>
      <Nav />
      <Header
        title={service.title}
        text={service.IntroTxt}
        image={service.image}
        showImage={true}
        showGoBack={true}
      />
      <WayOfWork items={steps} />
      <ServiceSubject items={DataDienst} />
      <Cta />
      <Footer />
    </div>
  );
}

export default Service;
