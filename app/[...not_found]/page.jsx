"use client";

import Link from "next/link";

import { useSearchContext } from "@/context/SearchContext";

export default function Custom404() {
  const context = useSearchContext();

  context?.custom404?.setErrorPage(true);

  return (
    <div className="not-exist">
      <div className="content-404">
        <div className="top-404">
          <h2>Lost your way?</h2>
          <h3>
            Sorry we can't find that page. You'll find lots to explore on the
            home page.
          </h3>

          <Link className="link-go-home" href="/">
            <button>NextFlix Home</button>
          </Link>
        </div>

        <div className="bottom-404">
          <span className="from-404">FROM</span>
          <span className="title-404">INTO THE WILD</span>
        </div>
      </div>
    </div>
  );
}
