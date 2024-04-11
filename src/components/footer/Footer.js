import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CopyToClipboard } from 'react-copy-to-clipboard';
import phone from "../../images/icons/phone.png";
import emailI from "../../images/icons/email.png";
import adress from "../../images/icons/location.png";
import btw from "../../images/icons/btw-white.png";
import facebook from "../../images/icons/facebook.png";
import instagram from "../../images/icons/instagram.png";
import logo from "../../images/logo/logo.png";
import "../../scss/footer/footer.scss";

function Footer() {
  const [email, setEmail] = useState("");
  const [textToCopy, setTextToCopy] = useState("BTW BE0797.449.965"); // The text you want to copy
  const [isCopied, setIsCopied] = useState(false);


  const onCopyHandler = (text, result) => {
    if (result) {
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2500);
    } else {
      // Handle the error scenario
      alert('Failed to copy text. Please try again.');
    }
  };


  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    navigate(`/contact?email=${encodeURIComponent(email)}`);
  };

  const handleNavLinkClick = () => {
    // Reset the scroll position to the top of the page
    window.scrollTo(
      0,
      0 * parseFloat(getComputedStyle(document.documentElement).fontSize)
    );
  };

  const instagramUsername = "decoratie_degezelle";

  const openInstagramApp = () => {
    window.open(`instagram://user?username=${instagramUsername}`, "_self");
  };

  return (
    <div className="Footer">
      <div className="container">
        <div className="first-row">
          <div className="row">
            <div className="col-12 col-md-8 col-lg-7">
              <div className="cta-form mb-5">
                <h2>
                  Vraag een <span style={{ color: "#caa35c" }}>gratis</span>{" "}
                  offerte aan!
                </h2>
                <p>
                  Jouw project verdient de beste zorg. Vraag nu uw offerte aan
                  en laat ons bewijzen dat wij de juiste keuze zijn.
                </p>
                <form onSubmit={handleSubmit}>
                  <input
                    className="c-banner__input"
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Voer jouw Email in."
                    value={email}
                    onChange={handleEmailChange}
                    required
                  />
                  <div className="send submit">
                    <button
                      className="send-button submit"
                      type="submit"
                      onClick={handleNavLinkClick}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="currentColor"
                        className="bi bi-arrow-right"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                        />
                      </svg>
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-12 col-md-4 col-lg-3">
              <div className="data-contact icon-fill mb-5">
                <h3>Contacteer ons!</h3>
                <ul>
                  <li className="data-item">
                    <Link className="d-flex" to={"tel:+32478366070"}>
                      <span className="icon">
                        <img src={phone} alt={phone} />
                      </span>
                      <div className="data-item-text">+32 0478 36 60 70</div>
                    </Link>
                  </li>
                  <li className="data-item">
                    <Link className="d-flex" to={"mailto:info@decoratiedegezelle.be"}>
                      <span className="icon">
                        <img src={emailI} alt={emailI} />
                      </span>
                      <div className="data-item-text">
                        info@decoratiedegezelle.be
                      </div>
                    </Link>
                  </li>
                  <li className="data-item">
                    <Link className="d-flex" to={"https://maps.app.goo.gl/AJmUJCUKMdJTrzQ17"} target="_blank" >
                      <span>
                        <img src={adress} alt={adress} />
                      </span>
                      <div className="data-item-text">
                        Kouterstraat 42 | Harelbeke
                      </div>
                    </Link>
                  </li>
                  <CopyToClipboard text={textToCopy} onCopy={onCopyHandler}>
                    <li className="data-item d-flex" style={{ cursor: 'pointer' }} title="BTW-nummer kopieren">
                        <span>
                          <img src={btw} alt={btw} />
                        </span>
                        <div style={{ marginTop: ".1rem" }}>
                          BTW BE0797.449.965
                        </div>
                    </li>                    
                  </CopyToClipboard>
                  {isCopied && <div className="alert-success">Gekopieerd naar klembord!</div>}
                </ul>
              </div>
            </div>
            <div className="col-12 col-lg-2 ">
              <div className="data-social mb-5">
                <h3>Volg ons op:</h3>
                <ul className="d-flex">
                  <li className="data-item data-item-start">
                    <Link to={"https://www.facebook.com/profile.php?id=100090360757782"} target="_blank">
                      <img src={facebook} alt="facebook" />
                    </Link>
                  </li>
                  <li className="data-item">
                    <Link to={"https://www.instagram.com/decoratie_degezelle/"} onClick={openInstagramApp}>
                      <img src={instagram} alt="facebook" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="last-row">
          <div className="row">
            <div className="col-6">
              <div className="conditions">
                <ul>
                  <li className="conditions-item">
                    <Link to={'/algemene-voorwaarden'} onClick={handleNavLinkClick} >Algemene voorwaarden</Link>
                  </li>
                  <li className="conditions-item">
                    <Link to={'/privacypolicy'} onClick={handleNavLinkClick}>Privacy policy</Link>
                  </li>
                  <li className="conditions-item">
                    <Link to={'https://www.boss.be/'} target="_blank" >Products by Bosspaint</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-6">
              <Link className="made-by">Made by &copy;Delporte</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
