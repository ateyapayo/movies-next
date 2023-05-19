"use client";

import Link from "next/link";
import Image from "next/image";
import { useSearchContext } from "@/context/SearchContext";
import { useState } from "react";
import { useRouter } from "next/navigation";

import StarOutlineIcon from "@mui/icons-material/StarOutline";
import StarRateIcon from "@mui/icons-material/StarRate";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import Loader from "./Effects/Loader";

export default function DetailModule({ res }) {
  const router = useRouter();
  const context = useSearchContext();

  const [loading, setLoading] = useState(true);

  const handleImageLoad = () => {
    setLoading(false);
  };

  const searchedResult = context?.sharedFilters?.keyword?.getter;
  console.log("THIS IS RES ---> ", res);
  const imagePath = "https://image.tmdb.org/t/p/original";

  const vote = Math.round(res?.vote_average / 2);

  const fullStars = [];

  for (let i = 0; i < vote; i++) {
    fullStars.push(
      <div className="rating" key={i}>
        <StarRateIcon className="star" />
      </div>
    );
  }

  const emptyStars = [];

  for (let i = 0; i < 5 - vote; i++) {
    emptyStars.push(
      <div className="rating" key={i}>
        <StarOutlineIcon className="star" />
      </div>
    );
  }

  return (
    <div className="mt-8 container">
      <div className="container-detail">
        {searchedResult && (
          <div
            className="flex div-back cursor-pointer"
            onClick={() => router.back()}
          >
            <ArrowBackIcon className="self-center arrow-back" />
            <span className="self-center text-white text-back">
              Go back to the search results
            </span>
          </div>
        )}

        <h2 className="text-white text-4xl">{res?.title || res?.name}</h2>

        <h1 className="text-white text-lg">
          {res?.last_episode_to_air ? "TV Show" : "Movie"}
        </h1>

        <h1 className="text-white text-lg">
          {res?.release_date && new Date(res?.release_date).getFullYear()}
          {res?.first_air_date &&
            new Date(res?.first_air_date).getFullYear() +
              " - " +
              (res?.status.toLowerCase() != "returning series"
                ? new Date(res?.last_air_date).getFullYear()
                : "Present")}
        </h1>
        <h2 className="text-white">
          {res?.runtime
            ? `Runtime: ${res?.runtime}`
            : `Episodes length: ${res?.last_episode_to_air?.runtime}`}{" "}
          minutes
        </h2>
        <div className="flex justify-between heading-detail mt-2">
          <div className="badge">
            <h2
              className={`inline-block text-white py-2 px-4 rounded-lg text-sm ${
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

            <h2 className="text-white rating-text pt-3">
              {res?.vote_count?.toLocaleString()} ratings with an average of{" "}
              {(res?.vote_average / 2).toFixed(2)} out of 5 stars.
            </h2>
          </div>
        </div>
        {loading && <Loader customSize={50} />}
        <Image
          className="my-10 w-full"
          src={imagePath + res?.backdrop_path}
          alt={res?.title}
          width={1000}
          height={1000}
          priority
          onLoad={handleImageLoad}
        />
      </div>
      <div>
        <div className="flex mb-1">
          <h1 className="text-white text-md info-line mr-1">
            <b>Genre:</b>
          </h1>
          {res?.genres?.map((item) => (
            <h1 className="text-white text-md single-genre info-line">
              {item?.name}
            </h1>
          ))}
        </div>

        {res?.tagline && (
          <div className="flex mb-1">
            <h1 className="text-white text-md info-line">
              <b>Motif:</b>
            </h1>{" "}
            <h1 className="text-white ml-2 info-line">
              <em>{"'" + res?.tagline + "'"}</em>
            </h1>
          </div>
        )}

        <div className="flex">
          {res?.homepage && (
            <div className="flex">
              <h1 className="text-white text-md info-line">
                <b>Visit:</b>
              </h1>{" "}
              <Link target="_BLANK" href={res?.homepage}>
                <h1 className="text-white ml-2 info-line watch-link">
                  {res?.homepage}
                </h1>
              </Link>
            </div>
          )}
        </div>

        <h2 className="text-white text-2xl mt-10 mb-2 title-desc">
          Description:
        </h2>
        <p className="text-white text-lg desc">{res?.overview}</p>
      </div>
    </div>
  );
}
