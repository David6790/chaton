import React, { useState } from "react";
import axios from "axios";
import emailjs from "@emailjs/browser";

const RSVPForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [guest, setGuest] = useState("");
  const [brunch, setBrunch] = useState(null);
  const [arrival, setArrival] = useState("");
  const [isAttending, setIsAttending] = useState(null);
  const [hasAllergies, setHasAllergies] = useState(null);
  const [allergyDetails, setAllergyDetails] = useState("");

  const [errorMessage, setErrorMessage] = useState("");

  const sendEmailConfirmation = (formData) => {
    const emailParams = {
      to_name: formData.Nom,
      to_email: formData.Email,
      nombre_personnes: formData.NombreDePersonnes,
      date_arrivee: formData["Date-arrivee"],
      present_brunch: formData.PresentBrunch,
      allergies: formData.AllergieIntolerance,
      rsvp: formData.RSVP,
    };

    // Envoi de l'email avec EmailJS
    emailjs
      .send(
        "service_6j5qs7e",
        "template_jlbbq7n",
        emailParams,
        "TlcoR3tgd_o9uLj7o"
      )
      .then((response) => {
        console.log("Email envoyé avec succès", response.status, response.text);
        alert("Un email de confirmation vous a été envoyé.");
      })
      .catch((error) => {
        console.error("Erreur lors de l'envoi de l'email", error);
        alert("Erreur lors de l'envoi de l'email.");
      });
  };

  const validateForm = () => {
    // Validation des champs obligatoires
    if (!name || !email || !guest) {
      setErrorMessage("Nom, nombre de personnes et email sont obligatoires.");
      return false;
    }

    // Validation des champs liés à la présence
    if (isAttending === true) {
      if (!arrival) {
        setErrorMessage(
          "Le jour d'arrivée est obligatoire si vous assistez à l'événement."
        );
        return false;
      }
      if (brunch === null) {
        setErrorMessage("Vous devez indiquer si vous serez présent au brunch.");
        return false;
      }
    }

    // Validation des allergies
    if (hasAllergies === true && !allergyDetails) {
      setErrorMessage("Veuillez spécifier les détails de votre allergie.");
      return false;
    }

    // Réinitialiser le message d'erreur si tout est correct
    setErrorMessage("");
    return true;
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    // Si la validation échoue, on arrête le processus
    if (!validateForm()) {
      return;
    }

    const formData = {
      Nom: name,
      NombreDePersonnes: guest,
      Email: email,
      RSVP: isAttending === true ? "Oui" : isAttending === false ? "Non" : "",
      "Date-arrivee": arrival,
      AllergieIntolerance: hasAllergies ? allergyDetails : "Non",
      PresentBrunch: brunch ? "Oui" : "Non",
    };

    // Envoi des données via axios
    try {
      console.log(formData);
      const response = await axios.post(
        "https://sheetdb.io/api/v1/trawv5ym4i8ob", // Remplace par ton identifiant SheetDB
        formData
      );
      console.log(response.data);
      alert("Données envoyées avec succès !");

      // Envoi de l'email de confirmation après la mise à jour de SheetDB
      sendEmailConfirmation(formData);
    } catch (error) {
      console.error("Erreur lors de l'envoi des données", error);
    }

    // Réinitialiser les champs après soumission
    setName("");
    setEmail("");
    setGuest("");
    setBrunch(null);
    setArrival("");
    setIsAttending(null);
    setHasAllergies(null);
    setAllergyDetails("");
  };

  return (
    <form onSubmit={submitHandler} className="contact-validation-active">
      <div className="row">
        {/* Affichage du message d'erreur */}
        {errorMessage && (
          <div className="col col-lg-12 col-12">
            <p style={{ color: "red" }}>{errorMessage}</p>
          </div>
        )}

        <div className="col col-lg-12 col-12">
          <div className="form-field">
            <input
              value={name}
              type="text"
              name="name"
              onChange={(e) => setName(e.target.value)}
              className="form-control"
              placeholder="Nom de la famille"
              required
            />
          </div>
        </div>

        <div className="col col-lg-12 col-12">
          <div className="form-field">
            <select
              value={guest}
              className="form-control"
              name="guest"
              onChange={(e) => setGuest(e.target.value)}
              required
            >
              <option value="">Nombre de personne</option>
              <option value="01">01</option>
              <option value="02">02</option>
              <option value="03">03</option>
              <option value="04">04</option>
              <option value="05">05</option>
              <option value="06">06</option>
            </select>
          </div>
        </div>

        <div className="col col-lg-12 col-12">
          <div className="form-field">
            <input
              value={email}
              type="email"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              placeholder="Votre Email"
              required
            />
          </div>
        </div>

        <div className="col col-lg-12 col-12">
          <label
            htmlFor="radio-group"
            style={{
              fontSize: "16px",
              fontWeight: "bold",
              marginBottom: "5px",
            }}
          >
            Avons-nous le plaisir de vous recevoir ?
          </label>
          <div className="radio-buttons">
            <p>
              <input
                type="radio"
                id="attend"
                name="attend"
                value="yes"
                onChange={() => setIsAttending(true)}
              />
              <label htmlFor="attend">Oui, je serais là</label>
            </p>
            <p>
              <input
                type="radio"
                id="not"
                name="attend"
                value="no"
                onChange={() => setIsAttending(false)}
              />
              <label htmlFor="not">Désolé, je ne pourrais pas</label>
            </p>
          </div>
        </div>

        {isAttending && (
          <>
            <div className="col col-lg-12 col-12">
              <div className="form-field">
                <select
                  value={arrival}
                  className="form-control"
                  name="arrival"
                  onChange={(e) => setArrival(e.target.value)}
                  required={isAttending === true}
                >
                  <option value="">Le jour de votre arrivée</option>
                  <option value="Jeudi - Dîner de bienvenu">
                    Jeudi 08/05 - Dîner de bienvenu
                  </option>
                  <option value="Vendredi - La cérémonie">
                    Vendredi 09/05 - La Cérémonie
                  </option>
                </select>
              </div>
              <p style={{ marginTop: "5px", fontSize: "14px", color: "#555" }}>
                <strong>*</strong> Vous pouvez arriver dès le jeudi soir 08/05,
                nous vous proposons un petit dîner de bienvenue dans le domaine.
                Cela vous laisse la matinée du vendredi pour faire du tourisme à
                Marrakech ;) Sinon, vous pouvez aussi arriver le vendredi 09/05,
                le jour de la cérémonie.
              </p>
            </div>

            <div className="col col-lg-12 col-12">
              <label
                htmlFor="allergies"
                style={{
                  fontSize: "16px",
                  fontWeight: "bold",
                  marginBottom: "5px",
                }}
              >
                Avez-vous des intolérances ou allergies ?
              </label>
              <div className="radio-buttons">
                <p>
                  <input
                    type="radio"
                    id="allergies-yes"
                    name="allergies"
                    value="yes"
                    onChange={() => setHasAllergies(true)}
                  />
                  <label htmlFor="allergies-yes">Oui</label>
                </p>
                <p>
                  <input
                    type="radio"
                    id="allergies-no"
                    name="allergies"
                    value="no"
                    onChange={() => setHasAllergies(false)}
                  />
                  <label htmlFor="allergies-no">Non</label>
                </p>
              </div>
            </div>

            {hasAllergies && (
              <div className="col col-lg-12 col-12">
                <div className="form-field">
                  <label
                    htmlFor="allergy-details"
                    style={{
                      fontSize: "16px",
                      fontWeight: "bold",
                      marginBottom: "5px",
                    }}
                  >
                    Indiquez-nous votre intolérance ou allergie
                  </label>
                  <input
                    value={allergyDetails}
                    type="text"
                    name="allergy-details"
                    onChange={(e) => setAllergyDetails(e.target.value)}
                    className="form-control"
                    placeholder="Intolérances ou allergies"
                    required={hasAllergies === true}
                  />
                </div>
              </div>
            )}

            <div className="col col-lg-12 col-12">
              <label
                htmlFor="brunch"
                style={{
                  fontSize: "16px",
                  fontWeight: "bold",
                  marginBottom: "5px",
                }}
              >
                Serez-vous là pour le brunch ?
              </label>
              <div className="radio-buttons">
                <p>
                  <input
                    type="radio"
                    id="brunch-yes"
                    name="brunch"
                    value="yes"
                    onChange={() => setBrunch(true)}
                    required={isAttending === true}
                  />
                  <label htmlFor="brunch-yes">Oui</label>
                </p>
                <p>
                  <input
                    type="radio"
                    id="brunch-no"
                    name="brunch"
                    value="no"
                    onChange={() => setBrunch(false)}
                    required={isAttending === true}
                  />
                  <label htmlFor="brunch-no">Non</label>
                </p>
              </div>
              <p style={{ marginTop: "5px", fontSize: "14px", color: "#555" }}>
                <strong>*</strong> Le lendemain de la fête, donc le samedi
                10/05, pour vous aider à récupérer et surmonter la gueule de
                bois, nous vous proposons un brunch gargantuesque pour éponger
                l'alcool. Ceux qui doivent prendre des vols trop tôt, désolé
                pour vous... vous n'avez qu'à manger des nouilles sur EasyJet !
              </p>
            </div>
          </>
        )}
      </div>

      <div className="submit-area">
        <button type="submit" className="theme-btn">
          Confirmer
        </button>
      </div>
    </form>
  );
};

export default RSVPForm;
