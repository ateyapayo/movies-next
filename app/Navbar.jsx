"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

import NetflixLogo from "../public/logo.png";

export default function Navbar({}) {
  const pathname = usePathname();
  return (
    <>
      <div className="mt-5 mb-10 flex navbar py-1">
        <Link className="mr-10" href="/">
          <Image className="logo" width="100" src={NetflixLogo} />
        </Link>

        <input className={pathname == "/" ? "bg-transparent" : "hidden"} />
      </div>
      {/* <div className={pathname !== "/" ? "" : "hidden"}>
        <h1>Back to Home</h1>
      </div> */}
    </>
  );
}
