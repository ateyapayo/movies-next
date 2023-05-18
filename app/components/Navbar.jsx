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

  const reset = context?.sharedFilters?.filters?.clear;
  const introContext = context?.paging?.introNetflix?.getter;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  return (
    <>
      {!introContext && (
        <>
          {" "}
          {context?.paging?.custom404?.errorPage ? (
            <div className="flex navbar navbar-scrolled">
              <div className="container navbar-container">
                <div className="link-logo mr-10 cursor-pointer">
                  <Link href="/">
                    <Image
                      onClick={reset}
                      className="logo"
                      width="100"
                      src={NetflixLogo}
                    />
                  </Link>
                </div>
              </div>
            </div>
          ) : (
            <div
              className={`flex navbar navbar-scrolled ${
                pathname == "/" ? "home-navbar" : ""
              }`}
            >
              <div className="container navbar-container">
                <div
                  className="link-logo logo-desktop mr-10 cursor-pointer"
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

                {pathname == "/" ? (
                  <div
                    className="link-logo next-link-mobile mr-10 cursor-pointer"
                    onClick={scrollToTop}
                  >
                    <Image
                      onClick={reset}
                      className="logo"
                      width="100"
                      src={NetflixLogo}
                    />
                  </div>
                ) : (
                  <Link className="logo-mobile" href="/">
                    <Image
                      onClick={reset}
                      className="logo"
                      width="100"
                      src={NetflixLogo}
                    />
                  </Link>
                )}

                {pathname == "/" && <Search />}
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
}
