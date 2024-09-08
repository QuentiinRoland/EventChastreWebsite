import { StaticImport } from "next/dist/shared/lib/get-img-props";
import image1 from "../../../public/TabulationEvent/EventCar.jpg";
import image2 from "../../../public/TabulationEvent/KermessePhoto.png";
import image3 from "../../../public/TabulationEvent/repasdesaines.png";
import image4 from "../../../public/TabulationEvent/KermessePhotoTracteur.png";

export type Event = {
  id: number;
  dayNumber: number;
  Month: string;
  day: string;
  image: StaticImport;
  title: string;
  description: string;
  button: string;
};

export const Events: Event[] = [
  {
    id: 1,
    dayNumber: 26,
    Month: "Septembre",
    day: "Jeudi",
    image: image2,
    title: "Afterwork",
    description: `Une première édition à ne pas manquer
      Venez participer à la toute première édition de l'Afterwork de la Kermesse de Chastre, une soirée qui s’annonce exceptionnelle pour bien commencer cette édition 2024. Dès 18h, l'ambiance musicale sera assurée pour créer une atmosphère conviviale et détendue. C'est l'occasion idéale de se retrouver entre amis ou collègues après une journée de travail, autour d'un verre et de discussions animées. Que vous soyez un habitué des soirées Afterwork ou simplement curieux de découvrir ce format, vous serez les bienvenus. Bonne humeur garantie pour cette soirée de lancement !
      
      📅 Heure : 18h00 - 00h00
      Contactez Charly Cravillon : 0472/54.51.56`,
    button: "Commandez vos tickets !",
  },
  {
    id: 2,
    dayNumber: 27,
    Month: "Septembre",
    day: "Vendredi",
    image: image3,
    title: "Repas Dansant des Aînés et Quizz Interactif",
    description: `Le 27 septembre, vivez une journée conviviale avec un repas dansant pour les aînés à partir de 12h00, animé par Erika la Princesse de l'accordéon. En soirée, testez vos connaissances lors du quizz interactif dès 19h30, ouvert à tous. Formez des équipes de 5 personnes maximum et profitez d'une soirée pleine de rires et de défis. La journée se clôturera avec la Panda Night, animée par DJ MGK.

    📅 Repas des Aînés : 12h00, 15 euros
    📅 Quizz Interactif : 19h30, équipes de 5 personnes max
    
    Contactez Charly Cravillon (repas) : 0472/54.51.56
    Contactez Eloise Libouton (quizz) : 0472/67.82.17`,
    button: "Commandez vos tickets !",
  },
  {
    id: 3,
    dayNumber: 28,
    Month: "Septembre",
    day: "Samedi",
    image: image1,
    title:
      "Balade de Mobylette, Exposition de voitures, Country Dance, Soirée Années 80-2000",
    description: `Une journée d’activités pour tous les goûts
    Le 28 septembre, vivez une journée riche en animations à la Kermesse de Chastre ! Dès 9h, profitez d'une balade en mobylette à travers la commune, suivie d'un repas inclus. Pour les amateurs de belles mécaniques, une exposition de voitures statiques se tiendra simultanément. À 14h, enfilez vos bottes et rejoignez-nous pour une session de danse country avec JIPP & Sundie. La journée se terminera en musique avec une soirée "80’s, 90’s, 2000’s" animée par DJ MOMO dès 22h.

  📅 Balade de Mobylette : 9h00, 15 euros
  📅 Exposition de voitures : 9h00, 5 euros
  📅 Country Dance : 14h00, 5 euros
  📅 Soirée Années 80, 90 et 2000 : 22h00, 6 euros
    Contactez Olivier Verstraelen (mobylette) : 0496/54.93.03
    Contactez Nathan Saussus (voitures) : 0486/36.09.24`,
    button: "Commandez vos tickets !",
  },
  {
    id: 2,
    dayNumber: 29,
    Month: "Septembre",
    day: "Dimanche",
    image: image4,
    title: "Concentration de Tracteurs et Repas",
    description: `Un rendez-vous incontournable pour les passionnés de machines agricoles
    Le 29 septembre, préparez-vous pour une journée unique dédiée aux tracteurs et aux amateurs de machines agricoles. La concentration de tracteurs est devenue une véritable tradition à Chastre, et cette année ne fera pas exception. À partir de 9h00, les participants pourront rejoindre la parade, un moment toujours impressionnant avec des dizaines de tracteurs de toutes sortes défilant dans la ville. À la fin de la parade, un grand barbecue attend tous les participants et accompagnateurs, avec un menu copieux comprenant 3 viandes, des crudités et un dessert. Que vous soyez un conducteur ou simplement un passionné, venez profiter de cette ambiance conviviale en plein air.
    
    📅 Heure : 9h00
    💵 Prix : 5 euros par tracteur (repas compris) / 20 euros pour les accompagnateurs
    Contactez Philippe Libouton : 0477/20.58.98`,
    button: "Commandez vos tickets !",
  },
];
