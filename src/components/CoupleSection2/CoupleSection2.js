import React from "react";

import bg from "../../images/couple/image-bg.svg";

const CoupleSection2 = (props) => {
  return (
    <section className="wpo-couple-section section-padding" id="couple">
      <div className="container">
        <div className="couple-area clearfix">
          <div className="row align-items-center">
            <div className="col col-md-12 col-12">
              <div className="couple-item">
                <div className="couple-img-wrap">
                  <div className="couple-img">
                    <img src="./img/test.jpg" alt="" />
                  </div>
                  <div className="c-shape">
                    <img src={bg} alt="" />
                  </div>
                </div>
                <div className="couple-text">
                  <h3>Domaine Yakout</h3>
                  <p>
                    Nous sommes très heureux de vous accueillir au Domaine
                    Yakout pour célébrer notre mariage. Situé à seulement 15
                    minutes de Marrakech et entouré de beaux jardins et d'une
                    oliveraie, ce lieu offre un cadre tranquille et élégant,
                    parfait pour passer un bon moment ensemble. La piscine, le
                    bar au bord de l'eau, et les différents espaces verts sont
                    là pour que vous puissiez vous détendre et profiter
                    pleinement de la fête.
                  </p>
                  <div className="social">
                    <ul>
                      <li>
                        <a
                          href="https://www.facebook.com/domaineyakout/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="ti-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a
                          href="https://www.instagram.com/domaineyakout/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className="ti-instagram"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="shape-1">
        <svg
          viewBox="0 0 1920 692"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.1">
            <path
              className="stroke-color"
              d="M-11 689C176.333 697 609 669.4 841 495L1111 279C1263.67 154.333 1640.6 -71.0002 1927 24.9998"
              stroke=""
              strokeWidth="2"
            />
            <path
              d="M-11 689C176.333 697 609 669.4 841 495L1111 279C1263.67 154.333 1640.6 -71.0002 1927 24.9998"
              stroke="black"
              strokeOpacity="0.2"
              strokeWidth="2"
            />
          </g>
          <g opacity="0.1">
            <path
              className="stroke-color"
              d="M1927 689C1739.67 697 1307 669.4 1075 495L805 279C652.333 154.333 275.4 -71.0002 -11 24.9998"
              stroke=""
              strokeWidth="2"
            />
            <path
              d="M1927 689C1739.67 697 1307 669.4 1075 495L805 279C652.333 154.333 275.4 -71.0002 -11 24.9998"
              stroke="black"
              strokeOpacity="0.2"
              strokeWidth="2"
            />
          </g>
          <path
            className="fill-color"
            d="M879 397C501.4 54.5998 135 31.6665 -1 62.9998V649C579.8 636.2 827.667 475.667 879 397Z"
            fill=""
          />
          <path
            className="fill-color"
            d="M1041 397C1418.6 54.5998 1785 31.6665 1921 62.9998V649C1340.2 636.2 1092.33 475.667 1041 397Z"
            fill=""
          />
        </svg>
      </div>
    </section>
  );
};

export default CoupleSection2;
