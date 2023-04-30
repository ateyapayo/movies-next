"use client";

export default function Sorting({
  content,
  setContent,
  getterSortPopularity,
  setterSortPopularity,
  getterSortVote,
  setterSortVote,
  getterSortAlphabet,
  setterSortAlphabet,
}) {
  const orderByPopularity = () => {
    const sortedResults = [...content].sort((a, b) =>
      getterSortPopularity === "desc"
        ? b.popularity - a.popularity
        : a.popularity - b.popularity
    );
    setContent(sortedResults);
    setterSortPopularity(getterSortPopularity === "desc" ? "asc" : "desc");
  };

  const orderByVote = () => {
    const sortedResults = [...content].sort((a, b) =>
      getterSortVote === "desc"
        ? b.vote_average - a.vote_average
        : a.vote_average - b.vote_average
    );
    setContent(sortedResults);
    setterSortVote(getterSortVote === "desc" ? "asc" : "desc");
  };

  const orderByAlphabet = () => {
    const sortedResults = [...content].sort((a, b) => {
      const titleA = a.title || a.name;
      const titleB = b.title || b.name;

      if (getterSortAlphabet === "desc") {
        return titleB.localeCompare(titleA);
      } else {
        return titleA.localeCompare(titleB);
      }
    });
    setContent(sortedResults);
    setterSortAlphabet(getterSortAlphabet === "desc" ? "asc" : "desc");
  };

  return (
    <>
      {content.length > 0 && (
        <div>
          <div>
            <button onClick={orderByPopularity}>
              <h1>Order by Popularity</h1>
            </button>
          </div>

          <div>
            <button onClick={orderByVote}>
              <h1>Order by Vote</h1>
            </button>
          </div>

          <div>
            <button onClick={orderByAlphabet}>
              <h1>Order Alphabetically</h1>
            </button>
          </div>
        </div>
      )}
    </>
  );
}
