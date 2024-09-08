import React from "react";
import Image from "next/image";
import { Event } from "./EventsArray"; // Assurez-vous que le chemin est correct
import Button from "../Button/Button";

const EventSection = (props: Event) => (
  <div className="flex flex-col md:flex-row gap-4 md:justify-center md:items-center">
    <div className="md:w-1/2 flex flex-col gap-2">
      <h3 className="text-xl text-white">{props.title}</h3>
      <p>{props.description}</p>
      <Button>{props.button}</Button>
    </div>
    <div className="md:w-1/2">
      <Image src={props.image} alt={props.title} width={350} height={250} />
    </div>
  </div>
);

export default EventSection;
