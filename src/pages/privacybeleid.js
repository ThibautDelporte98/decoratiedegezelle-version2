import React from "react";
import Nav from "../components/nav/nav.js";
import Footer from "../components/footer/Footer.js";
import Header from "../components/page-title/header.js";
import Policy from "../components/Voorwaarden/policy.js";

function PolicyPage() {
  return (
    <div>
      <Nav />
      <Header
        height={30}
        heightState={true}
        title="Privacy beleid"
        text="22/10/2023"
      />
      <Policy />
      <Footer />
    </div>
  );
}

export default PolicyPage;
