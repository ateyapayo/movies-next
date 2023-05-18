"use client";

import { useEffect, useState } from "react";
import Movie from "./Movie";
import Sorting from "./Sorting";
import { useSearchContext } from "@/context/SearchContext";
import Intro from "./Intro";

export default function HomeContent({ content }) {
  const context = useSearchContext();

  console.log("THIS IS WINDOW ---> ", window?.innerWidth);
  const [filteredResults, setFilteredResults] = useState(content);
  const [resultsText, setResultsText] = useState(false);

  const [showIntro, setShowIntro] = useState(true);

  const searchedWord = context?.sharedFilters?.keyword?.getter;
  const introContext = context?.paging?.introNetflix?.getter;

  useEffect(() => {
    if (searchedWord && filteredResults?.length > 0) {
      setResultsText(true);
    } else setResultsText(false);
  }, [searchedWord, filteredResults]);

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
      context?.sharedFilters?.alphabet?.getter == "" &&
      context?.sharedFilters?.popularity?.getter == "" &&
      context?.sharedFilters?.date?.getter == "" &&
      searchedWord == ""
    ) {
      setFilteredResults(content);
    }
  });

  useEffect(() => {
    context?.paging?.custom404?.setErrorPage(false);
  });

  if (window?.innerWidth > 450) {
    setTimeout(() => {
      context?.paging?.introNetflix?.setter(false);
      setShowIntro(false);
    }, 5000);
  } else {
    setTimeout(() => {
      context?.paging?.introNetflix?.setter(false);
      setShowIntro(false);
    }, 3900);
  }

  return (
    <>
      {showIntro && introContext ? (
        <Intro />
      ) : (
        <main className="container">
          <Sorting setContent={setFilteredResults} content={filteredResults} />

          {filteredResults.length !== 0 && (
            <div
              className={`results-found ${
                filteredResults.length < 28 && "border"
              } `}
            >
              {resultsText ? (
                <div className="results-text">
                  <h1 className="text-white title">Results found:</h1>
                  <h1 className="text-white result">
                    {filteredResults?.length}
                  </h1>
                </div>
              ) : (
                <></>
              )}
            </div>
          )}
          <div className="grid gap-16 grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 cards">
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
          {context?.sharedFilters?.keyword?.getter &&
            filteredResults?.length === 0 && (
              <div className="no-results">
                <h1 className="text-white">
                  Your search for "{searchedWord}" did not have any matches.
                  <br />
                  Try with a different title.
                </h1>
              </div>
            )}
        </main>
      )}
    </>
  );
}
