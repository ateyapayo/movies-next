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
        <SearchOutlinedIcon className="search-icon" />
        <input
          value={context?.keyword?.getter}
          onTouchStart={handleTouchStart}
          onChange={(e) => {
            context?.filters?.noSorting();
            context?.keyword?.setter(e.target.value);
          }}
          placeholder="Title"
        />
        {context?.keyword?.getter?.length > 0 && (
          <CloseSharpIcon
            className="close-icon"
            onClick={() => context?.keyword?.setter("")}
          />
        )}
      </div>
    </div>
  );
}
