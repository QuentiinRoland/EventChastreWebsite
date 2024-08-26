import Image from "next/image";
import React from "react";

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
      <div className="relative z-10 py-[100px] px-4 flex justify-center items-center h-full">
        <div className="flex flex-wrap w-full">
          <div className="w-full md:w-1/2 px-4">
            <div>
              <h2 className="text-sm md:text-xs font-medium text-gray-300">
                Vivez la Magie de la Kermesse{" "}
              </h2>
              <h1 className="text-2xl md:text-4xl text-white font-semibold">
                Des moments inoubliables vous attendent à Chastre, réservez vos
                places dès maintenant !
              </h1>
              <p className="text-sm text-gray-300 mt-4">
                Plongez dans une ambiance festive où la bonne humeur,
                l’amusement et le divertissement sont au rendez-vous. Réservez
                vos tickets en ligne pour ne rien manquer de cette journée
                inoubliable. Venez partager des moments de joie et de
                convivialité avec vos proches lors de notre kermesse annuelle !
              </p>
              <button className="mt-5 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                Achetez vos tickets !
              </button>
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
            <div className="flex-grow">
              <Image
                src="/herosection/heroSectionPictureRight.jpg"
                alt=""
                width={200}
                height={300}
                className="object-cover w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
