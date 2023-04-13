"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import NetflixLogo from "../public/logo.png";

export default function Navbar({}) {
  const pathname = usePathname();
  return (
    <div className="mt-5 mb-9 flex navbar">
      <Link className="mr-10" href="/">
        <Image className="logo" width="100" src={NetflixLogo} />
      </Link>
      <ul className="flex">
        <Link href="/">
          <li className={pathname == "/" ? "active" : ""}>Home</li>
        </Link>
        <Link href="/about">
          <li className={pathname == "/about" ? "active" : ""}>About</li>
        </Link>
      </ul>
      <div className="search-container">
        <input className={pathname == "/" ? "bg-transparent py-1" : "hidden"} />
      </div>
    </div>
  );
}
