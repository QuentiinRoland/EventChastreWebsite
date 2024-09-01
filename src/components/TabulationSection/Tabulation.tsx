import React, { useEffect, useState } from "react";
import Subtitle from "../Subtitle/Subtitle";

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
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`active p-2 ${
                    activeTab === index
                      ? "bg-[rgba(22,22,22,0.5)] text-white"
                      : ""
                  }`}
                >
                  {label}
                </button>
                {activeTab == index && <hr className="active" />}
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
