"use client";

import Link from "next/link";

import { useSearchContext } from "@/context/SearchContext";
import { useEffect } from "react";

export default function Custom404() {
  const context = useSearchContext();

  const introContext = context?.paging?.introNetflix?.setter;

  context?.paging?.custom404?.setErrorPage(true);

  useEffect(() => {
    introContext(false);
  });

  return (
    <div className="h-screen bg-no-repeat bg-cover bg-center not-exist">
      <div className="mx-auto relative h-screen flex flex-col justify-between z-10 content-404">
        <div className="top-404">
          <h2 className="text-white text-center">Lost your way?</h2>
          <h3 className="mx-auto text-center text-white">
            Sorry we can't find that page. You'll find lots to explore on the
            home page.
          </h3>

          <Link className="mt-8 flex justify-center" href="/browse">
            <button className="bg-white text-black">NextFlix Home</button>
          </Link>
        </div>

        <div className="flex justify-end bottom-404 ">
          <span className="from-404">FROM</span>
          <span className="title-404">INTO THE WILD</span>
        </div>
      </div>
    </div>
  );
}
