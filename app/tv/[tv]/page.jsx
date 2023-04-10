import Image from "next/image";
import Star from "@/app/Star";

export async function generateStaticParams() {
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`
  );
  const res = await data.json();

  return res.results.map((tv) => ({
    tv: toString(tv.id),
  }));
}

export default async function MovieDetail({ params }) {
  const { tv } = params;
  const imagePath = "https://image.tmdb.org/t/p/original";
  const data = await fetch(
    `https://api.themoviedb.org/3/tv/${tv}?api_key=${process.env.API_KEY}`
  );
  const res = await data.json();

  return (
    <div className="mt-8">
      <div>
        <h2 className="text-4xl">{res.name}</h2>
        <h2>TV Show</h2>
        <h1 className="text-lg">Last air date: {res.first_air_date}</h1>
        <h2>Episodes length: {res?.last_episode_to_air?.runtime} minutes</h2>
        <div className="flex justify-between badges">
          <div>
            <h2 className="bg-green-600 inline-block my-2 py-2 px-4 rounded-lg text-sm">
              {res.status}
            </h2>
          </div>
          <div
            className={` bg-red-600 inline-block my-2 py-2 px-4 rounded-lg text-sm popularity ${
              res?.popularity > 15 ? "big-pop" : "small-pop"
            }`}
          >
            <h2 className="mr-1">Popularity: </h2>
            <Star />
            <h2 className="ml-1">{Math.round(res?.popularity / 2.7)}%</h2>
          </div>
        </div>
        <Image
          className="my-10 w-full"
          src={imagePath + res.backdrop_path}
          alt={res.title}
          width={1000}
          height={1000}
          priority
        />
      </div>
      <div className="my-4">
        <h2 className="text-2xl mb-2">Description:</h2>
        <p className="text-lg desc">{res.overview}</p>
      </div>
    </div>
  );
}
