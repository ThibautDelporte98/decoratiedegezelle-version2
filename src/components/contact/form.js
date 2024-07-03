import React, { useState, useEffect, useMemo } from "react";
import { useLocation, Link } from "react-router-dom";
import ConfirmPopUp from "./ComfirmPopUp";
import emailjs from "@emailjs/browser";
import Button from "../buttons/button";
import "../../scss/index.scss";
import "../../scss/contact/form.scss";

const validateForm = (formData) => {
  const { name, email, tel, subject, message, privacyAgreement } = formData;
  const newErrors = {};

  if (!name) {
    newErrors.name = "Naam & Voornaam verplicht.";
  }

  if (!email) {
    newErrors.email = "Email verplicht.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    newErrors.email = "Geen geldige email adres.";
  }

  if (!tel) {
    newErrors.tel = "Telefoon nummer verplicht.";
  } else if (
    !/^(\+?32|0\d{1,9}|33|0\d{1,9}|31|0\d{1,9}|49|0\d{1,15})\d{8,15}$/.test(tel)
  ) {
    newErrors.tel = "Geen geldig telefoonnummer.";
  }

  if (!subject) {
    newErrors.subject = "Onderwerp is verplicht.";
  }

  if (!message) {
    newErrors.message = "Bericht is verplicht.";
  }

  if (!privacyAgreement) {
    newErrors.privacyAgreement =
      "Het accepteren van het privacy beleid is verplicht.";
  }

  return newErrors;
};




function Form() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const preFilledEmail = searchParams.get("email") || "";
  const isEmailEmpty = preFilledEmail === "";
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [formData, setFormData] = useState({
    name: name,
    email: preFilledEmail,
    tel: tel,
    subject: subject,
    message: message,
    to_name: "Decoratie Degezelle",
    privacyAgreement: false,
  });
  const memoizedValidateForm = useMemo(
    () => validateForm(formData),
    [formData]
  );
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const [showPopup, setShowPopup] = useState(false);

  const handlePopUpClose = () => {
    setShowPopup(false);
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    const newErrors = memoizedValidateForm;
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      try {
        const templateParams = {
          name: formData.name,
          email: formData.email,
          tel: formData.tel,
          subject: formData.subject,
          message: formData.message,
          to_name: "Alexandro Degezelle",
          privacyAgreement: false,
        };
        const response = await emailjs.send(
          "service_dqiu03a",
          "template_dezcscm",
          templateParams,
          "aWvUK359hGkMJ98r6"
        );
        console.log("oke", response);
        setShowPopup(true);
        setName("");
        setEmail("");
        setSubject("");
        setTel("");
        setMessage("");
        window.scrollTo(
          0,
          1000 * parseFloat(getComputedStyle(document.documentElement).fontSize)
        );
      } catch (error) {
        console.error("Fout bij het verzenden van het formulier:", error);
      } finally {
        setIsSubmitting(false);
      }
    } else {
      console.log("Kan niet worden verstuurd");
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    // Use the type and checked properties to handle the checkbox
    const newValue = type === "checkbox" ? checked : value;

    setFormData({ ...formData, [name]: newValue });
    setErrors({ ...errors, [name]: "" });
  };


  // Prevent body from scrolling 
  useEffect(() => {
    if (showPopup) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showPopup]);


  
  const handleNavLinkClick = () => {
    // Reset the scroll position to the top of the page
    window.scrollTo(
      0,
      0 * parseFloat(getComputedStyle(document.documentElement).fontSize)
    );
  };

  return (
    <div className="col-12 col-lg-8">
      <div className="form">
        <form className="c-form__form" onSubmit={handleSubmit}>
          <input
            className="c-form__input"
            type="text"
            id="name"
            name="name"
            placeholder="Naam & Voornaam"
            value={formData.name}
            onChange={handleChange}
          />
          {errors.name && <span className="error">{errors.name}</span>}

          {isEmailEmpty ? (
            // Als preFilledEmail leeg is, toon een inputveld voor e-mail
            <input
              className="c-form__input"
              type="email"
              id="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
          ) : (
            // Als preFilledEmail niet leeg is, toon het waardeattribuut
            <input
              className="c-form__input"
              type="email"
              id="email"
              name="email"
              value={preFilledEmail}
              readOnly // Zodat de gebruiker de waarde niet kan wijzigen
            />
          )}
          {errors.email && <span className="error">{errors.email}</span>}

          <select
            className="c-form__input c-form__select"
            id="subject"
            name="subject"
            checked={formData.privacyAgreement}
            onChange={handleChange}
          >
            <option className="optionDisabled" value="">
              Onderwerp
            </option>
            <option value="Vrijblijvend advies">Vrijblijvend advies</option>
            <option value="Aanvraag offerte">Offerte aanvragen</option>
          </select>
          {errors.subject && <span className="error">{errors.subject}</span>}
          <input
            className="c-form__input"
            type="tel"
            id="phoneNumber"
            name="tel"
            placeholder="Telefoon"
            value={formData.tel}
            onChange={handleChange}
          />
          {errors.tel && <span className="error">{errors.tel}</span>}
          <textarea
            className="c-form__input"
            id="message"
            name="message"
            rows="3"
            cols="50"
            placeholder="Bericht"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
          {errors.message && <span className="error">{errors.message}</span>}

          <label className="c-form__policy" htmlFor="privacyAgreement">
            <input
              className="c-form__checkbox"
              type="checkbox"
              id="privacyAgreement"
              name="privacyAgreement"
              checked={formData.privacyAgreement}
              onChange={handleChange}
            />
            <div className="c-form__checkboxTxt">
              Ik ga akkoord met de{" "}
              <Link className="c-form__policyLink" to="/privacypolicy" onClick={handleNavLinkClick}>
                Privacy policy
              </Link>
            </div>
          </label>
          {errors.privacyAgreement && (
            <span className="error">{errors.privacyAgreement}</span>
          )}
          {isSubmitting && (
            <div className="loaderPosition">
              <div className="loaderDescription">Verzenden...</div>
              <div class="lds-ripple">
                <div></div>
                <div></div>
              </div>
            </div>
          )}
        </form>
        <Button
            color={"white"}
            layout={"display-flex-start"}
            onClick={handleSubmit}
            scrollToTop={false}
          >
            Verstuur
          </Button>
      </div>
      {showPopup && <ConfirmPopUp onClose={handlePopUpClose} />}
    </div>
  );
}

export default Form;
