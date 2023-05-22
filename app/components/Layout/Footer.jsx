"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { useSearchContext } from "@/context/SearchContext";

export default function Footer({}) {
  const context = useSearchContext();

  const pathname = usePathname();

  return (
    <>
      {pathname !== "/" && (
        <>
          {" "}
          {!context?.paging?.custom404?.errorPage && (
            <footer>
              <div className="container">
                <p className="text-white text-center">
                  A React & NextJS 13 Web App - developed by{" "}
                  <Link
                    className="link-portfolio"
                    href="https://www.andreapiano.dev/"
                    target="_BLANK"
                  >
                    <b>Andrea Piano</b>
                  </Link>
                </p>{" "}
                <br />
                <p className="text-white text-center ending">
                  I don't own the rights to Netflix. <br />I just love movies,
                  programming and programming about movies.
                </p>
              </div>
            </footer>
          )}
        </>
      )}
    </>
  );
}
