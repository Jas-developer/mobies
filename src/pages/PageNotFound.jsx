import { useEffect } from "react";
import PageNotFoundImage from "../assets/redux.png";

export const PageNotFound = () => {
  useEffect(() => {
    document.title = `LABYU HAHAHA
    `;
  });
  return (
    <main>
      <section className="flex flex-col justify-center px-2">
        <div className="flex flex-col items-center my-4">
          <p className="text-7xl text-gray-700 font-bold my-10"> 404, Oops!</p>
          <img src={PageNotFoundImage} alt="" className="rounded-lg" />
        </div>
        <div></div>
      </section>
    </main>
  );
};
