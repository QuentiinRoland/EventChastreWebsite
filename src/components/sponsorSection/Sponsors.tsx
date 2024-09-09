import React from "react";
import Image from "next/image";
import LayoutSection from "../Layout/Layout";

const Sponsors = () => {
  return (
    <LayoutSection>
      <div className="w-full pt-[50px]">
        <div className="flex flex-col md:flex-row gap-8 md:items-center">
          <h2 className="text-black flex-1/3 text-lg font-medium">
            Ils nous font confiance :
          </h2>
          <div className="flex flex-col md:flex-row md:flex-1 gap-8 justify-between items-center">
            <div className="md:w-1/5">
              <Image
                src="/Sponsors/highSecurityLogo.png"
                alt=""
                width={70}
                height={50}
              />
            </div>
            <div className="md:w-1/5">
              <Image
                src="/Sponsors/logoPanda.svg"
                alt=""
                width={70}
                height={50}
              />
            </div>
            <div className="md:w-1/5">
              <Image
                src="/Sponsors/payconiq.jpg"
                alt=""
                width={80}
                height={50}
              />
            </div>
            <div className="md:w-1/5">
              <Image
                src="/Sponsors/TWquizz.jpg"
                alt=""
                width={80}
                height={50}
              />
            </div>
            <div className="md:w-1/5">
              <Image src="/Sponsors/o.c.s.png" alt="" width={80} height={50} />
            </div>
          </div>
        </div>
      </div>
    </LayoutSection>
  );
};

export default Sponsors;
