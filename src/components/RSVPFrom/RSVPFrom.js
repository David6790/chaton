import React, { useState } from "react";

const RSVPForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [guest, setGuest] = useState("");
  // eslint-disable-next-line
  const [brunch, setBrunch] = useState(null); // Modification: brunch est maintenant un booléen
  const [arrival, setArrival] = useState("");
  const [isAttending, setIsAttending] = useState(null);
  const [hasAllergies, setHasAllergies] = useState(null);
  const [allergyDetails, setAllergyDetails] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    // Ici, vous pourrez ajouter la validation de vos saisies
    // et toute autre logique de soumission du formulaire

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
        <div className="col col-lg-12 col-12">
          <div className="form-field">
            <input
              value={name}
              type="text"
              name="name"
              onChange={(e) => setName(e.target.value)}
              className="form-control"
              placeholder="Nom de la famille"
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
                >
                  <option value="">Le jour de votre arrivée</option>
                  <option value="08/05">Jeudi 08/05 - Dîner de bienvenu</option>
                  <option value="09/05">Vendredi 09/05 - La Cérémonie</option>
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
