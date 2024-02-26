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
        showGoBack={true}
      />
      <Text
        text={
          "Na overleg is besloten om de woonkamer van de woning in Wevelgem een nieuw leven in te blazen. In deze realisatie nemen we je mee door het proces en laten we zien hoe de woonkamer een transformatie heeft ondergaan."
        }
      />
      <CustomerPreferences  items={Data} />
      <CustomerReview items={Data} />
      <Text
        text={
          "Beweeg de slider van links naar rechts om getuige te zijn van de opmerkelijke verandering. Deze afbeeldingen onthullen twee gezichten van elke plek, moment, of item - de 'voor' en 'na'. Een visuele reis in één frame. Benieuwd naar de transformatie? Neem de controle, klik op de pijltjes en ervaar de kracht van verandering."
        }
        layout="start"
        colorText="black"
        bgColor="white"
      />
      <Slider items={Data}/>
      <Footer />
    </div>
  );
}

export default References;
