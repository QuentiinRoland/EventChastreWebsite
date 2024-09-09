"use client";
import React from "react";
import Tabulation from "./Tabulation";
import { Events } from "./EventsArray";
import EventSection from "./EventsContent";
import LayoutSection from "../Layout/Layout";

const TabContent: React.FC = () => {
  const labels = Events.map(
    (event) => `0${event.id} / ${event.day} ${event.dayNumber} ${event.Month}`
  );

  return (
    <div
      className=" bg-black text-gray-300 py-[50px] md:py-[100px]"
      id="program"
    >
      <LayoutSection>
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
      </LayoutSection>
    </div>
  );
};

export default TabContent;
