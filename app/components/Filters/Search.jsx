"use client";

import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import CloseSharpIcon from "@mui/icons-material/CloseSharp";
import { useSearchContext } from "@/context/SearchContext";

export default function Search({}) {
  const context = useSearchContext();

  const handleTouchStart = (e) => {
    e.preventDefault();
  };

  return (
    <div className="search-section">
      <div className="bg-transparent search-container">
        <SearchOutlinedIcon
          alt="Search bar icon"
          className="text-color text-white self-center"
        />
        <input
          className="bg-transparent text-white"
          value={context?.sharedFilters?.keyword?.getter}
          onTouchStart={handleTouchStart}
          onChange={(e) => {
            context?.sharedFilters?.filters?.noSorting();
            context?.sharedFilters?.keyword?.setter(e.target.value);
          }}
          placeholder="Title"
        />
        {context?.sharedFilters?.keyword?.getter?.length > 0 && (
          <CloseSharpIcon
            className="text-white self-center text-2xl cursor-pointer close-icon"
            onClick={() => context?.sharedFilters?.keyword?.setter("")}
          />
        )}
      </div>
    </div>
  );
}
