import Link from "next/link";
import Image from "next/image";

export default function Movie({
  title,
  id,
  poster_path,
  release_date,
  media_type,
}) {
  const imagePath = "https://image.tmdb.org/t/p/original/";

  return (
    <div>
      <p className="capitalize">{media_type}</p>
      <h1>{title}</h1>
      <h2>{release_date}</h2>
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
