"use client";

import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import CloseSharpIcon from "@mui/icons-material/CloseSharp";
import { useSearchContext } from "@/context/SearchContext";

export default function Search({ getterSearchKeyword }) {
  const context = useSearchContext();
  console.log("THIS IS CONTEXT IN SEARCH ---> ", context?.keyword);
  return (
    <div className="search-section">
      <div className="bg-transparent search-container">
        <SearchOutlinedIcon className="search-icon" />
        <input
          value={context?.keyword?.getter}
          onChange={(e) => context?.keyword?.setter(e.target.value)}
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
