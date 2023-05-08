import HomeContent from "./components/HomeContent";

export default async function Home() {
  const page1Data = await fetch(
    `https://api.themoviedb.org/4/list/8251340?page=1&api_key=${process?.env?.API_KEY}&language=en-US&page=1`
  );
  const page2Data = await fetch(
    `https://api.themoviedb.org/4/list/8251340?page=1&api_key=${process?.env?.API_KEY}&language=en-US&page=2`
  );

  const page1Res = await page1Data?.json();
  const page2Res = await page2Data?.json();

  const results = [...page1Res?.results, ...page2Res?.results];

  return <HomeContent content={results} />;
}
