import React from "react";
import Link from "next/link";
import Image from "next/image";
import MenuIcon from "@/assets/icons8-menu-white.svg";
import { Layout } from "@/layout/layout";
const Header = () => {
  return (
    <Layout>
      <header className="flex justify-between py-4 items-center">
        <div>
          <span className="border h-10 w-10 rounded-lg p-2 border-white/30 text-black ">
            Kermesse Chastre
          </span>
        </div>
        <div className="hidden md:block">
          <nav className="flex gap-8 text-sm">
            <Link
              className="text-gray-800 hover:text-[#FF5E19] transition"
              rel="stylesheet"
              href=""
            >
              A propos
            </Link>
            <Link
              className="text-gray-800 hover:text-[#FF5E19] transition"
              rel="stylesheet"
              href=""
            >
              Programme
            </Link>
            <Link
              className="text-gray-800 hover:text-[#FF5E19] transition"
              rel="stylesheet"
              href=""
            >
              Ticket
            </Link>
          </nav>
        </div>
        <div>
          <div className="flex gap-2 text-center">
            <button className="relative py-2 px-3 rounded-lg font-medium text-sm bg-gradient-to-b from-[#FE8C5F] to-[#FF5E19] shadow-[0px_0px_12px_#F57045] text-white">
              <div className="absolute inset-0">
                <div className="rounded-lg border border-white/20 absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]"></div>
                <div className="rounded-lg border absolute inset-0 border-white/40 [mask-image:linear-gradient(to_top,black,transparent)]"></div>
                <div className="rounded-lg absolute inset-0 shadow-[0_0_10px_rgb(255,132,65,.7)_inset]"></div>
              </div>
              Contact
            </button>
            <Image src={MenuIcon} alt="" className="md:hidden" />
          </div>
        </div>
      </header>
    </Layout>
  );
};

export default Header;
