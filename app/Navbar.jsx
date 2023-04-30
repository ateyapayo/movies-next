"use client";

import Link from "next/link";
import Image from "next/image";

import NetflixLogo from "../public/logo.png";

export default function Navbar({}) {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };
  return (
    <>
      <div className="flex navbar py-1 navbar-scrolled">
        <div className="container navbar-container">
          <Link className="link-logo mr-10" href="/" onClick={scrollToTop}>
            <Image className="logo" width="100" src={NetflixLogo} />
          </Link>
        </div>
      </div>
    </>
  );
}
