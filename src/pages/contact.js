import React from "react";
import Nav from "../components/nav/nav.js";
import Header from "../components/page-title/header.js";
import Footer from "../components/footer/Footer.js";
import ContactElements from "../components/contact/contact.js";
import image from "../images/contact/contact.webp";


function Contact() {

  return (
    <div>
      <Nav />
      {/* <CookieBanner /> */}
      <Header
        title="Vrijblijvend contact"
        text="Aarzel niet om contact met ons op te nemen bij vragen of nood aan advies!"
        image={image}
        showImage={true}
      />
      <ContactElements  />
      <Footer />
    </div>
  );
}

export default Contact;
