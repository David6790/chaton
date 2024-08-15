import React from "react";
import { JackInTheBox } from "react-awesome-reveal";
import SectionTitle from "../SectionTitle";
import sImg1 from "../../images/story/location.webp";
import sImg2 from "../../images/story/passport.webp";
import sImg3 from "../../images/story/souks.jpg";
import sImg4 from "../../images/story/villa.jpg";

import flowerShape from "../../images/story/flower.svg";
import flowerShape2 from "../../images/story/flower-2.svg";
import pin from "../../images/story/pin.svg";
import ring from "../../images/story/ring.svg";

import shape1 from "../../images/story/flower-shape1.svg";
import shape2 from "../../images/story/flower-shape2.svg";
import shape3 from "../../images/story/flower-shape3.svg";
import shape4 from "../../images/story/flower-shape4.svg";

const Storys = [
  {
    sImg: sImg4,
    flower: flowerShape2,
    title: "Villa Yakout",
    date: <span style={{ fontSize: "28px" }}>La Villa</span>,
    description: `
             Il ne reste que quelques chambres disponibles à la Villa Yakout. 
             Si vous le souhaitez vous pouvez contacter Charlotte qui vous renseignera 
             sur les disponibilités et les tarifs.`,
    link: {
      url: "mailto:charlotte.ec.jung@gmail.com?subject=Demande%20de%20réservation%20Villa%20Yakout",
      text: "Contacter Charlotte pour plus d'informations", // Texte du lien
    },
    order1: "order-lg-2 order-1",
    order2: "order-lg-1 order-2",
  },
  {
    sImg: sImg1,
    flower: flowerShape,
    title: "Se Loger",
    date: <span style={{ fontSize: "28px" }}>AirBnB</span>,
    description: `
    Les alentours du Domaine Yakout regorgent de charmantes petites locations.
    Nous avons pris le soin de sélectionner quelques pépites qui ne manqueront pas de vous séduire.`,
    link: {
      url: "https://www.airbnb.com", // Lien vers Airbnb ou autre
      text: "Explorer la sélection sur Airbnb", // Texte du lien
    },
  },
  {
    sImg: sImg2,
    flower: flowerShape2,
    title: "Attention passport",
    date: <span style={{ fontSize: "28px" }}>Voyage</span>,
    description: `
          Attention, pour les voyages à Marrakech, votre passeport doit avoir une validité de plus de 6 mois.
          Vérifiez les détails pour vous assurer que vos documents sont en règle.`,
    link: {
      url: "https://www.diplomatie.gouv.fr/fr/conseils-aux-voyageurs/conseils-par-pays-destination/maroc/", // Lien officiel pour les conseils aux voyageurs
      text: "Vérifier les détails sur le site du gouvernement", // Texte du lien
    },
    order1: "order-lg-2 order-1",
    order2: "order-lg-1 order-2",
  },
  {
    sImg: sImg3,
    flower: flowerShape,
    title: "Visiter Marakech",
    date: <span style={{ fontSize: "28px" }}>Toursime</span>,
    description: `
      N'hésitez pas à faire un petit tour dans le coin, Marrakech est une très belle ville.
      Découvrez toutes les merveilles qu'elle a à offrir en visitant l'office de tourisme.`,
    link: {
      url: "https://visitmarrakech.com/", // Lien vers l'office de tourisme de Marrakech
      text: "Visiter l'office de tourisme de Marrakech", // Texte du lien
    },
  },
];

const StorySection = (props) => {
  return (
    <section className="wpo-story-section-s2 section-padding" id="story">
      <div className="container">
        <SectionTitle
          subTitle={"Bon à savoir"}
          MainTitle={"Les infos pratiques"}
        />
        <div className="wpo-story-wrap">
          {Storys.map((story, st) => (
            <div className="wpo-story-item" key={st}>
              <div className="row">
                <div className={`col col-lg-6 col-12 ${story.order1}`}>
                  <div className="wpo-story-img">
                    <img src={story.sImg} alt="" />
                  </div>
                </div>
                <div className={`col col-lg-6 col-12 ${story.order2}`}>
                  <JackInTheBox duration="1000" triggerOnce="true">
                    <div className="wpo-story-content">
                      <div className="thumb">
                        <span>{story.date}</span>
                        <div className="pin">
                          <img src={pin} alt="" />
                        </div>
                      </div>
                      <h2>{story.title}</h2>
                      <p>{story.description}</p>
                      <a
                        href={story.link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          color: "#808000",
                          textDecoration: "underline",
                        }} // Utilisation du vert olive
                      >
                        {story.link.text}
                      </a>
                      <div className="flower">
                        <img src={story.flower} alt="" />
                      </div>
                    </div>
                  </JackInTheBox>
                </div>
              </div>
              <div className="ring-wrap">
                {Array.apply(null, { length: 10 }).map((e, i) => (
                  <div className="ring" key={i}>
                    <img src={ring} alt="" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flower-shape-1">
        <img src={shape1} alt="" />
      </div>
      <div className="flower-shape-2">
        <img src={shape2} alt="" />
      </div>
      <div className="flower-shape-3">
        <img src={shape3} alt="" />
      </div>
      <div className="flower-shape-4">
        <img src={shape4} alt="" />
      </div>
    </section>
  );
};

export default StorySection;
