"use client";
import Footer from "@/components/Footer";
import ImgPoster from "@/components/MovieCard";
import MenuBar from "@/components/MenuBar";
import axios from "axios";
import { useEffect, useState } from "react";

export default function UseEffectPage() {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/trending/all/week?api_key=229a6a0f891df5bf1176a4668af885c6"
      )
      .then((response) => {
        console.log(response);
        setMovieList(response.data.results);
      });
  }, []);
  console.log(movieList);
  return (
    <div>
      <MenuBar page={"เรียนรู้ UseEffect"} />
      <div className="justify-items-center p-4">
        {movieList
          .filter((item: { media_type?: string }) => item.media_type === "tv")
          .map(
            (
              item: {
                poster_path?: string;
                title?: string;
                name?: string;
                overview?: string;
                media_type?: string;
              },
              index
            ) => (
              <div className=" bg-pink-50 w-xl">
                <div className="justify-items-center">
                  <ImgPoster src={item.poster_path} />
                  <div className="text-center">
                    <h1>{item.title}</h1>
                    <h1>{item.name}</h1>
                    <p>{item.overview}</p>
                    <h3>Media Type : {item.media_type}</h3>
                  </div>
                </div>
              </div>
            )
          )}
      </div>
      <Footer />
    </div>
  );
}
