"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Footer({}) {
  return (
    <>
      <footer>
        <p>A React & NextJS 13 PWA - developed by Andrea Piano.</p> <br />
        <p className="ending">
          I don't own the rights to Netflix. <br />I just love movies,
          programming and programming about movies.
        </p>
      </footer>
    </>
  );
}
