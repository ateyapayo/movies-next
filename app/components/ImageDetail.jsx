"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

import { useSearchContext } from "@/context/SearchContext";

import Loader from "./Loader";

export default function ImageDetail({ imagePath, backdropPath, title }) {
  const context = useSearchContext();
  const [loading, setLoading] = useState(true);

  const handleImageLoad = () => {
    setLoading(false);
  };

  useEffect(() => {
    context?.paging?.custom404?.setErrorPage(false);
  });
  return (
    <>
      {loading && <Loader customSize={50} />}
      <Image
        className="my-10 w-full"
        src={imagePath + backdropPath}
        alt={title}
        width={1000}
        height={1000}
        priority
        onLoad={handleImageLoad}
      />
    </>
  );
}
