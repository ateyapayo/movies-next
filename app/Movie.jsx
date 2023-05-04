"use client";

import Link from "next/link";
import Image from "next/image";
import PopularIcon from "./Trend";
import { useEffect, useState } from "react";

export default function Movie({
  title,
  id,
  poster_path,
  media_type,
  popularity,
  filteredResults,
}) {
  const [zoom, setZoom] = useState(false);

  const imagePath = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    if (filteredResults?.length > 3) {
      setZoom(true);
    } else {
      setZoom(false);
    }
  }, [filteredResults]);

  return (
    <div>
      <p className="inline-block my-2 py-1 px-2 rounded-lg genre">
        {media_type === "tv" ? "TV Show" : "Movie"}
      </p>
      <Link href={media_type === "movie" ? `/movie/${id}` : `/tv/${id}`}>
        <h1>{title}</h1>
      </Link>
      <div className="flex mb-1 rating">
        <span title="Popularity score">
          <PopularIcon className="star-card mr-5 " />
        </span>
        <h2 className="vote">{Math.round(popularity)}</h2>
      </div>

      <Link href={media_type === "movie" ? `/movie/${id}` : `/tv/${id}`}>
        <div>
          <div className={`${zoom ? "div-card" : ""} lg-screen-card`}>
            <Image
              className={`${zoom ? "img-card" : ""}`}
              width={800}
              height={800}
              src={imagePath + poster_path}
              alt={title}
            />
          </div>

          <div className="sm-screen-card">
            <Image
              width={800}
              height={800}
              src={imagePath + poster_path}
              alt={title}
            />
          </div>
        </div>
      </Link>
    </div>
  );
}
