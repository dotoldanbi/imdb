import Results from "@/components/Results";
import Image from "next/image";

const API_KEY = process.env.API_KEY;

export default async function Home({ searchParams }) {
  console.log(API_KEY);
  // const genre = searchParams.genre || "fetchTrending";
  const genre = "fetchTrending";

  const res = await new Promise((resolve) => {
    // setTimeout(async () => {
    const response = fetch(
      `https://api.themoviedb.org/3/${
        genre === "fetchTopRated" ? `/movie/top_rated` : `trending/all/week`
      }?api_key=${API_KEY}&language=en-US&page=1`,
      { next: { revalidate: 10000 } }
    );
    resolve(response);
    // }, 2000);
  });

  console.log(res);
  const data = await res.json();
  if (data) {
    if (!res.ok) {
      throw new Error("fail");
    }
  }
  const results = data.results;
  console.log(results);

  return (
    <div>
      <Results results={results} />
    </div>
  );
}
