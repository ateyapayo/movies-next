"use client";

import Link from "next/link";

export default function Custom404() {
  return (
    <div className="not-exist">
      <div className="text-404">
        <h2>Lost your way?</h2>
        <h3>
          Sorry we can't find that page. You'll find lots to explore on the home
          page.
        </h3>

        <Link className="link-go-home" href="/">
          <button>NextFlix Home</button>
        </Link>

        <div className="bottom-404">
          <span className="bottom-from">FROM</span>
          <span className="bottom-movie">INTO THE WILD</span>
        </div>
      </div>
    </div>
  );
}
