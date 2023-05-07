"use client";

import { ClipLoader } from "react-spinners";

export default function Loader({}) {
  return (
    <div className="flex items-center justify-center h-screen">
      <ClipLoader color="#E50914" size={24} />
    </div>
  );
}
