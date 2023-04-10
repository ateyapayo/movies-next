"use client";

import Link from "next/link";
import Image from "next/image";

import NetflixLogo from "../public/logo.png";

export default function Navbar({}) {
  return (
    <div className="mt-5 mb-9 flex navbar">
      <Link className="mr-10" href="/">
        <Image className="logo" width="100" src={NetflixLogo} />
      </Link>
      <ul className="flex">
        <Link href="/">
          <li>Home</li>
        </Link>
        <Link href="/about">
          <li>About</li>
        </Link>
      </ul>
      <div>
        <input className="bg-transparent py-1" />
      </div>
    </div>
  );
}
