import { notFound } from "next/navigation";
import DetailModule from "@/app/components/DetailModule";

export default async function MovieDetail({ params }) {
  const { movie } = params;

  const data = await fetch(
    `https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.API_KEY}`
  );
  const res = await data?.json();

  if (res?.status_code === 34) {
    notFound();
  }

  return <DetailModule res={res} />;
}
