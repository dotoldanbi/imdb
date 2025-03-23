import React from "react";
import Image from "next/image";

export default async function MoviePage({ params }) {
  const param = await params;
  const movieId = param.id;
  console.log(movieId);
  console.log(movieId);
  console.log(movieId);

  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`
  );

  const movie = await res.json();
  console.log(movie);
  return (
    <div className="p-4 md:pt-8 flex flex-col md:flex-row content-center max-w-6xl mx-auto md:space-x-6 ">
      <Image
        src={`https://image.tmdb.org/t/p/original/${
          movie.backdrop_path || movie.poster_path
        }`}
        width={500}
        height={300}
        className="rounded-lg sm:rounded-t-lg group-hover:opacity-75 transition-opacity duration-300"
        style={{ maxWidth: "100%", maxHeight: "100%" }}
      />
      <div className="p-2">
        <h2 className="text-lg mb-3 font-bold">{movie.title || movie.name}</h2>
        <p className="mb-3">{movie.overview}</p>
        <p className="font-semibold mr-1">
          {movie.release_date || movie.first_air_date}
        </p>
        <p>
          <span className="font-semibold mr-1">Rating:</span>
          {movie.vote_count}
        </p>
      </div>
    </div>
  );
}
