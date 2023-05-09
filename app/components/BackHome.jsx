"use client";

import Link from "next/link";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useSearchContext } from "@/context/SearchContext";
import { useRouter } from "next/navigation";

export default function BackHome({}) {
  const context = useSearchContext();
  const router = useRouter();

  const pushLink = () => {
    router?.push("/");
  };

  return (
    <>
      {context?.keyword?.getter && (
        <div className="mb-4 mr-3 flex div-back" onClick={pushLink}>
          <ArrowBackIcon className="arrow-back" />
          <span className="text-back">Go back to results</span>
        </div>
      )}
    </>
  );
}
