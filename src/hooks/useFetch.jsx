import { useState, useEffect } from "react";
//FETCHING DATA

// THE apiPath parameter came from the Movielist component
export const useFetch = (apiPath, queryTerm = "") => {
  const [data, setData] = useState([]);
  const url = `https://api.themoviedb.org/3/${apiPath}?api_key=79e5d00a02d9e80127f280391ef1abd7&query=${queryTerm}`;

  // FETCHING AND STORE TO "data"
  useEffect(() => {
    async function fetchMovies() {
      // GET THE URL
      const response = await fetch(url);
      // CONVERT THE response containing url to json
      const json = await response.json();
      // THEN STORE THE DATA RESULTS TO "data" states
      setData(json.results);
    }
    // INVOKE THE FUNCTION THAT FETCHED THE URL
    fetchMovies();
  }, [url]);

  // RETURN THE DATA
  return { data };
};
