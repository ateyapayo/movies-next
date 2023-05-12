"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import NetflixLogo from "../../public/logo.png";
import { useSearchContext } from "../../context/SearchContext";

import Search from "./Search";
import { useRouter } from "next/navigation";

export default function Navbar({}) {
  const context = useSearchContext();
  const router = useRouter();
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
          pathname == "/" ? "home-navbar" : ""
        }`}
      >
        <div className="container navbar-container">
          <div
            className="link-logo mr-10 pointer"
            onClick={
              pathname.startsWith("/tv") || pathname.startsWith("/movie")
                ? () => router.back()
                : scrollToTop
            }
          >
            <Image
              onClick={reset}
              className="logo"
              width="100"
              src={NetflixLogo}
            />
          </div>
          {pathname == "/" && <Search />}
        </div>
      </div>
    </>
  );
}
