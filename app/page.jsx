import Movie from "./Movie";

export default async function Home() {
  const data = await fetch(
    `https://api.themoviedb.org/4/list/8248147?page=1&api_key=${process.env.API_KEY}&language=en-US&page=1`
  );

  const res = await data.json();
  console.log(res);
  return (
    <main className="mt-8">
      <div className="grid gap-16 grid-cols-fluid">
        {" "}
        {res?.results?.map((movie) => (
          <Movie
            key={movie?.id}
            id={movie?.id}
            title={movie?.title || movie?.name}
            poster_path={movie?.poster_path}
            media_type={movie?.media_type}
            vote_average={movie?.vote_average}
          />
        ))}
      </div>
    </main>
  );
}
