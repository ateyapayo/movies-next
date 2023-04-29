"use client";
import { usePathname } from "next/navigation";

import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import CloseSharpIcon from "@mui/icons-material/CloseSharp";

export default function Search({ getterSearchKeyword, setterSearchKeyword }) {
  const pathname = usePathname();

  return (
    <div className="search-section">
      <div
        className={
          pathname == "/" ? "bg-transparent search-container" : "hidden"
        }
      >
        <SearchOutlinedIcon className="search-icon" />
        <input
          value={getterSearchKeyword}
          onChange={(e) => setterSearchKeyword(e.target.value)}
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
