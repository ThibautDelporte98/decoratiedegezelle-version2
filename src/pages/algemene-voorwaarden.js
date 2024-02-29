import React from "react";
import { useParams } from "react-router-dom";
import Nav from "../components/nav/nav.js";
import Footer from "../components/footer/Footer.js";
import Conditions from "../components/Voorwaarden/conditions.js";
import Breadcrumb from "../components/breadcrumb/breadcrumb.js";
import Header from "../components/page-title/header.js";

function ConditionsPage() {
  return (
    <div>
      <Nav />
      <Header
        height={30}
        heightState={true}
        title="Algemene Voorwaarden"
        text="22/10/2023"
      />
      <Conditions />
      <Footer />
    </div>
  );
}

export default ConditionsPage;
