"use client";

import { ClipLoader } from "react-spinners";

export default function Loader({ customSize }) {
  return (
    <div className="flex items-center justify-center loader-div">
      <ClipLoader color="#E50914" size={customSize} />
    </div>
  );
}
