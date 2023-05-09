"use client";

import { useRouter } from "next/navigation";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useSearchContext } from "@/context/SearchContext";

export default function BackHome({}) {
  const router = useRouter();
  const context = useSearchContext();

  const handleLinkClick = (event) => {
    event.preventDefault();
    router.push("/");
  };

  return (
    <>
      {context?.keyword?.getter && (
        <div
          className="mb-4 mr-3 flex div-back pointer"
          onClick={handleLinkClick}
        >
          <ArrowBackIcon className="arrow-back" />
          <span className="text-back">Go back to results</span>
        </div>
      )}
    </>
  );
}
