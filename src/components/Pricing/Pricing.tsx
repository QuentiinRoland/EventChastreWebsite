"use client";

import React from "react";
import Image from "next/image";
import Button from "../Button/Button";
import LayoutSection from "../Layout/Layout";
import { motion, useMotionValue, useTransform } from "framer-motion";
import Subtitle from "../Subtitle/Subtitle";
import Link from "next/link";

const Pricing = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const translateX = useTransform(mouseX, [0, 1], ["-40%", "40%"]);
  const translateY = useTransform(mouseY, [0, 1], ["-40%", "40%"]);

  const handleMouseMove = (event: any) => {
    const { clientX, clientY, currentTarget } = event;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();

    mouseX.set((clientX - left) / width);
    mouseY.set((clientY - top) / height);
  };

  return (
    <div
      className="flex flex-col py-[50px] md:py-[100px] gap-4 bg-black text-white relative overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      <LayoutSection className="flex flex-col gap-6" id="pricing">
        <div className="flex flex-col justify-center items-center gap-2">
          <Subtitle>Soirée festive inoubliable</Subtitle>
          <h2 className="text-2xl">Réservez votre place</h2>
          <p className="text-center max-w-[900px]">
            Rejoignez-nous pour une soirée exceptionnelle où la fête bat son
            plein. Profitez de la musique live, de spectacles captivants, et
            d'une ambiance chaleureuse. Que vous optiez pour l'entrée à la
            soirée ou pour le combo dîner + soirée, préparez-vous à vivre une
            expérience inoubliable en bonne compagnie. Ne manquez pas cette
            occasion de célébrer et de vous amuser dans un cadre convivial et
            festif. Commandez votre ticket dès maintenant et laissez la magie
            opérer !
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-4 z-10">
          <div className="bg-[#141516] px-6 py-12 border-[0.5px] border-[#59595A] rounded-md flex flex-col gap-4 text-gray-400">
            <div
              className="rounded-full bg-[#202122] p-2 w-12 border-[0.5px] border-[#59595A]"
              style={{ boxShadow: "inset 0 2px 4px rgba(255, 255,255, 0.1)" }}
            >
              <Image src="/Pricing/dance.png" alt="" width={40} height={40} />
            </div>
            <h3 className="text-2xl text-white">Entrée Soirée</h3>
            <span className="text-xl text-white">Prix : 5€</span>
            <p>
              Accédez à une soirée pleine de vie avec de la musique en direct,
              des spectacles et une atmosphère conviviale. C’est l’occasion
              parfaite de célébrer et de s’amuser en bonne compagnie.
            </p>
            <Link href="#form">
              <Button>Commandez votre ticket !</Button>
            </Link>
            <hr className="bg-[#848484] border-0 h-[1px]" />
            <ul className="flex flex-col gap-2">
              <li className="text-white flex items-center gap-2">
                <div
                  className="bg-[#464648] rounded-full w-5 h-5 flex items-center justify-center border border-[#818181]"
                  style={{
                    boxShadow: "inset 0 2px 4px rgba(255,255,255,0.2)",
                  }}
                >
                  <Image
                    src="/Pricing/checkIcon.png"
                    alt=""
                    width={15}
                    height={10}
                  />
                </div>
                Accès à toutes les animations
              </li>
              <li className="text-white flex items-center gap-2">
                <div
                  className="bg-[#464648] rounded-full w-5 h-5 flex items-center justify-center border border-[#818181]"
                  style={{
                    boxShadow: "inset 0 2px 4px rgba(255,255,255,0.2)",
                  }}
                >
                  <Image
                    src="/Pricing/checkIcon.png"
                    alt=""
                    width={15}
                    height={10}
                  />
                </div>
                Musique live
              </li>
              <li className="text-white flex items-center gap-2">
                <div
                  className="bg-[#464648] rounded-full w-5 h-5 flex items-center justify-center border border-[#818181]"
                  style={{
                    boxShadow: "inset 0 2px 4px rgba(255,255,255,0.2)",
                  }}
                >
                  <Image
                    src="/Pricing/checkIcon.png"
                    alt=""
                    width={15}
                    height={10}
                  />
                </div>
                Ambiance Festives
              </li>
            </ul>
          </div>
          <div className="bg-[#141516] px-6 py-12 border-[0.5px] border-[#59595A] rounded-md flex flex-col gap-4 text-gray-400">
            <div
              className="rounded-full bg-[#202122] p-2 w-12 border-[0.5px] border-[#59595A]"
              style={{ boxShadow: "inset 0 2px 4px rgba(255, 255,255, 0.1)" }}
            >
              <Image src="/Pricing/tractor.png" alt="" width={40} height={40} />
            </div>
            <h3 className="text-2xl text-white">Tracteurs + Dîner</h3>
            <span className="text-xl text-white">Prix : 15€</span>
            <p>
              Profitez d'une journée dédiée aux amateurs de tracteurs, suivie
              d'un délicieux repas convivial. Une occasion unique de partager un
              moment authentique autour d'un barbecue.
            </p>
            <Link href="#form">
              <Button>Commandez votre ticket !</Button>
            </Link>
            <hr className="bg-[#848484] border-0 h-[1px]" />
            <ul className="flex flex-col gap-2">
              <li className="text-white flex items-center gap-2">
                <div
                  className="bg-[#464648] rounded-full w-5 h-5 flex items-center justify-center border border-[#818181]"
                  style={{
                    boxShadow: "inset 0 2px 4px rgba(255,255,255,0.2)",
                  }}
                >
                  <Image
                    src="/Pricing/checkIcon.png"
                    alt=""
                    width={15}
                    height={10}
                  />
                </div>
                Accès à la concentration de tracteurs
              </li>
              <li className="text-white flex items-center gap-2">
                <div
                  className="bg-[#464648] rounded-full w-5 h-5 flex items-center justify-center border border-[#818181]"
                  style={{
                    boxShadow: "inset 0 2px 4px rgba(255,255,255,0.2)",
                  }}
                >
                  <Image
                    src="/Pricing/checkIcon.png"
                    alt=""
                    width={15}
                    height={10}
                  />
                </div>
                Repas : Barbecue 3 viandes et crudités + dessert
              </li>
              <li className="text-white flex items-center gap-2">
                <div
                  className="bg-[#464648] rounded-full w-5 h-5 flex items-center justify-center border border-[#818181]"
                  style={{
                    boxShadow: "inset 0 2px 4px rgba(255,255,255,0.2)",
                  }}
                >
                  <Image
                    src="/Pricing/checkIcon.png"
                    alt=""
                    width={15}
                    height={10}
                  />
                </div>
                20€ : par accompagnateurs
              </li>
            </ul>
          </div>
          <div className="bg-[#141516] px-6 py-12 border-[0.5px] border-[#59595A] rounded-md flex flex-col gap-4 text-gray-400">
            <div
              className="rounded-full bg-[#202122] p-2 w-12 border-[0.5px] border-[#59595A]"
              style={{ boxShadow: "inset 0 2px 4px rgba(255, 255,255, 0.1)" }}
            >
              <Image
                src="/Pricing/checklist.png"
                alt=""
                width={40}
                height={40}
              />
            </div>
            <h3 className="text-2xl text-white">Activités Générales</h3>
            <span className="text-xl text-white">Prix : 5€</span>
            <p>
              Accédez à toutes les animations de la kermesse de Chastre, avec de
              la musique en direct, des spectacles et une atmosphère festive
              pour petits et grands.
            </p>
            <Link href="#form">
              <Button>Commandez votre ticket !</Button>
            </Link>
            <hr className="bg-[#848484] border-0 h-[1px]" />
            <ul className="flex flex-col gap-2">
              fr
              <li className="text-white flex items-center gap-2">
                <div
                  className="bg-[#464648] rounded-full w-5 h-5 flex items-center justify-center border border-[#818181]"
                  style={{
                    boxShadow: "inset 0 2px 4px rgba(255,255,255,0.2)",
                  }}
                >
                  <Image
                    src="/Pricing/checkIcon.png"
                    alt=""
                    width={15}
                    height={10}
                  />
                </div>
                Accès à une activitée au choix
              </li>
              <li className="text-white flex items-center gap-2">
                <div
                  className="bg-[#464648] rounded-full w-5 h-5 flex items-center justify-center border border-[#818181]"
                  style={{
                    boxShadow: "inset 0 2px 4px rgba(255,255,255,0.2)",
                  }}
                >
                  <Image
                    src="/Pricing/checkIcon.png"
                    alt=""
                    width={15}
                    height={10}
                  />
                </div>
                Ambiance Chaleureuse
              </li>
            </ul>
          </div>
        </div>

        {/* Élément animé */}
        <motion.div
          className="absolute w-[300px] h-[150px] rounded-full blur-3xl bg-[#FF5E19] bottom-[30px] right-[0px] opacity-50"
          style={{ x: translateX, y: translateY }}
        ></motion.div>
      </LayoutSection>
    </div>
  );
};

export default Pricing;
