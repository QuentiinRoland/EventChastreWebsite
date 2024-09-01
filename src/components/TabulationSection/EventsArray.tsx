import { StaticImport } from "next/dist/shared/lib/get-img-props";
import image1 from "../../../public/TabulationEvent/EventCar.jpg";
import image2 from "../../../public/About/AboutpictureEvent.jpg";

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
    dayNumber: 27,
    Month: "Septembre",
    day: "Monday",
    image: image1,
    title: "Premier Rassemblement Statique de Voitures à Chastre",
    description:
      "La Comité des Fêtes de Chastre organise son tout premier rassemblement de voitures et motos statiques ! Participez à cet événement unique et exposez votre véhicule pour seulement 5 euros par exposant. Des rafraîchissements et des petites restaurations seront disponibles sur place pour agrémenter votre journée. Afin de faciliter l'organisation, merci de réserver votre place à l'avance. Pour toute information complémentaire, veuillez envoyer un SMS au 0468/36.09.24.",
    button: "Voir plus",
  },
  {
    id: 2,
    dayNumber: 28,
    Month: "Septembre",
    day: "Mardi",
    image: image2,
    title: "Événement 2",
    description: "Description de l'événement 2.",
    button: "Voir plus",
  },
  {
    id: 2,
    dayNumber: 28,
    Month: "Septembre",
    day: "Mardi",
    image: image2,
    title: "Événement 2",
    description: "Description de l'événement 2.",
    button: "Voir plus",
  },
  {
    id: 2,
    dayNumber: 28,
    Month: "Septembre",
    day: "Mardi",
    image: image2,
    title: "Événement 2",
    description: "Description de l'événement 2.",
    button: "Voir plus",
  },
];
