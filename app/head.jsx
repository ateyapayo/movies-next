"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Head() {
  const pathname = usePathname();

  const [title, setTitle] = useState("");

  useEffect(() => {
    if (pathname == "/browse") {
      setTitle("Home - NextFlix UK");
    } else if (pathname == "/about") {
      setTitle("About");
    } else if (pathname.startsWith("/tv")) {
      setTitle("TV Show Detail");
    } else if (pathname.startsWith("/movie")) {
      setTitle("Movie Detail");
    } else setTitle("NextFlix UK");
  }, [pathname]);
  return (
    <>
      <title>{title}</title>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
      ></meta>
      <meta
        name="description"
        content="NextFlix UK - A React & NextJS 13 Web App, developed by Andrea Piano"
      />
      <link rel="icon" href="/favicon.png" />
    </>
  );
}
