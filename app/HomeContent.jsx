"use client";

import { useEffect, useState } from "react";

import Movie from "./Movie";

import Search from "./Search";

export default function HomeContent({ content }) {
  const [filteredResults, setFilteredResults] = useState(content);
  const [searchKeyword, setSearchKeyword] = useState("");

  useEffect(() => {
    const filteredItems = content.filter((item) =>
      item?.name?.toLowerCase().includes(searchKeyword?.toLowerCase())
    );
    setFilteredResults(filteredItems);
  }, [searchKeyword]);

  return (
    <main className="mt-8 mb-3">
      <Search
        getterSearchKeyword={searchKeyword}
        setterSearchKeyword={setSearchKeyword}
      />

      <div className="grid gap-16 grid-cols-fluid">
        {filteredResults?.map((movie) => (
          <Movie
            key={movie?.id}
            id={movie?.id}
            title={movie?.title || movie?.name}
            poster_path={movie?.poster_path}
            media_type={movie?.media_type}
            vote_average={movie?.vote_average}
            popularity={movie?.popularity}
          />
        ))}
        {/* <Movie
        key={results?.id}
        id={results?.id}
        title={results?.title || results?.name}
        poster_path={results?.poster_path}
        media_type={results?.media_type}
        vote_average={results?.vote_average}
      /> */}
      </div>
    </main>
  );
}
