import React from "react";
import Nav from "../components/nav/nav.js";
import Header from "../components/page-title/header.js";
import Footer from "../components/footer/Footer.js";
import ContactElements from "../components/contact/contact.js";
import dataWithLinks from "../components/contact/data/social.js";
import image from "../images/carouselImages/home/A1.webp"

function Contact() {

  return (
    <div>
      <Nav />
      <Header
        title="Contact"
        text="Aarzel niet om contact met ons op te nemen bij vragen of nood aan advies!"
        image={image}
        showImage={false}
      />
      <ContactElements  />
      <Footer />
    </div>
  );
}

export default Contact;
