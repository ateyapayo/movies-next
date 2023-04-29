"use client";

import { useEffect, useState } from "react";

import Movie from "./Movie";

import Search from "./Search";

export default function HomeContent({ content }) {
  const [filteredResults, setFilteredResults] = useState(content);
  const [searchKeyword, setSearchKeyword] = useState("");

  useEffect(() => {
    if (!searchKeyword) {
      setFilteredResults(content);
    } else {
      const filteredItems = content?.filter(
        (item) =>
          item?.name?.toLowerCase().includes(searchKeyword?.toLowerCase()) ||
          item?.title?.toLowerCase().includes(searchKeyword?.toLowerCase())
      );
      setFilteredResults(filteredItems);
    }
  }, [searchKeyword, content]);

  return (
    <main className="mt-8 mb-3">
      <Search
        getterSearchKeyword={searchKeyword}
        setterSearchKeyword={setSearchKeyword}
      />

      <div
        className={
          filteredResults.length > 3
            ? "grid gap-16 grid-cols-fluid"
            : "short-row"
        }
      >
        {filteredResults?.map((movie) => (
          <Movie
            filteredResults={filteredResults}
            key={movie?.id}
            id={movie?.id}
            title={movie?.title || movie?.name}
            poster_path={movie?.poster_path}
            media_type={movie?.media_type}
            vote_average={movie?.vote_average}
            popularity={movie?.popularity}
          />
        ))}
      </div>
    </main>
  );
}
