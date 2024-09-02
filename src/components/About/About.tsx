import Image from "next/image";
import React from "react";
import Button from "../Button/Button";
import { Layout } from "@/layout/layout";
import Subtitle from "../Subtitle/Subtitle";

const About = () => {
  return (
    <Layout>
      <div className="py-[50px] md:py-[100px] flex flex-col justify-center items-start md:items-center md:flex-row ">
        <div className="w-full md:w-1/2 flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <Subtitle>Une fête pour tous</Subtitle>
            <h2 className="text-2xl">Découvrez la magie de notre kermesse !</h2>
            <p>
              Notre kermesse annuelle est un moment de partage et de joie pour
              toute la communauté. Rejoignez-nous pour une journée inoubliable
              remplie d'activités, de gourmandises, et de bonne humeur, tout en
              soutenant une cause qui nous tient à cœur.
            </p>
          </div>
          <div className="flex flex-col gap-4 ">
            <div className="flex flex-col md:flex-row gap-2">
              <div className="flex flex-col border border-gray-300 p-3 shadow-lg rounded-sm gap-2">
                <Image
                  src="/About/PartyIcon.png"
                  alt=""
                  width={30}
                  height={30}
                />
                <h3>Soirée festive</h3>
                <p className="text-sm">
                  Profitez d'une soirée animée avec musique, danse, et une
                  atmosphère conviviale pour tous.
                </p>
              </div>
              <div className="flex flex-col border border-gray-300 p-3 shadow-lg rounded-sm gap-2">
                <Image
                  src="/About/ActivitéesIcon.png"
                  alt=""
                  width={30}
                  height={30}
                />
                <h3>Activitées</h3>
                <p className="text-sm">
                  Découvrez plusieurs activitées pour petit et grand dont notre
                  balade en tracteur, pour une expérience unique !
                </p>
              </div>
            </div>
            <Button className>Envie de découvrir ?</Button>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-end">
          <Image
            src="/About/AboutpictureEvent.jpg"
            alt=""
            width={600}
            height={600}
            className="rounded-md shadow-lg"
          />
        </div>
      </div>
    </Layout>
  );
};

export default About;
