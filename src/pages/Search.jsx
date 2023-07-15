import React from "react";
import { Card } from "../components/Card";
import { useFetch } from "../hooks/useFetch";
import { useSearchParams } from "react-router-dom";

export const Search = ({ apiPath }) => {
  const [searchParams] = useSearchParams();
  const queryTerm = searchParams.get("q");
  const { data } = useFetch(apiPath, queryTerm);
  return (
    <div>
      <section>
        <p className="text-2xl text-gray-700">
          {data.length === 0
            ? `No result for ${queryTerm}`
            : `Result for ${queryTerm}`}
        </p>
      </section>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap gap-3">
          {data.map((movie) => (
            <Card key={data.id} movie={movie} />
          ))}
        </div>
      </section>
    </div>
  );
};
