"use client";

import Link from "next/link";
import Image from "next/image";
import StarIcon from "@mui/icons-material/Star";

export default function Movie({
  title,
  id,
  poster_path,
  media_type,
  vote_average,
}) {
  const imagePath = "https://image.tmdb.org/t/p/original/";

  return (
    <div>
      <p>{media_type === "tv" ? "TV Show" : "Movie"}</p>
      <h1>{title}</h1>
      <div className="flex mb-1">
        <StarIcon className="star-card mr-1 " />
        <h2>{vote_average}</h2>
      </div>

      <Link href={media_type === "movie" ? `/movie/${id}` : `/tv/${id}`}>
        <Image
          width={800}
          height={800}
          src={imagePath + poster_path}
          alt={title}
        />
      </Link>
    </div>
  );
}
