"use client";

import { usePathname } from "next/navigation";
import { ClipLoader } from "react-spinners";

export default function Loader({ customSize }) {
  const pathname = usePathname();
  return (
    <div
      className={`flex items-center justify-center h-screen ${
        pathname == "/browse" ? "loader-card" : "loader-detail"
      }`}
    >
      <ClipLoader alt="Loader icon" color="#E50914" size={customSize} />
    </div>
  );
}
