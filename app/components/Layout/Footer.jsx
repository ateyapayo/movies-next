"use client";

import { useSearchContext } from "@/context/SearchContext";
import { usePathname } from "next/navigation";

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
                  A React & NextJS 13 Web App - developed by Andrea Piano
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
