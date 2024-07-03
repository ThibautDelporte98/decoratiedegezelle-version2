import React from "react";
import Form from "./form";
import Social from "./social";
import ContactInfo from "./contact-info";
import Hours from "./hours";
import "../../scss/contact/contact.scss";
import dataWithLinks from "./data/contact-info";
import data from "./data/social";

const ContactElements = () => {

  return (
    <div className="Contact">
      <div className="container">
        <div className="contact">
          <div className="row">
            <Form />
            <div className="col-12 col-lg-4">
              <div className="contact-details">
                <ContactInfo items={dataWithLinks}/>
                <Social items={data} />
                <Hours />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactElements;
