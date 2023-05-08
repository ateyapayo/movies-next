import StarFull from "@/app/components/StarFull";
import StarEmpty from "@/app/components/StarEmpty";
import ImageDetail from "@/app/components/ImageDetail";
import BackHome from "@/app/components/BackHome";

export default async function MovieDetail({ params }) {
  const { tv } = params;

  const imagePath = "https://image.tmdb.org/t/p/original";
  const data = await fetch(
    `https://api.themoviedb.org/3/tv/${tv}?api_key=${process?.env?.API_KEY}`
  );
  const res = await data?.json();

  const vote = Math.round(res?.vote_average / 2);

  const fullStars = [];

  for (let i = 0; i < vote; i++) {
    fullStars?.push(<StarFull className="rating" key={i} />);
  }

  const emptyStars = [];

  for (let i = 0; i < 5 - vote; i++) {
    emptyStars?.push(<StarEmpty className="rating" key={i} />);
  }

  return (
    <div className="mt-8 container">
      <div className="container-detail">
        <BackHome />
        <h2 className="text-4xl">{res?.name}</h2>
        <h2>TV Show</h2>
        <h1 className="text-lg">First air date: {res?.first_air_date}</h1>
        <h2>Episodes length: {res?.last_episode_to_air?.runtime} minutes</h2>
        <div className="flex justify-between badges mt-2">
          <div className="status">
            <h2
              className={`inline-block py-2 px-4 rounded-lg text-sm ${
                res?.status === "Returning Series" && "bg-green-600"
              } ${res?.status === "Ended" && "bg-blue-700"} ${
                res?.status === "Canceled" && "bg-red-700"
              }`}
            >
              {res?.status}
            </h2>
          </div>
          <div className="popularity flex">
            <div className="flex stars">
              {fullStars}
              {emptyStars}
            </div>

            <h2 className="rating-text pt-3">
              {res?.vote_count?.toLocaleString()} ratings with an average of{" "}
              {(res?.vote_average / 2).toFixed(2)} out of 5 stars.
            </h2>
          </div>
        </div>
        <ImageDetail
          imagePath={imagePath}
          backdropPath={res?.backdrop_path}
          title={res?.title}
        />
      </div>
      <div className="mt-4 description">
        <h2 className="text-2xl mb-2">Description:</h2>
        <p className="text-lg desc">{res?.overview}</p>
      </div>
    </div>
  );
}
