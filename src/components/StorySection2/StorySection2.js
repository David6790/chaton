import React from "react";
import { Zoom } from "react-awesome-reveal";
import SectionTitle from "../SectionTitle";
import sImg1 from "../../images/story/WelcomeDinner.jpeg";
import sImg2 from "../../images/story/PetitDejeuner .png";
import sImg3 from "../../images/story/LeGrandShow.png";
import sImg4 from "../../images/story/BrunchDesChampions.png";

import shape1 from "../../images/story/shape.png";
import shape2 from "../../images/story/shape2.png";
import shape3 from "../../images/story/shape3.png";
import shape4 from "../../images/story/shape.png";

import bshape1 from "../../images/story/flower-shape1.svg";
import bshape2 from "../../images/story/flower-shape2.svg";
import bshape3 from "../../images/story/flower-shape3.svg";
import bshape4 from "../../images/story/flower-shape4.svg";

const Storys = [
  {
    sImg: sImg1,
    shape: shape1,
    title: "Welcome Dinner",
    date: "08 mai 2025",
    description:
      "Après votre odyssée épique de la France à Marrakech, venez vous acclimater à notre nouvelle terre promise avec un dîner de bienvenue. On vous promet de quoi bien vous nourrir et vous faire oublier le plateau repas de l'avion. Préparez-vous à une soirée où la chaleur de l’accueil ne sera surpassée que par la température des tajines. ",
  },
  {
    sImg: sImg2,
    shape: shape2,
    title: "Petit déjeuner",
    date: "9 mai 2025",
    description:
      "Un petit-déjeuner vous attend pour vous mettre en forme ! Que ce soit pour explorer Marrakech ou pour être au top de votre forme pour le BIG EVENT du soir, on a tout ce qu’il faut. Entre le petit-déjeuner et le mariage, c’est quartier libre ! Profitez-en pour sortir et découvrir les merveilles de Marrakech à votre rythme ou vous préparer pour la soirée de votre vie !",
    order1: "order-lg-2 order-1",
    order2: "order-lg-1 order-2",
  },
  {
    sImg: sImg3,
    shape: shape3,
    title: "Le Grand Show",
    date: "9 mai 2025",
    description:
      "Et voilà le big moment ! Venez assister à l'instant où nous nous dirons 'OUI'. Préparez-vous à une cérémonie pleine d'émotions, de rires, et peut-être quelques larmes (de joie, bien sûr). Après toute cette niaiserie, sachez qu'il y aura à boire et à manger en abondance. Et surtout, on compte sur vous pour mettre le FIRE sur le dancefloor ! Habillez-vous pour l'occasion, apportez votre meilleure énergie, et préparez-vous à célébrer comme jamais !",
  },
  {
    sImg: sImg4,
    shape: shape4,
    title: "Brunch des Champions",
    date: "10 mai 2025",
    description:
      "Levez-vous et brillez ! (Enfin...pour ceux qui ont survécu à la fête). C’est l’heure de recharger vos batteries après une nuit peut-être trop courte. Un café assez fort pour réveiller un ours et brunch décontracté vous attend. Récupérez autour de bons plats et revivez les meilleurs moments de la veille. Et oui, on a des photos compromettantes.",
  },
];

const StorySection2 = (props) => {
  return (
    <section className="wpo-story-section section-padding" id="story">
      <div className="container">
        <SectionTitle
          subTitle={"Les Temps Forts"}
          MainTitle={"Programme des Festivités"}
        />
        <div className="wpo-story-wrap">
          {Storys.map((story, st) => (
            <div className="wpo-story-item" key={st}>
              <div className="wpo-story-img-wrap">
                <Zoom direction="up" duration="1000" triggerOnce="true">
                  <div className="wpo-story-img">
                    <img src={story.sImg} alt="" />
                  </div>
                </Zoom>
                <div className="clip-shape">
                  <svg
                    viewBox="0 0 382 440"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M191 0L381.526 110V330L191 440L0.474411 330V110L191 0Z" />
                  </svg>
                </div>
                <div className="wpo-img-shape">
                  <img src={story.shape} alt="" />
                </div>
              </div>
              <div className="wpo-story-content">
                <div className="wpo-story-content-inner">
                  <span>{story.date}</span>
                  <h2>{story.title}</h2>
                  <p>{story.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flower-shape-1">
        <img src={bshape1} alt="" />
      </div>
      <div className="flower-shape-2">
        <img src={bshape2} alt="" />
      </div>
      <div className="flower-shape-3">
        <img src={bshape3} alt="" />
      </div>
      <div className="flower-shape-4">
        <img src={bshape4} alt="" />
      </div>
    </section>
  );
};

export default StorySection2;
