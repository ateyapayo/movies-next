"use client";

import { useRouter } from "next/navigation";

import StarFull from "./StarFull";
import StarEmpty from "./StarEmpty";

import ImageDetail from "./ImageDetail";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useSearchContext } from "@/context/SearchContext";

export default function DetailModule({ res }) {
  const router = useRouter();
  const context = useSearchContext();

  const searchedResult = context?.keyword?.getter;
  console.log("THIS IS RES ---> ", res);
  const imagePath = "https://image.tmdb.org/t/p/original";

  const vote = Math.round(res?.vote_average / 2);

  const fullStars = [];

  for (let i = 0; i < vote; i++) {
    fullStars.push(<StarFull className="rating" key={i} />);
  }

  const emptyStars = [];

  for (let i = 0; i < 5 - vote; i++) {
    emptyStars.push(<StarEmpty className="rating" key={i} />);
  }

  return (
    <div className="mt-8 container">
      <div className="container-detail">
        {searchedResult && (
          <div className="div-back pointer" onClick={() => router.back()}>
            <ArrowBackIcon className="arrow-back" />
            <span className="text-back">Go back to the search results</span>
          </div>
        )}

        <h2 className="text-4xl">{res?.title || res?.name}</h2>

        <h1 className="text-lg">
          {res?.last_episode_to_air ? "TV Show" : "Movie"}
        </h1>

        <h1 className="text-lg">
          {res?.release_date && new Date(res?.release_date).getFullYear()}
          {res?.first_air_date &&
            new Date(res?.first_air_date).getFullYear() +
              " - " +
              (res?.status.toLowerCase() != "returning series"
                ? new Date(res?.last_air_date).getFullYear()
                : "Present")}
        </h1>
        <h2>
          {res?.runtime
            ? `Runtime: ${res?.runtime}`
            : `Episodes length: ${res?.last_episode_to_air?.runtime}`}{" "}
          minutes
        </h2>
        <div className="flex justify-between badges mt-2">
          <div className="status">
            <h2
              className={`inline-block py-2 px-4 rounded-lg text-sm ${
                res?.status === "Returning Series" && "bg-green-600"
              } ${
                (res?.status === "Ended" || res?.status === "Released") &&
                "bg-blue-700"
              } ${res?.status === "Canceled" && "bg-red-700"}`}
            >
              {res?.status}
            </h2>
          </div>
          <div className="popularity flex">
            <div className="flex stars">
              {fullStars}
              {emptyStars}
            </div>

            <h2 className="rating-text pt-3">
              {res?.vote_count?.toLocaleString()} ratings with an average of{" "}
              {(res?.vote_average / 2).toFixed(2)} out of 5 stars.
            </h2>
          </div>
        </div>
        <ImageDetail
          imagePath={imagePath}
          backdropPath={res?.backdrop_path}
          title={res?.title}
        />
      </div>
      <div>
        <div className="flex mb-7">
          <h1 className="text-md genre-line mr-1">
            <em>
              <b>Genre:</b>
            </em>
          </h1>
          {res?.genres?.map((item) => (
            <h1 className="text-md single-genre genre-line">
              <em>{item?.name}</em>
            </h1>
          ))}
        </div>
        <h2 className="text-2xl mb-2 title-desc">Description:</h2>
        <p className="text-lg desc">{res?.overview}</p>
      </div>
    </div>
  );
}
