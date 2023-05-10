"use client";

import { useEffect, useState } from "react";
import Movie from "./Movie";
import Sorting from "./Sorting";
import { useSearchContext } from "@/context/SearchContext";

export default function HomeContent({ content }) {
  const context = useSearchContext();

  const [filteredResults, setFilteredResults] = useState(content);

  const searchedWord = context?.keyword?.getter;

  useEffect(() => {
    const filteredItems = content?.filter(
      (item) =>
        item?.name?.toLowerCase()?.includes(searchedWord?.toLowerCase()) ||
        item?.title?.toLowerCase()?.includes(searchedWord?.toLowerCase())
    );
    setFilteredResults(filteredItems);
  }, [searchedWord]);

  useEffect(() => {
    if (
      context?.alphabet?.getter == "" &&
      context?.popularity?.getter == "" &&
      context?.date?.getter == "" &&
      searchedWord == ""
    ) {
      setFilteredResults(content);
    }
  });

  useEffect(() => {
    context?.custom404?.setErrorPage(false);
  });

  return (
    <main className="container">
      <Sorting setContent={setFilteredResults} content={filteredResults} />

      <div className="grid gap-16 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
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
      {context?.keyword?.getter && filteredResults?.length === 0 && (
        <div className="no-results">
          <h1>
            Your search for "{searchedWord}" did not have any matches.
            <br />
            Try with a different title.
          </h1>
        </div>
      )}
    </main>
  );
}
