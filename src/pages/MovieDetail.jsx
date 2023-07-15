import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export const MovieDetail = () => {
  const params = useParams();
  const [data, setData] = useState([]);
  // THIS WILL GET THE POSTER_PATH IMAGE FROM THE DATA FROM PARAMS
  const image = data.poster_path
    ? `https://image.tmdb.org/t/p/w500/${data.poster_path}`
    : "Sorry Bro";

  // FETCHING DATA TO ACCESS ITS INFORMATION
  useEffect(() => {
    async function fetchMovie() {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/${params.id}?api_key=79e5d00a02d9e80127f280391ef1abd7`
      );
      const json = await response.json();
      setData(json);
      console.log(json);
    }
    fetchMovie();
  }, []);

  useEffect(() => {
    document.title = `details`;
  }, []);

  // JSX RETURN STATEMENT
  return (
    <main>
      <section className="grid lg:grid-cols-3 md:grid-cols-2  justify-around flex-wrap">
        <div className="text-white max-w-sm md:p-4">
          <img src={image} alt="" className="rounded" />
        </div>
        <div className="max-w-2xl text-gray-700 text-lg lg:col-span-2 lg:p-2 border-white md:p-6">
          <h1 className="text-3xl font-bold my-3  lg:text-left text-blue-600 uppercase">
            {data.title}
          </h1>
          <p className="my-4 text-white">{data.overview}</p>
          <p className="my-5 grid md:grid-cols-2 lg:grid-cols-3 gap-2 text-white">
            {data.genres
              ? data.genres.map((genre) => (
                  <span
                    key={genre.id}
                    className="mr-2 border border-gray-200 rounded p-2"
                  >
                    {genre.name}
                  </span>
                ))
              : ""}
          </p>
        </div>
      </section>
    </main>
  );
};
