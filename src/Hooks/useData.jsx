import { useEffect, useState } from "react";
import fetchResults from "../utils/fetchResults";

export default function useData(query, page) {
  const [results, setResults] = useState([]);

  useEffect(() => {
    // Checking
    let ignore = false;

    fetchResults(query, page).then(json => {
      if (!ignore) {
        setResults(json);
      }
    });

    // Clean UP
    return () => {
      ignore = true;
    };
  }, [query, page]);

  return results;
}
