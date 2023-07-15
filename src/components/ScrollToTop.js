import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// function spinWords(string){
//   const words = string.split("");
//   const map = words.map((word) => {
//      word >= 5 ? return word.split("").reverse().join(""); : return word;
//   })
// }

function spinWords(string) {
  const words = string.split("");
  const reverse = words.map((word) => {
    words.join("");
  });
  if (words.length >= 5) {
    return reverse;
  } else {
    return words.join("");
  }
}
