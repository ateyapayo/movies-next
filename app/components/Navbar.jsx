"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import NetflixLogo from "../../public/logo.png";
import { useSearchContext } from "../../context/SearchContext";

import Search from "./Search";

export default function Navbar({}) {
  const context = useSearchContext();
  const pathname = usePathname();

  const reset = context?.filters?.clear;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };
  return (
    <>
      <div
        className={`flex navbar navbar-scrolled ${
          pathname == "/" ? "home-navbar" : "detail-navbar"
        }`}
      >
        <div className="container navbar-container">
          <Link className="link-logo mr-10" href="/" onClick={scrollToTop}>
            <Image
              onClick={reset}
              className="logo"
              width="100"
              src={NetflixLogo}
            />
          </Link>
          {pathname == "/" && <Search />}
        </div>
      </div>
    </>
  );
}
