import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import Button from "../buttons/button";
import "../../scss/cookies/cookies.scss";

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [loadGA, setLoadGA] = useState(false);
  const [isCookieOpen, setIsCookieOpen] = useState(false);
  const [isHidden, setIsHidden] = useState("auto");
  const [zIndex, setZIndex] = useState(0);
  
  const initialTextVisibility = {
    waarom: false,
    hoe: false,
    beheer: false,
    instemming: false,
  };

  const [textVisibility, setTextVisibility] = useState(initialTextVisibility);
  // Functie om de overflow-stijl en z-index in te stellen
  const setStyles = () => {
    console.log('isCookieOpen:', isCookieOpen);
    console.log('isHidden:', isHidden);
    console.log('zIndex:', zIndex);
    setIsHidden(document.body.style.overflow = isCookieOpen ? "hidden" : "auto");
    setZIndex(isCookieOpen ? 1000 : 0);
  };
  
  useEffect(() => {
    setStyles();
  }, [isCookieOpen]);
  
  useEffect(() => {
    const cookiesAccepted = Cookies.get("cookiesAccepted");
    setShowBanner(!cookiesAccepted);
    setLoadGA(!!cookiesAccepted);
    setIsCookieOpen(!cookiesAccepted);
    setStyles(!cookiesAccepted); // Call setStyles immediately after initializing state
  
    if (cookiesAccepted === "false") {
      // If cookies are declined, apply the styles immediately
      setIsHidden("hidden");
      setZIndex(0);
    }
  }, []);
  

  const acceptCookies = () => {
    Cookies.set("cookiesAccepted", "true", { expires: 365 });
    setShowBanner(false);
    setLoadGA(true);
    setIsCookieOpen(false);
    setStyles(0); // Roep de overflow-stijl en z-index aan na het bijwerken van isCookieOpen

    if (window.gtag) {
      window.gtag("config", "G-67XPL606H8");
    }
  };

  const declineCookies = () => {
    Cookies.set("cookiesAccepted", "false", { expires: 3 });
    setShowBanner(false);
    setLoadGA(false);
    setIsCookieOpen(false);
    setStyles(0); // Roep de overflow-stijl en z-index aan na het bijwerken van isCookieOpen
  };

  // Dropdown

  const toggleTextVisibility = (title) => {
    setTextVisibility((prevVisibility) => ({
      ...prevVisibility,
      [title]: !prevVisibility[title],
    }));
  };

  return (
    <div className="cookies" style={{ zIndex }}>
      <div className="container">
        {showBanner && (
          <div className="display-flex-center" >
            <div className="cookies-info" >
              <div className="cookies-items">
                <div className="cookies-item" onClick={() => toggleTextVisibility("waarom")}>
                  <div className="cookies-title">
                    <span className="cookies-title-icon">{textVisibility["waarom"] ? "-" : "+"}</span>
                    <h2>Waarom verzamelen wij uw gegevens?</h2>
                  </div>
                  <p
                    style={{
                      display: textVisibility["waarom"] ? "block" : "none",
                    }}
                  >
                    Beste bezoeker, Wij maken gebruik van cookies, waaronder die
                    Google Analytics, om uw browse-ervaring op onze website te
                    verbeteren. De verzamelde gegevens helpen ons beter inzicht
                    te krijgen in hoe u onze site ervaart, welke pagina's het
                    meest worden bezocht en hoe we uw interactie met onze inhoud
                    kunnen optimaliseren.
                  </p>
                </div>
                <div className="cookies-item" onClick={() => toggleTextVisibility("hoe")}>
                  <div className="cookies-title">
                    <span className="cookies-title-icon">{textVisibility["hoe"] ? "-" : "+"}</span>
                    <h2> Hoe gebruiken we de verzamelde gegevens?</h2>
                  </div>
                  <p
                    style={{
                      display: textVisibility["hoe"] ? "block" : "none",
                    }}
                  >
                    De informatie die we via cookies verzamelen, is volledig
                    anoniem en wordt alleen gebruikt voor statistische
                    doeleinden. Door deze gegevens te analyseren, kunnen we
                    trends identificeren, de prestaties van onze website
                    evalueren en onze dienstverlening aanpassen om aan uw
                    verwachtingen te voldoen.
                  </p>
                </div>
                <div className="cookies-item" onClick={() => toggleTextVisibility("beheer")}>
                  <div className="cookies-title">
                    <span className="cookies-title-icon">{textVisibility["beheer"] ? "-" : "+"}</span>
                    <h2>Beheer van cookies</h2>
                  </div>
                  <p
                    style={{
                      display: textVisibility["beheer"] ? "block" : "none",
                    }}
                  >
                    U heeft te allen tijde de mogelijkheid om het gebruik van
                    cookies te beheren via uw browserinstellingen. Houd er
                    echter rekening mee dat het uitschakelen van cookies
                    bepaalde functies en services op onze website kan
                    beïnvloeden.
                  </p>
                </div>
                <div className="cookies-item" onClick={() => toggleTextVisibility("instemming")}>
                  <div className="cookies-title">
                    <span className="cookies-title-icon">{textVisibility["instemming"] ? "-" : "+"}</span>
                    <h2>Instemming met ons cookiebeleid</h2>
                  </div>
                  <p
                    style={{
                      display: textVisibility["instemming"] ? "block" : "none",
                    }}
                  >
                    Door onze website te blijven gebruiken, stemt u in met het
                    gebruik van cookies zoals beschreven in ons cookiebeleid.
                    Voor meer informatie over hoe wij omgaan met uw gegevens,
                    verwijzen wij u graag naar ons privacybeleid. Dank voor uw
                    begrip en het vertrouwen dat u in ons stelt.
                  </p>
                </div>
              </div>
              <div className="cookies-button">
                <div className="cookies-button-width display-flex-start">
                  <Button
                    color={"black"}
                    bgborder={"black"}
                    onClick={acceptCookies}
                  >
                    Accepteren
                  </Button>
                </div>
                <div className="cookies-button-width display-flex-end">
                  <Button
                    color={"gray"}
                    bgborder={"lightgray"}
                    onClick={declineCookies}
                  >
                    weigeren
                  </Button>
                </div>
              </div>
            </div>
          </div>
        )}
        {loadGA && (
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-67XPL606H8"
          ></script>
        )}
      </div>
    </div>
  );
};

export default CookieBanner;
