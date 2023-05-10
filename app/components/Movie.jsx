"use client";

import Link from "next/link";
import Image from "next/image";
import PopularIcon from "./Trend";
import { useState } from "react";
import Loader from "./Loader";

export default function Movie({
  title,
  id,
  poster_path,
  media_type,
  popularity,
}) {
  const [loading, setLoading] = useState(true);

  const handleImageLoad = () => {
    setLoading(false);
  };

  const imagePath = "https://image.tmdb.org/t/p/original/";

  return (
    <>
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
            <div className="div-card lg-screen-card">
              {loading && (
                <div className="loader-div">
                  <Loader customSize={24} />
                </div>
              )}
              <Image
                className="img-card"
                width={800}
                height={800}
                src={imagePath + poster_path}
                alt={title}
                onLoad={handleImageLoad}
              />
            </div>

            <div className="sm-screen-card">
              <Image
                width={800}
                height={800}
                src={imagePath + poster_path}
                alt={title}
                onLoad={handleImageLoad}
              />
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}
