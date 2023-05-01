"use client";
import { usePathname } from "next/navigation";

export default function Footer({}) {
  const pathname = usePathname();

  return (
    <>
      {(pathname == "/" ||
        (pathname.startsWith("/movie/") && pathname !== "/movie") ||
        (pathname.startsWith("/tv/") && pathname !== "/tv")) && (
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
