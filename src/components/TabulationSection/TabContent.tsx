"use client";
import React from "react";
import Tabulation from "./Tabulation";
import { Events } from "./EventsArray"; // Importez correctement les événements
import EventSection from "./EventsContent";
import { Layout } from "@/layout/layout";

const TabContent: React.FC = () => {
  const labels = Events.map((event) => (
    <div key={event.id}>
      <span className="text-2xl">0{event.id}</span> / {event.day}{" "}
      {event.dayNumber} {event.Month}
    </div>
  ));

  return (
    <div
      className=" bg-black text-gray-300 py-[50px] md:py-[100px]"
      id="program"
    >
      <Layout>
        <Tabulation labels={labels}>
          {Events.map((event) => (
            <EventSection
              key={event.id}
              id={event.id}
              day={event.day}
              dayNumber={event.dayNumber}
              Month={event.Month}
              title={event.title}
              description={event.description}
              button={event.button}
              image={event.image}
            />
          ))}
        </Tabulation>
      </Layout>
    </div>
  );
};

export default TabContent;
