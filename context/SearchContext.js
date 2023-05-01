import { createContext, useContext, useState } from "react";

let SearchContext = createContext();

export let SearchWrapper = () => {
  const [searchedWord, setSearchedWord] = useState("");

  const sharedFilters = {
    keyword: {
      getter: searchedWord,
      setter: setSearchedWord,
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
