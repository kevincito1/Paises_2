import { useState, useEffect } from "react";

const useFetchCountries = (url) => {
  const [data, setData] = useState([]);

  const handleFetchAPI = async () => {
    try {
      const response = await fetch(url);
      const results = await response.json();
      setData(results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handleFetchAPI();
  }, [url]);

  return {
    data,
  };
};

export default useFetchCountries;
