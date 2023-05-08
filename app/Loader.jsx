"use client";

import { usePathname } from "next/navigation";
import { ClipLoader } from "react-spinners";

export default function Loader({ customSize }) {
  const pathname = usePathname();
  return (
    <div
      className={`flex items-center justify-center h-screen ${
        pathname == "/" ? "loader-card" : "loader-detail"
      }`}
    >
      <ClipLoader color="#E50914" size={customSize} />
    </div>
  );
}
