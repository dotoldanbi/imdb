import React from "react";
import NavBarItem from "./NavBarItem";
import { Suspense } from "react";
export default function NavBar() {
  return (
    <Suspense>
      <div className="flex p-4 justify-center dark:bg-amber-600  bg-amber-100 lg:text-lg justify-center gap-4">
        <NavBarItem title="Trending" param="fetchTrending" />
        <NavBarItem title="Top Rated" param="fetchTopRated" />
      </div>
    </Suspense>
  );
}
