import React, { useEffect, useState } from "react";
import Subtitle from "../Subtitle/Subtitle";
import { motion } from "framer-motion";

type TabProps = {
  labels: string[];
  children: React.ReactNode[];
};

const Tabulation = ({ labels, children }: TabProps) => {
  const [activeTab, setActiveTab] = useState<number>(0);
  return (
    <div className="flex flex-col md:flex-row gap-12">
      <div className="w-1/3 flex flex-col justify-center gap-4">
        <Subtitle>Programme</Subtitle>
        <h2 className="text-2xl text-white">
          Kermesses de Chastre 2024 : Un Week-End de Fêtes et de Traditions
        </h2>
        <p>
          Les Kermesses de Chastre 2024 promettent un week-end riche en
          activités et en bonne humeur pour toute la communauté. Rejoignez-nous
          pour célébrer ensemble dans une atmosphère chaleureuse et accueillante
          !
        </p>
      </div>

      <div className="hidden md:block w-px bg-gray-400"></div>

      <div className="w-2/3">
        <div className="flex flex-col gap-2">
          <div className="flex flex-col md:flex-row gap-4 text-lg">
            {labels.map((label, index) => (
              <div>
                <motion.button
                  onClick={() => setActiveTab(index)}
                  className="active p-2"
                  animate={{
                    backgroundColor:
                      activeTab === index
                        ? "rgba(33,33,33,0.6)"
                        : "transparent",
                    color:
                      activeTab === index ? "#fff" : "rgba(255,255,255,0.5)",
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  {label}
                </motion.button>
                {activeTab == index && (
                  <motion.div
                    layoutId="underline"
                    className="h-[0.5px] bg-white"
                  />
                )}
              </div>
            ))}
          </div>
          <div>
            {children.map((child, index) => (
              <div
                key={index}
                style={{ display: activeTab === index ? "block" : "none" }}
              >
                {child}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tabulation;
