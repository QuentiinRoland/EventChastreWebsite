import React from "react";
import Link from "next/link";
import Image from "next/image";
import MenuIcon from "@/assets/icons8-menu-white.svg";
const Header = () => {
  return (
    <header className="flex justify-between py-4 mx-4 items-center">
      <div>
        <span className="border h-10 w-10 rounded-lg p-2 border-white/15 ">
          Kermesse Chastre
        </span>
      </div>
      <div className="hidden md:block">
        <nav className="flex gap-8 text-sm">
          <Link
            className="text-white/80 hover:text-white transition"
            rel="stylesheet"
            href=""
          >
            About
          </Link>
          <Link
            className="text-white/80 hover:text-white transition"
            rel="stylesheet"
            href=""
          >
            Ticket
          </Link>
          <Link
            className="text-white/80 hover:text-white transition"
            rel="stylesheet"
            href=""
          >
            Test
          </Link>
        </nav>
      </div>
      <div>
        <div className="flex gap-2 text-center">
          <button className="relative py-2 px-3 rounded-lg font-medium text-sm bg-gradient-to-b from-[#190d2e] to-[#F57045] shadow-[0px_0px_12px_#F57045]">
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
  );
};

export default Header;
