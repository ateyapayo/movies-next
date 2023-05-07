import { createContext, useContext, useState } from "react";

let SearchContext = createContext();

export let SearchWrapper = ({ children }) => {
  const [searchedWord, setSearchedWord] = useState("");
  const [sortPopularity, setSortPopularity] = useState("desc");
  const [sortDate, setSortDate] = useState("desc");
  const [sortAlphabet, setSortAlphabet] = useState("asc");
  const [selectedPopularity, setSelectedPopularity] = useState(false);
  const [selectedDate, setSelectedDate] = useState(false);
  const [selectedAZ, setSelectedAZ] = useState(false);

  const resetAllFilters = () => {
    setSearchedWord("");
    setSortPopularity("");
    setSortDate("");
    setSortAlphabet("");
    setSelectedPopularity("");
    setSelectedDate("");
    setSelectedAZ("");
  };

  const resetSorting = () => {
    setSortPopularity("");
    setSortDate("");
    setSortAlphabet("");
    setSelectedPopularity("");
    setSelectedDate("");
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
    date: {
      getter: sortDate,
      setter: setSortDate,
    },
    alphabet: {
      getter: sortAlphabet,
      setter: setSortAlphabet,
    },
    selectPopularity: {
      getter: selectedPopularity,
      setter: setSelectedPopularity,
    },
    selectDate: {
      getter: selectedDate,
      setter: setSelectedDate,
    },
    selectAlphabet: {
      getter: selectedAZ,
      setter: setSelectedAZ,
    },
    filters: {
      clear: resetAllFilters,
      noSorting: resetSorting,
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
