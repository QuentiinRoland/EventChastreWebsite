import Image from "next/image";
import React from "react";
import Subtitle from "../Subtitle/Subtitle";
import Button from "../Button/Button";

const HeroSection = () => {
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
      <div className="absolute inset-0 bg-black opacity-70"></div>
      <div className="relative z-10 py-[50px] md:py-[100px] px-4 flex justify-center items-center h-full">
        <div className="flex flex-wrap w-full items-center">
          <div className="w-full md:w-1/2 px-4">
            <div className="flex flex-col gap-2">
              <Subtitle>Vivez la Magie de la Kermesse </Subtitle>
              <h1 className="text-2xl md:text-4xl text-white font-semibold">
                Des moments inoubliables vous attendent à Chastre, réservez vos
                places dès maintenant !
              </h1>
              <p className="text-sm text-gray-300">
                Plongez dans une ambiance festive où la bonne humeur,
                l’amusement et le divertissement sont au rendez-vous. Réservez
                vos tickets en ligne pour ne rien manquer de cette journée
                inoubliable. Venez partager des moments de joie et de
                convivialité avec vos proches lors de notre kermesse annuelle !
              </p>
              <Button>Achetez vos tickets !</Button>
            </div>
          </div>
          <div className="hidden md:flex justify-between gap-8 w-full md:w-1/2 px-4 mt-8 md:mt-0">
            <div className="flex-grow">
              <Image
                src="/herosection/heroSectionPictureLeft.jpg"
                alt=""
                width={200}
                height={300}
                style={{ marginTop: "50px" }}
                className="object-cover w-full h-auto"
              />
            </div>
            <div className="flex-grow flex flex-col justify-center items-center gap-8">
              <Image
                src="/herosection/heroSectionPictureRight.jpg"
                alt=""
                width={200}
                height={300}
                className="object-cover w-full h-auto"
              />
              <div className="flex gap-4">
                <button
                  className="p-2 bg-[#141516] border border-[#59595A] rounded-sm"
                  style={{ boxShadow: "inset 0 2px 2px rgba(255,255,255,0.2)" }}
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
                  style={{ boxShadow: "inset 0 2px 2px rgba(255,255,255,0.2)" }}
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
    </div>
  );
};

export default HeroSection;
