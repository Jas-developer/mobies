import { Card } from "../components/Card";
import { useFetch } from "../hooks/useFetch";

// THE apiPath is a props from Allroutes component
export const MovieList = ({ apiPath }) => {
  // PASSING THE PROPS TO THE CUSTOM HOOKS
  const { data } = useFetch(apiPath);

  return (
    <main>
      <section className="max-w-7xl mx-auto py-7">
        <div className="grid md:grid-cols-2 lg:grid-cols-3  gap-3">
          {data.map((movie) => (
            <Card key={data.id} movie={movie} />
          ))}
        </div>
      </section>
    </main>
  );
};
