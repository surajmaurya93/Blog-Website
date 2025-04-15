import React from "react";
import Hero from "../Home/Hero";
import Trending from "../Home/Trending";
import Devotional from "../Home/Devotional";
import Creator from "../Home/Creator";

function Home() {
  return (
    <div>
      <div className="text-2xl font-semibold text-gray-900 flex justify-center items-center mt-11">
        Popular Categories
      </div>
      <Hero />
      <Trending />
      <Devotional />
      <Creator />
    </div>
  );
}

export default Home;