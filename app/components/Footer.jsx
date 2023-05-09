"use client";

import { useSearchContext } from "@/context/SearchContext";

export default function Footer({}) {
  const context = useSearchContext();

  return (
    <>
      {!context?.custom404?.errorPage && (
        <footer>
          <div className="container">
            <p>A React & NextJS 13 PWA - developed by Andrea Piano.</p> <br />
            <p className="ending">
              I don't own the rights to Netflix. <br />I just love movies,
              programming and programming about movies.
            </p>
          </div>
        </footer>
      )}
    </>
  );
}
