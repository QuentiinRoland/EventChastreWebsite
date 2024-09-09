"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import MenuIcon from "@/assets/icons8-menu.svg";
import closeIcon from "../../../public/Header/closeIconWhite.png";
import LayoutSection from "../Layout/Layout";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <LayoutSection>
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
              href="#about"
            >
              A propos
            </Link>
            <Link
              className="text-gray-800 hover:text-[#FF5E19] transition"
              rel="stylesheet"
              href="#program"
            >
              Programme
            </Link>
            <Link
              className="text-gray-800 hover:text-[#FF5E19] transition"
              rel="stylesheet"
              href="#pricing"
            >
              Prix
            </Link>
          </nav>
        </div>
        <div>
          <div className="flex gap-2 text-center">
            <Link href="#form">
              <button className="hidden md:block relative py-2 px-3 rounded-lg font-medium text-sm bg-gradient-to-b from-[#FE8C5F] to-[#FF5E19] shadow-[0px_0px_12px_#F57045] text-white">
                <div className="absolute inset-0">
                  <div className="rounded-lg border border-white/20 absolute inset-0 [mask-image:linear-gradient(to_bottom,black,transparent)]"></div>
                  <div className="rounded-lg border absolute inset-0 border-white/40 [mask-image:linear-gradient(to_top,black,transparent)]"></div>
                  <div className="rounded-lg absolute inset-0 shadow-[0_0_10px_rgb(255,132,65,.7)_inset]"></div>
                </div>
                Commandez votre ticket
              </button>
              <div className="md:hidden flex flex-center relative">
                <Image
                  src={toggle ? closeIcon : MenuIcon}
                  alt="menu"
                  className="object-contain cursor-pointer z-50"
                  onClick={() => setToggle(!toggle)}
                  width={30}
                  height={30}
                />
              </div>
            </Link>
          </div>
        </div>
      </header>

      <div
        className={`fixed inset-0 bg-black bg-opacity-80 backdrop-blur-lg z-40 transform ${
          toggle ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="p-6 w-[75%] h-full bg-black shadow-lg">
          <ul className="flex flex-col space-y-6 text-white text-lg">
            <li>
              <a href="#" onClick={() => setToggle(false)}>
                A propos
              </a>
            </li>
            <li>
              <a href="#" onClick={() => setToggle(false)}>
                Programme
              </a>
            </li>
            <li>
              <a href="#" onClick={() => setToggle(false)}>
                Ticket
              </a>
            </li>
          </ul>
        </div>
      </div>
    </LayoutSection>
  );
};

export default Header;
