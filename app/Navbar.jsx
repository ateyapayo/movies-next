"use client";

import Link from "next/link";
import Image from "next/image";

import NetflixLogo from "../public/logo.png";

export default function Navbar({}) {
  return (
    <>
      <div className="mt-5 mb-10 flex navbar py-1">
        <Link className="mr-10" href="/">
          <Image className="logo" width="100" src={NetflixLogo} />
        </Link>
      </div>
      {/* <div className={pathname !== "/" ? "" : "hidden"}>
        <h1>Back to Home</h1>
      </div> */}
    </>
  );
}
