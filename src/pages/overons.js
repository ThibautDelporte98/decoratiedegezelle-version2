import React from "react";
import Nav from "../components/nav/nav.js";
import Footer from "../components/footer/Footer.js";
import Caption from "../components/about/caption.js";
import Caption2 from "../components/about/caption.js";
import Caption3 from "../components/about/caption.js";
import HeaderLarge from "../components/page-title/header-large.js";
import image from "../images/carouselImages/home/A1.webp";
import Image from "../components/about/image.js";
import Owner from "../components/about/owner.js";
import Cta from "../components/call-to-actions/cta.js";
import iconThrust from "../images/backgrounds/about/flex&thrust.png";
import iconBrush from "../images/backgrounds/about/brush.png";
import iconBook from "../images/backgrounds/about/book.png";
import iconQuality from "../images/backgrounds/about/diamond.png";

function About() {
  return (
    <div>
      <Nav />

      <HeaderLarge
        color="black"
        title="Professioneel profiel"
        subtitle="experience & certification"
        text="Bij Decoratie Degezelle hebben we een rijke geschiedenis van het succesvol voltooien van diverse schilderprojecten, variërend van particuliere woningen tot commerciële ruimtes. Ons getalenteerde team van schilders heeft uitgebreide ervaring in het aanbrengen van hoogwaardige verf en decoratieve afwerkingen, waardoor we de visie van onze klanten tot leven kunnen brengen."
        showCarousel={false}

      />

      <Image
        position="display-flex-start"
        title="Thurst & flexibility"
        image={image}
        paddingTop="0"
        paddingRight="0"
        paddingBottom="0"
        paddingLeft="10"
        borderPosition="stroke-left"
      />
      <Caption
        text="              
              Als betrouwbaar en flexibel schilderbedrijf begrijpen we dat elke
              klant unieke behoeften heeft. Daarom bieden we maatwerkoplossingen
              die voldoen aan jouw specifieke wensen en eisen."
        layout={"center"}
        image={iconThrust}
      />
      <Image
        position="display-flex-end"
        title="experience"
        image={image}
        paddingTop="0"
        paddingRight="10"
        paddingBottom="0"
        paddingLeft="0"
        borderPosition="stroke-right"
      />
      <Caption2
        text="Ervaring die spreekt! Deze uitgebreide ervaring stelt ons in staat om niet alleen aan de verwachtingen van onze klanten te voldoen, maar deze te overtreffen. "
        layout={"center"}
        image={iconBrush}
      />
      <Image
        position="display-flex-start"
        title="Education"
        image={image}
        paddingTop="0"
        paddingRight="0"
        paddingBottom="0"
        paddingLeft="10"
        borderPosition="stroke-left"
      />

      <Caption3
        text="Voortdurende educatie en training zijn essentieel om op de hoogte te blijven van de nieuwste technieken en trends in de schildersindustrie, en ons team doet er alles aan om bij te blijven.

"
        layout={"center"}
        image={iconBook}
      />
      <Image
        position="display-flex-end"
        title="Quality"
        image={image}
        paddingTop="0"
        paddingRight="10"
        paddingBottom="0"
        paddingLeft="0"
        borderPosition="stroke-right"
      />

      <Caption3
        text=" Of het nu gaat om het voorbereiden van oppervlakken, het kiezen van hoogwaardige verven of het toepassen van technieken met precisie, wij zetten ons in voor het leveren van schilderwerk dat niet alleen esthetisch indrukwekkend is, maar ook langdurige schoonheid biedt.

"
        layout={"center"}
        image={iconQuality}
      />
      <Owner />
      <Cta />
      <Footer />
    </div>
  );
}

export default About;
