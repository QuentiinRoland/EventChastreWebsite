"use client";

import Image from "next/image";
import React from "react";
import { useState } from "react";
import Subtitle from "../Subtitle/Subtitle";
import Button from "../Button/Button";
import { Layout } from "../../layout/Layout";
import { motion } from "framer-motion";
import Brush from "../../../public/herosection/brushwawe-gradient.png";
import Link from "next/link";

const HeroSection = () => {
  const [isFirstImageOnTop, setIsFirstImageOnTop] = useState(true);

  const handleSwitchImage = () => {
    setIsFirstImageOnTop(!isFirstImageOnTop);
  };

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100%", // S'assurer que la section couvre toute la hauteur de l'écran
        margin: "0 auto",
      }}
    >
      <Image
        src="/herosection/backgroundHeroSection.jpg"
        alt="Background"
        layout="fill"
        objectFit="cover" // Couvre tout le conteneur sans déformation
        objectPosition="center" // Centre l'image
        priority={true}
      />
      <Layout>
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <div className="relative z-10 py-[50px] md:py-[100px] flex justify-center items-center h-full">
          <div className="flex w-full items-center">
            <div className="w-full md:w-1/2 px-4">
              <div className="flex flex-col gap-2">
                <Subtitle>Vivez la Magie de la Kermesse </Subtitle>
                <h1 className="text-2xl md:text-4xl text-white font-semibold relative max-w-[500px]">
                  Des moments{" "}
                  <span className="bg-gradient-to-r from-[#fe8c5f] to-[#ff5e19] text-transparent bg-clip-text">
                    inoubliables
                  </span>{" "}
                  vous attendent à{" "}
                  <span className="relative">
                    Chastre{" "}
                    <Image
                      src={Brush}
                      alt=""
                      width={400}
                      height={100}
                      className="absolute top-full left-0 w-full -mt-2 md:-mt-4 "
                    />
                  </span>
                  , réservez vos places dès maintenant !
                </h1>
                <p className="text-sm text-gray-300 max-w-[500px]">
                  Plongez dans une ambiance festive où la bonne humeur,
                  l’amusement et le divertissement sont au rendez-vous. Réservez
                  vos tickets en ligne pour ne rien manquer de cette journée
                  inoubliable. Venez partager des moments de joie et de
                  convivialité avec vos proches lors de notre kermesse annuelle
                  !
                </p>
                <Link href="#pricing">
                  <Button className="max-w-[500px]">
                    Achetez vos tickets !
                  </Button>
                </Link>
              </div>
            </div>
            <div className="hidden md:flex justify-evenly gap-8 w-full md:w-1/2 mt-8 md:mt-0">
              <div className="flex-grow relative">
                <Image
                  src="/herosection/disco-dj.jpg"
                  alt=""
                  width={200}
                  height={300}
                  style={{ marginTop: "50px" }}
                  className="object-cover w-full h-auto rounded-md relative"
                />
                <div className="w-[250px] h-[500px] border border-orange-300 absolute top-8 left-16 -z-10"></div>
              </div>
              <div className=" relative flex-grow flex flex-col justify-center items-center gap-8">
                <Image
                  src="/herosection/sparkles.jpg"
                  alt=""
                  width={200}
                  height={300}
                  className="object-cover w-full h-auto rounded-md relative"
                />
                <div className="w-[250px] h-[500px] border border-orange-300 absolute bottom-16 left-14 -z-10"></div>

                <div className="flex gap-4">
                  <button
                    className="p-2 bg-[#141516] border border-[#59595A] rounded-sm"
                    style={{
                      boxShadow: "inset 0 2px 2px rgba(255,255,255,0.2)",
                    }}
                  >
                    {" "}
                    <Image
                      src="/heroSection/arrowIconRight.png"
                      alt=""
                      width={30}
                      height={30}
                    />
                  </button>
                  <button
                    className="p-2 bg-[#141516] border border-[#59595A] rounded-sm"
                    style={{
                      boxShadow: "inset 0 2px 2px rgba(255,255,255,0.2)",
                    }}
                  >
                    <Image
                      src="/heroSection/arrowIconLeft.png"
                      alt=""
                      width={30}
                      height={30}
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default HeroSection;
