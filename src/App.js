import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import "./App.css";
import Nav from "./components/nav/nav.js";
import HeaderLarge from "./components/page-title/header-large";
import About from "./components/home/about";
import Values from "./components/home/values";
import ServiceOverview from "./components/home/services-overview";
import References from "./components/home/references";
import DataValues from "./components/home/data/values";
import DataProjects from "./components/services/data/overview";
import DataRefs from "./components/references/data/Data";
import Footer from "./components/footer/Footer";
import Cta from "./components/call-to-actions/cta";

function App() {
  const keywords = [
    "schilder en decoratiewerk",
    "schilder",
    "binnen- en buitenschilderwerk",
    "professionele schilders",
    "schilder offerte",
    "decoratieve technieken",
    "interieur schilderen",
    "exterieur schilderen",
    "schilderbedrijf",
    "verf",
    "schilderwerk"
  ];
  
  const websiteSchema = {
    "@context": "http://schema.org",
    "@type": "WebSite",
    name: "Decoratie Degezelle",
    description: "Uw partner voor hoogwaardige decoratieve schildersdiensten",
    url: "https://decoratiedegezelle.be/",
    sameAs: [
      "https://www.facebook.com/people/Decoratie-Degezelle/100090360757782/",
      "https://www.instagram.com/decoratie_degezelle/"
    ],
    about: {
      "@type": "Organization",
      name: "Decoratie Degezelle",
      description:
        "Uw betrouwbare partner voor decoratieve schildersdiensten met passie voor vakmanschap en creativiteit.",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Kouterstraat 42",
        addressLocality: "Harelbeke",
        postalCode: "8530",
        addressCountry: "BE"
      },
      email: "info@decoratiedegezelle.be",
      telephone: "+32 478 366 070",
      sameAs: [
        "https://www.facebook.com/people/Decoratie-Degezelle/100090360757782/",
        "https://www.instagram.com/decoratie_degezelle/"
      ]
    },
    brand: {
      "@type": "Brand",
      name: "Decoratie Degezelle",
      description:
        "Uw partner voor hoogwaardige decoratieve schildersdiensten met passie voor vakmanschap en creativiteit.",
      logo: "https://decoratiedegezelle.be/Thumbnail.webp"
    },
    slogan: "Verf je wereld binnen en buiten!",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://decoratiedegezelle.be/?search_term_string={search_term_string}",
        inLanguage: "nl-BE",
        actionPlatform: [
          "http://schema.org/DesktopWebPlatform",
          "http://schema.org/IOSPlatform",
          "http://schema.org/AndroidPlatform"
        ]
      },
      "query-input": "required name=search_term_string"
    },
    kernwaarden: [
      {
        "@type": "PropertyValue",
        name: "Kwaliteit",
        value: "Hoogwaardige kwaliteit staat bij ons voorop."
      },
      {
        "@type": "PropertyValue",
        name: "Service",
        value: "Wij bieden uitmuntende service aan onze klanten."
      },
      {
        "@type": "PropertyValue",
        name: "Vertrouwen",
        value: "Vertrouwen is de basis van onze relaties met klanten."
      },
      {
        "@type": "PropertyValue",
        name: "Klantgericht",
        value:
          "Onze dienstverlening is volledig gericht op de behoeften van onze klanten."
      },
      {
        "@type": "PropertyValue",
        name: "Flexibel",
        value:
          "Wij passen ons aan en zijn flexibel om aan de wensen van onze klanten te voldoen."
      }
    ]
  };
  
  const breadcrumbListSchema = {
    "@context": "http://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        item: {
          "@id": "https://decoratiedegezelle.be/",
          name: "Home"
        }
      },
      {
        "@type": "ListItem",
        position: 2,
        item: {
          "@id": "https://decoratiedegezelle.be/diensten",
          name: "Diensten"
        }
      },
      {
        "@type": "ListItem",
        position: 3,
        item: {
          "@id": "https://decoratiedegezelle.be/realisaties",
          name: "Referenties"
        }
      },
      {
        "@type": "ListItem",
        position: 4,
        item: {
          "@id": "https://decoratiedegezelle.be/overons",
          name: "Over ons"
        }
      },
      {
        "@type": "ListItem",
        position: 5,
        item: {
          "@id": "https://decoratiedegezelle.be/contact",
          name: "Offerte aanvragen"
        }
      }
    ]
  };

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>
            Schilder in jouw regio! | Decoratie Degezelle 
          </title>
          <meta
            name="description"
            content="Ontdek een uitgebreid overzicht van onze diensten en bekijk onze recente projecten."
          />
          <meta name="keywords" content={keywords} />
          <meta name="author" content="Alexandro Degezelle" />
          <meta
            property="og:title"
            content="Decoratie Degezelle | Harelbeke | Facebook"
          />
          <meta
            property="og:description"
            content="Bij Decoratie Degezelle streven we naar perfectie in alles wat we doen. Als een gespecialiseerd bedrijf in decoratietechnieken hebben we ons volledig toegewijd om uw ruimtes te transformeren en een stijlvolle sfeer te creëren die uw persoonlijkheid weerspiegelt. Ons team van ervaren vakmensen gelooft in de kracht van samenwerken. We luisteren aandachtig naar uw wensen en ideeën en werken nauw met u samen om uw visie tot leven te brengen."
          />
          <meta
            property="og:image"
            content="https://www.facebook.com/photo/?fbid=105027762519249&set=a.103201362701889"
          />
          <meta
            property="og:url"
            content="https://www.facebook.com/people/Decoratie-Degezelle/100090360757782/"
          />
          <link rel="canonical" href="https://decoratiedegezelle.be/" />
          <script type="application/ld+json">
            {JSON.stringify(breadcrumbListSchema)}
          </script>
          <script type="application/ld+json">
            {JSON.stringify(websiteSchema)}
          </script>
        </Helmet>
        <Nav />
        <HeaderLarge
          title="schilder & decoratiewerken"
          subtitle="Verf je wereld binnen & buiten!"
          text="Stap binnen en ervaar de kunst van schilderen bij Decoratie Degezelle. Wij transformeren niet alleen muren, maar creëren een levendige sfeer die jouw stijl weerspiegelt. Ontdek onze expertise, laat je inspireren en geef kleur aan jouw wereld."
          color="transparent"
          showCarousel={true}
        />
        <About />
        <ServiceOverview items={DataProjects} />
        <Values items={DataValues} />
        <References items={DataRefs} />
        <Cta />
        <Footer />
      </HelmetProvider>
    </>
  );
}

export default App;
