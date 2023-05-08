"use client";

import Image from "next/image";
import { useState } from "react";

import Loader from "./Loader";

export default function ImageDetail({ imagePath, backdropPath, title }) {
  const [loading, setLoading] = useState(true);

  const handleImageLoad = () => {
    setLoading(false);
  };
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
