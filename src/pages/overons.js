import React from "react";
import Nav from "../components/nav/nav.js";
import Footer from "../components/footer/Footer.js";
import Caption from "../components/about/caption.js";
import Caption2 from "../components/about/caption.js";
import Caption3 from "../components/about/caption.js";
import Header from "../components/page-title/header.js";
import HeaderLarge from "../components/page-title/header-large.js";
import Announcement from "../components/about/announcement.js";
import image from "../images/about/about-us.webp";
import AboutSubject from "../components/about/about-subjects.js";
import trust from "../images/about/trust.webp";
import experience from "../images/about/experience.webp";
import Text from "../components/references/text.js";
import Image from "../components/about/image.js";
import Owner from "../components/about/owner.js";
import Cta from "../components/call-to-actions/cta.js";

function About() {
  return (
    <div>
      <Nav />
      <Header
        title="Ons profiel"
        text={[
          "Bij Decoratie Degezelle hebben we een rijke geschiedenis van het succesvol voltooien van diverse schilderprojecten, variërend van particuliere woningen tot commerciële ruimtes. ",
          "Ons getalenteerde team van schilders heeft uitgebreide ervaring in het aanbrengen van hoogwaardige verf en decoratieve afwerkingen, waardoor we de visie van onze klanten tot leven kunnen brengen."
        ]}        
        image={image}
        showImage={true}
        showGoBack={false}
      />
      <Announcement
        layout="start"
        title="Up to date met de laatste nieuwe trends!"
      />
      <Text
        text={
          "Voortdurende educatie en training vormen de ruggengraat van onze toewijding aan uitmuntendheid in de schildersindustrie. Het is cruciaal om voortdurend op de hoogte te blijven van de meest recente technieken en trends die onze branche vormgeven. Bij ons staat het team niet stil; integendeel, we doen er alles aan om continu bij te leren en voorop te blijven lopen in de dynamische wereld van de schilderkunst."
        }
        layout="start"
      />
      <AboutSubject 
          title="Vertrouwen & Flexibiliteit"
          text="Bij ons staat de combinatie van vertrouwen en flexibiliteit centraal. Wij begrijpen dat elke klant unieke behoeften heeft en geen twee projecten hetzelfde zijn. Onze toewijding gaat verder dan alleen schilderen; wij streven ernaar maatwerkoplossingen te bieden die perfect aansluiten bij jouw specifieke wensen en eisen."
          image={trust}
      />
      <Announcement layout="end" title="Kwaliteit is bij ons prioriteit!" />
      <Text
        text={
          "Of het nu gaat om het voorbereiden van oppervlakken met zorgvuldige aandacht voor detail, het zorgvuldig selecteren van hoogwaardige verven die niet alleen visueel aantrekkelijk zijn maar ook duurzaamheid garanderen, of het toepassen van geavanceerde schildertechnieken met ongeëvenaarde precisie - wij gaan verder dan alleen esthetische indrukken. Ons streven is om schilderwerk te leveren dat niet alleen een visueel meesterwerk is, maar ook langdurige schoonheid biedt die bestand is tegen de tand des tijds."
        }
        layout="end"
      />
      <AboutSubject 
          title="Ervaring die spreekt"
          text="Met jaren ervaring in de branche hebben we een schat aan kennis opgebouwd die we graag inzetten om uw visie werkelijkheid te maken. Of het nu gaat om interieur- of exterieurschilderwerk, renovaties of kleuradvies, we hebben de ervaring die spreekt voor zich."
          image={experience}
      />      {/* <Owner /> */}
      <Cta />
      <Footer />
    </div>
  );
}

export default About;
