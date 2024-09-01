import React from "react";
import Image from "next/image";
import { Layout } from "@/layout/layout";

const Sponsors = () => {
  return (
    <Layout>
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
                src="/Sponsors/highSecurityLogo.png"
                alt=""
                width={70}
                height={50}
              />
            </div>
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
                src="/Sponsors/highSecurityLogo.png"
                alt=""
                width={70}
                height={50}
              />
            </div>
            <div className="md:w-1/5">
              <Image
                src="/Sponsors/highSecurityLogo.png"
                alt=""
                width={70}
                height={50}
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Sponsors;
