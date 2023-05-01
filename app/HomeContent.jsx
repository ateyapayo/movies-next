"use client";

import { useEffect, useState } from "react";
import Movie from "./Movie";
import Search from "./Search";
import Sorting from "./Sorting";
import { useSearchContext } from "@/context/SearchContext";

export default function HomeContent({ content }) {
  const [filteredResults, setFilteredResults] = useState(content);
  const [searchKeyword, setSearchKeyword] = useState("");
  const [sortPopularity, setSortPopularity] = useState("desc");
  const [sortVote, setSortVote] = useState("desc");
  const [sortAlphabet, setSortAlphabet] = useState("asc");

  const context = useSearchContext();

  const searchedWord = context?.keyword?.getter;

  useEffect(() => {
    const filteredItems = content?.filter(
      (item) =>
        item?.name?.toLowerCase().includes(searchedWord.toLowerCase()) ||
        item?.title?.toLowerCase().includes(searchedWord.toLowerCase())
    );
    setFilteredResults(filteredItems);
  }, [searchedWord, content]);

  return (
    <main className="container">
      <Search />

      <Sorting
        setContent={setFilteredResults}
        content={filteredResults}
        getterSortPopularity={sortPopularity}
        setterSortPopularity={setSortPopularity}
        getterSortVote={sortVote}
        setterSortVote={setSortVote}
        getterSortAlphabet={sortAlphabet}
        setterSortAlphabet={setSortAlphabet}
      />

      <div className="grid gap-16 grid-cols-fluid">
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
      {filteredResults.length === 0 && (
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
