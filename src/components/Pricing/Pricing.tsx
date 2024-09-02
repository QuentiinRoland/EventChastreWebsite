"use client";

import React from "react";
import Image from "next/image";
import Button from "../Button/Button";
import { Layout } from "@/layout/layout";
import { motion, useMotionValue, useTransform } from "framer-motion";

const Pricing = () => {
  // Motion value pour suivre la position de la souris
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Transformation de la position de la souris en translation de l'élément
  const translateX = useTransform(mouseX, [0, 1], ["-40%", "40%"]);
  const translateY = useTransform(mouseY, [0, 1], ["-40%", "40%"]);

  // Fonction pour mettre à jour la position de la souris
  const handleMouseMove = (event: any) => {
    const { clientX, clientY, currentTarget } = event;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();

    // Normalisation de la position de la souris
    mouseX.set((clientX - left) / width);
    mouseY.set((clientY - top) / height);
  };

  return (
    <div
      className="flex flex-col py-[50px] md:py-[100px] gap-4 bg-black text-white relative overflow-hidden"
      onMouseMove={handleMouseMove} // Suivre la position de la souris
    >
      <Layout>
        <div className="flex flex-col justify-center items-center gap-2">
          <h2 className="text-2xl">Ticket</h2>
          <p className="text-center max-w-[600px]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt
            minima excepturi sint expedita et quidem saepe eligendi dolor
            accusantium in.
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
            <Button>Commandez votre ticket !</Button>
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
              <Image src="/Pricing/food.png" alt="" width={40} height={40} />
            </div>
            <h3 className="text-2xl text-white">Dîner + Soirée</h3>
            <span className="text-xl text-white">Prix : 15€</span>
            <p>
              Profitez d'une expérience complète : un délicieux dîner suivi de
              notre soirée festive. Un combo parfait pour une soirée sans souci,
              où tout est prévu pour vous divertir.
            </p>
            <Button>Commandez votre ticket !</Button>
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
                Un repas complet
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
                Accès à la soirée festive
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
      </Layout>
    </div>
  );
};

export default Pricing;
