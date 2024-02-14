import React from "react";
import { useParams } from "react-router-dom";
import Nav from "../components/nav/nav.js";
import Header from "../components/page-title/header.js";
import Footer from "../components/footer/Footer.js";
import Text from "../components/references/text.js";
import Data from "../components/references/data/Data.js";
import CustomerPreferences from "../components/references/customer-preferences.js";
import CustomerReview from "../components/references/customer-review.js";
import Slider from "../components/references/realisation-images.js";

function References() {
  const { url } = useParams();

  // Find the corresponding service based on the ID
  const realisation = Data.find((item) => item.url === url);

  const title = `${realisation.subject} | ${realisation.city}`;

  return (
    <div>
      <Nav />
      <Header
        title={title}
        image={realisation.image}
        showImage={true}
      />
      <Text
        text={
          "Na overleg met [persoon] is besloten om de entree van de woning in Komen-Waasten een verfrissende make-over te geven. In deze realisatie/storie nemen we je mee door het proces en laten we zien hoe de nieuwe voordeur een stijlvolle transformatie heeft ondergaan."
        }
      />
      <CustomerPreferences  items={Data} />
      <CustomerReview items={Data} />
      <Text
        text={
          "Na overleg met [persoon] is besloten om de entree van de woning in Komen-Waasten een verfrissende make-over te geven. In deze realisatie/storie nemen we je mee door het proces en laten we zien hoe de nieuwe voordeur een stijlvolle transformatie heeft ondergaan."
        }
      />
      <Slider items={Data}/>
      <Footer />
    </div>
  );
}

export default References;
