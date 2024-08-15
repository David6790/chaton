import React from "react";
import { Slide } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import shape1 from "../../images/footer-shape-1.svg";
import shape2 from "../../images/footer-shape-2.svg";

const ClickHandler = () => {
  window.scrollTo(10, 0);
};

const Footer = (props) => {
  return (
    <footer className={`wpo-site-footer ${props.footerClass}`}>
      <div className="wpo-upper-footer">
        <div className="container">
          <div className="row align-items-center">
            <div className="col col-xl-3  col-lg-4 col-md-6 col-sm-12 col-12">
              <div className="widget link-widget">
                <div className="widget-title">
                  <h3>Mentions:</h3>
                  <p>Site réalisé par David Long Bin</p>
                  <p>Développeur FullStack : C# / ASP.Net / React / NodeJs</p>
                  <a
                    href="https://david-longbin.dev/"
                    style={{
                      textDecoration: "underline",
                      color: "#fff", // Couleur blanche pour correspondre aux autres textes
                      fontSize: "16px", // Taille de police correspondante
                    }}
                  >
                    Mon Portfolio
                  </a>
                </div>
                <div className="link-wrap"></div>
              </div>
            </div>
            <div className="col col-xl-6 col-lg-4 col-md-6 col-sm-12 col-12">
              <div className="widget about-widget">
                <div className="logo widget-title">
                  <Link className="logo" onClick={ClickHandler} to="/">
                    Charlotte & Nicolas
                  </Link>
                </div>
                <p>
                  Nous avons hâte de vous retrouver les amis et de partager ce
                  week-end inoubliable avec vous ❤️
                </p>
                <ul>
                  <li>
                    <Link onClick={ClickHandler} to="/">
                      <i className="ti-facebook"></i>
                    </Link>
                  </li>
                  <li>
                    <Link onClick={ClickHandler} to="/">
                      <i className="ti-twitter-alt"></i>
                    </Link>
                  </li>
                  <li>
                    <Link onClick={ClickHandler} to="/">
                      <i className="ti-instagram"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col col-xl-3  col-lg-4 col-md-6 col-sm-12 col-12">
              <div className="widget wpo-service-link-widget">
                <div className="widget-title">
                  <h3>Contact </h3>
                </div>
                <div className="contact-ft">
                  <a
                    href="mailto:charlotte.ec.jung@gmail.com?subject=Demande%20de%20renseignements%20"
                    style={{
                      textDecoration: "underline",
                      color: "#fff", // Couleur blanche pour correspondre aux autres textes
                      fontSize: "20px", // Taille de police correspondante
                    }}
                  >
                    charlotte.ec.jung@gmail.com
                  </a>
                  <p>Charlotte : 06.75.66.77.37</p>
                  <p>Nicolas : 06.61.97.66.19</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="wpo-lower-footer">
        <div className="container">
          <div className="row">
            <div className="col col-xs-12">
              <p className="copyright">
                {" "}
                &copy; Copyright 2024 |{" "}
                <Link onClick={ClickHandler} to="/">
                  David Long Bin
                </Link>{" "}
                | Tous droits réservés
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="ft-shape-1">
        <Slide direction="left" duration="1000" triggerOnce="true">
          <img src={shape1} alt="" />
        </Slide>
      </div>
      <div className="ft-shape-2">
        <Slide direction="right" duration="1200" triggerOnce="true">
          <img src={shape2} alt="" />
        </Slide>
      </div>
    </footer>
  );
};

export default Footer;
