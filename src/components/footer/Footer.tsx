import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Layout } from "../../layout/Layout";
import LogoChastre from "../../../public/Footer/Logochastre.png";
import IconLocation from "../../../public/Footer/IconLocation.png";
import IconPhone from "../../../public/Footer/call.png";
import IconMail from "../../../public/Footer/mail.png";

const Footer = () => {
  return (
    <div className="bg-black text-gray-300 p-8 gap-6 ">
      <Layout className="flex-col md:flex md:flex-row">
        <div className="text-sm flex flex-col flex-1 gap-y-4 mb-4 md:w-[30%]">
          <Image src={LogoChastre} alt="" width={70} height={70} />
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
          <ul className="flex flex-col gap-2 text-sm md:text-md">
            <li className="flex items-center gap-2">
              <Image src={IconLocation} alt="" width={30} height={30} />
              Rue des Quinzes Bonniers 105 à 1450 Chastre
            </li>
            <li className="flex items-center gap-2">
              <Image src={IconPhone} alt="" width={30} height={30} />
              0477/20.58.98
            </li>
            <li className="flex items-center gap-2">
              <Image src={IconMail} alt="" width={30} height={30} />
              mail@chastre.com
            </li>
          </ul>
        </div>
      </Layout>
    </div>
  );
};

export default Footer;
