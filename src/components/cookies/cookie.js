import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import Button from "../buttons/button-cookies.js";
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

  useEffect(() => {
    setStyles();
  }, [isCookieOpen]);


  const setStyles = () => {
    setIsHidden((document.body.style.overflow = isCookieOpen ? "hidden" : "auto"));
    setZIndex(isCookieOpen ? 1000 : 0);
  };

  const toggleTextVisibility = (item) => {
    setTextVisibility((prevVisibility) => ({
      ...prevVisibility,
      [item]: !prevVisibility[item],
    }));
  };


  const acceptCookies = () => {
    Cookies.set("cookiesAccepted", "true", { expires: 90 });
    setShowBanner(false);
    setLoadGA(true);
    setIsCookieOpen(false);
    setStyles();
    if (window.gtag) {
      window.gtag("config", "G-67XPL606H8");
    }
  };

  const declineCookies = () => {
    Cookies.set("cookiesAccepted", "false", { expires: 3 });
    setShowBanner(false);
    setLoadGA(false);
    setIsCookieOpen(false);
    setStyles();
  };

  useEffect(() => {
    initializeCookies();
  }, []);

  const initializeCookies = () => {
    const cookiesAccepted = Cookies.get("cookiesAccepted");
    setShowBanner(!cookiesAccepted);
    setLoadGA(!!cookiesAccepted);
    setIsCookieOpen(!cookiesAccepted);
    setStyles();

    if (cookiesAccepted === "false") {
      setIsHidden("hidden");
      setZIndex(0);
    }
};




  return (
    <div className="cookies" style={{ zIndex }}>
      <div className="container">
        {showBanner && (
          <div className="display-flex-center">
            <div className="cookies-info">
              <div className="cookies-items">
                {Object.keys(textVisibility).map((item) => (
                  <div className="cookies-item" key={item} onClick={() => toggleTextVisibility(item)}>
                    <div className="cookies-title">
                      <span className="cookies-title-icon">{textVisibility[item] ? "-" : "+"}</span>
                      <h2>{getTitleText(item)}</h2>
                    </div>
                    <p style={{ display: textVisibility[item] ? "block" : "none" }}>
                      {getContentText(item)}
                    </p>
                  </div>
                ))}
              </div>
              <div className="cookies-button">
                  <Button color={"gray"} bgborder={"black"} onClick={acceptCookies}>
                    Accepteren
                  </Button>
                  <Button color={"gray"} bgborder={"lightgray"} onClick={declineCookies}>
                    Weigeren
                  </Button>
              </div>
            </div>
          </div>
        )}
        {loadGA && (
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-67XPL606H8"></script>
        )}
      </div>
    </div>
  );
};

const getTitleText = (item) => {
  switch (item) {
    case "waarom":
      return "Waarom verzamelen wij uw gegevens?";
    case "hoe":
      return "Hoe gebruiken we de verzamelde gegevens?";
    case "beheer":
      return "Beheer van cookies";
    case "instemming":
      return "Instemming met ons cookiebeleid";
    default:
      return "";
  }
};

const getContentText = (item) => {
  switch (item) {
    case "waarom":
      return (
        "Beste bezoeker, Wij maken gebruik van cookies, waaronder " +
        "Google Analytics, om uw browse-ervaring op onze website te " +
        "verbeteren. De verzamelde gegevens helpen ons beter inzicht " +
        "te krijgen in hoe u onze site ervaart, welke pagina's het " +
        "meest worden bezocht en hoe we uw interactie met onze inhoud " +
        "kunnen optimaliseren."
      );
    case "hoe":
      return (
        "De informatie die we via cookies verzamelen, is volledig " +
        "anoniem en wordt alleen gebruikt voor statistische " +
        "doeleinden. Door deze gegevens te analyseren, kunnen we " +
        "trends identificeren, de prestaties van onze website " +
        "evalueren en onze dienstverlening aanpassen om aan uw " +
        "verwachtingen te voldoen."
      );
    case "beheer":
      return (
        "U heeft te allen tijde de mogelijkheid om het gebruik van " +
        "cookies te beheren via uw browserinstellingen. Houd er " +
        "echter rekening mee dat het uitschakelen van cookies " +
        "bepaalde functies en services op onze website kan " +
        "beïnvloeden."
      );
    case "instemming":
      return (
        "Door onze website te blijven gebruiken, stemt u in met het " +
        "gebruik van cookies zoals beschreven in ons cookiebeleid. " +
        "Voor meer informatie over hoe wij omgaan met uw gegevens, " +
        "verwijzen wij u graag naar ons privacybeleid. Dank voor uw " +
        "begrip en het vertrouwen dat u in ons stelt."
      );
    default:
      return "";
  }
};


export default CookieBanner;
