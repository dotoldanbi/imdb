import React from "react";
import Results from "@/components/Results";
import {} from "react";
export default async function SearchPage({ params }) {
  const param = await params;
  const searchTerm = param.searchTerm;
  console.log("resume");
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${searchTerm}&language=en-US&page=1&include_adult=false`
  );
  const data = await res.json();
  const results = data.results;

  return (
    <div>
      {results.length === 0 && <h1 className="text-center pt-6">No results</h1>}

      {results && <Results results={results} />}
    </div>
  );
}
