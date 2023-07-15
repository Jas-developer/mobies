import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BackUp from "../assets/redux.png";
export const Card = ({ movie }) => {
  // DESTRUCTURING THE MOVIE PROPS
  const { id, title, overview, poster_path } = movie;
  const [show, setShow] = useState(false);
  // GETTING THE IMAGE
  const image = poster_path
    ? `https://image.tmdb.org/t/p/w500/${poster_path}`
    : BackUp;

  const handleShow = () => {
    setShow(!show);
  };

  // THIS WILL CLOSE THE OPEN DETAILS EVERY 10 SECONDS
  useEffect(() => {
    const timeOut = setTimeout(() => {
      setShow(false);
    }, 10000);

    return () => {
      clearTimeout(timeOut);
    };
  }, [show]);

  // RETURN STATEMENT
  return (
    <div>
      <div className="max-w-sm bg-gray-500 border border-gray-700 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
        <Link to={`/movie/${id}`}>
          <img className="rounded-t-lg" src={image} alt="" />
        </Link>
        <div className="p-5">
          <Link to={`movie/${id}`}>
            <h5 className="mb-2 text-base lg:text-blue-400 font-bold tracking-tight text-gray-900 dark:text-white">
              {title}
            </h5>
          </Link>
          <p className="mb-3 text-gray-300 font-semibold dark:text-gray-400 text-sm">
            <button
              onClick={handleShow}
              className="px-2 py-2 bg-blue-700 text-white font-bold mr-1 transition duration-500 hover:scale-110 hover:rounded-xl hover:mr-2"
            >
              {!show ? "Show Details" : "Hide Details"}
            </button>
            {show && overview}
          </p>
        </div>
      </div>
    </div>
  );
};
