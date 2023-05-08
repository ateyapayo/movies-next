"use client";

import Link from "next/link";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useSearchContext } from "@/context/SearchContext";

export default function BackHome({}) {
  const context = useSearchContext();

  return (
    <>
      {context?.keyword?.getter && (
        <Link href="/">
          <div className="mb-4 mr-3 flex div-back">
            <ArrowBackIcon className="arrow-back" />
            <span className="text-back">Go back to results</span>
          </div>
        </Link>
      )}
    </>
  );
}
