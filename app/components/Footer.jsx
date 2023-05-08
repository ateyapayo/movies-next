"use client";
import { usePathname } from "next/navigation";

export default function Footer({}) {
  const pathname = usePathname();

  const regexNumbers = /^\d+$/;

  return (
    <>
      {(pathname == "/" || regexNumbers.test(pathname)) && (
        <footer>
          <p>A React & NextJS 13 PWA - developed by Andrea Piano.</p> <br />
          <p className="ending">
            I don't own the rights to Netflix. <br />I just love movies,
            programming and programming about movies.
          </p>
        </footer>
      )}
    </>
  );
}
