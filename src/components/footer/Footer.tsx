import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Layout } from "@/layout/layout";
const Footer = () => {
  return (
    <div className="bg-black text-gray-300 p-8 gap-6 ">
      <Layout className="flex-col md:flex md:flex-row">
        <div className="text-sm flex flex-col flex-1 gap-y-4 mb-4 md:w-[30%]">
          <Image src="" alt="" width={40} height={40} />
          <p>
            Diversifiez vos canaux d'acquisition Multipliez vos sources de
            prospection Développez votre business avec agilité
          </p>
          <div className="flex gap-4">
            <Link
              href=""
              passHref
              className="p-2 bg-[#141516] border border-[#59595A] rounded-full"
              style={{ boxShadow: "inset 0 2px 4px rgba(255,255,255,0.2)" }}
            >
              <Image
                src="/Footer/facebookIcon.png"
                alt=""
                width={20}
                height={20}
              />
            </Link>
            <Link
              href=""
              passHref
              className="p-2 bg-[#141516] border border-[#59595A] rounded-full"
              style={{ boxShadow: "inset 0 2px 4px rgba(255,255,255,0.2)" }}
            >
              <Image
                src="/Footer/instagramIcon.png"
                alt=""
                width={20}
                height={20}
              />
            </Link>
          </div>
        </div>
        <div className="flex flex-col flex-1 gap-y-2 mb-4 md:w-[30%]">
          <h3 className="text-xl text-[#FE8C5F]">Lien intéressant</h3>
          <Link href="">About</Link>
          <Link href="">Ticket</Link>
          <Link href="">Test</Link>
        </div>
        <div className="flex flex-col flex-1 gap-y-2 md:w-[40%]">
          <h3 className="text-xl text-[#FE8C5F]">Contact</h3>
          <p className="text-sm md:text-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. A alias
            dolorum necessitatibus fuga consectetur ab excepturi natus eius
            optio quo.
          </p>
        </div>
      </Layout>
    </div>
  );
};

export default Footer;
