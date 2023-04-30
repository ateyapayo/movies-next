"use client";

import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import CloseSharpIcon from "@mui/icons-material/CloseSharp";

export default function Search({ getterSearchKeyword, setterSearchKeyword }) {
  return (
    <div className="search-section">
      <div className="bg-transparent search-container">
        <SearchOutlinedIcon className="search-icon" />
        <input
          value={getterSearchKeyword}
          onChange={(e) => setterSearchKeyword(e.target.value)}
          placeholder="Title"
        />
        {getterSearchKeyword.length > 0 && (
          <CloseSharpIcon
            className="close-icon"
            onClick={() => setterSearchKeyword("")}
          />
        )}
      </div>
    </div>
  );
}
