import { createContext, useContext, useState } from "react";

let SearchContext = createContext();

export let SearchWrapper = ({ children }) => {
  const [searchedWord, setSearchedWord] = useState("");
  const [sortPopularity, setSortPopularity] = useState("desc");
  const [sortVote, setSortVote] = useState("desc");
  const [sortAlphabet, setSortAlphabet] = useState("asc");
  const [selectedPopularity, setSelectedPopularity] = useState(false);
  const [selectedVote, setSelectedVote] = useState(false);
  const [selectedAZ, setSelectedAZ] = useState(false);

  const resetAllFilters = () => {
    setSearchedWord("");
    setSortPopularity("");
    setSortVote("");
    setSortAlphabet("");
    setSelectedPopularity("");
    setSelectedVote("");
    setSelectedAZ("");
  };

  const sharedFilters = {
    keyword: {
      getter: searchedWord,
      setter: setSearchedWord,
    },
    popularity: {
      getter: sortPopularity,
      setter: setSortPopularity,
    },
    vote: {
      getter: sortVote,
      setter: setSortVote,
    },
    alphabet: {
      getter: sortAlphabet,
      setter: setSortAlphabet,
    },
    selectPopularity: {
      getter: selectedPopularity,
      setter: setSelectedPopularity,
    },
    selectVote: {
      getter: selectedVote,
      setter: setSelectedVote,
    },
    selectAlphabet: {
      getter: selectedAZ,
      setter: setSelectedAZ,
    },
    filters: {
      clear: resetAllFilters,
    },
  };

  return (
    <SearchContext.Provider value={sharedFilters}>
      {children}
    </SearchContext.Provider>
  );
};

export let useSearchContext = () => {
  return useContext(SearchContext);
};
