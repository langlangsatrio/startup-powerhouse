"use client";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Button } from "../ui/button";
import { IoMdClose } from "react-icons/io";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="sticky top-0 z-20 bg-white bg-opacity-70 shadow-sm backdrop-blur-xl backdrop-filter">
        <nav className="flex w-full flex-col justify-between px-6 py-3 shadow-sm md:px-20 md:py-5 lg:px-24 lg:py-6">
          {/**Div dibawah adalah pemisah antara content utama dengan phone menu Modelnya flex-col supaya phone menu bisa turun kebawah
           * Div content mewakili konten navbar
           * Div phone menu mewakili menu handphone
           */}
          <div className="content flex items-center justify-between">
            <div className="logo flex cursor-pointer flex-col">
              <h1 className="logo-text text-xl font-bold">
                <Link href="/">Startup</Link>
              </h1>
              <h1 className="logo-text text-xl font-bold">
                <Link href="/">Powerhouse</Link>
              </h1>
            </div>
            <div className="menu hidden md:gap-3 lg:flex">
              <ul className="flex gap-10">
                <li>
                  <Link href="/#service">Service</Link>
                </li>
                <li>
                  <Link href="/#pricing">Pricing</Link>
                </li>
                <li>
                  <Link href="/page/about-us/">About</Link>
                </li>
                <li>
                  <Link href="/#contact">Contact</Link>
                </li>
              </ul>
            </div>
            <div className="cta hidden lg:flex">
              <Button>Book a call now</Button>
            </div>

            <div className="hamburger-wrapper flex flex-col border-green-600 lg:hidden">
              <div className="hamburger inline-flex lg:hidden">
                <Button onClick={toggleNavbar}>
                  {!isOpen ? <GiHamburgerMenu /> : <IoMdClose />}
                </Button>
              </div>
            </div>
          </div>
          {/**Div dibawah adalah menu untuk handphone */}
          <div className="phone-menu">
            {isOpen && (
              <div className="menuphone my-3 flex flex-col py-2 lg:hidden">
                <li className="my-2 list-none">
                  <Link href="/#service" className="font-semibold">
                    Service
                  </Link>
                </li>
                <li className="my-2 list-none">
                  <Link href="/#pricing" className="font-semibold">
                    Pricing
                  </Link>
                </li>
                <li className="my-2 list-none">
                  <Link href="/page/about-us/" className="font-semibold">
                    About
                  </Link>
                </li>
                <li className="my-2 list-none">
                  <Link href="/#contact" className="font-semibold">
                    Contact
                  </Link>
                </li>
              </div>
            )}
          </div>
        </nav>
      </div>
    </>
  );
}
