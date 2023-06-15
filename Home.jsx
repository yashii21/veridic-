import React from "react";
import axios from "axios";
import Loader from "./Loader";
import CardsContainer from "./CardsContainer";
const Home = () => {
  const [res, setRes] = React.useState();
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  React.useEffect(() => {
    axios
      .get(
        "https://techcrunch.com/wp-json/wp/v2/posts?per_page=20&context=embed",
        {
          timeout: 5000,
        }
      )
      .then((res) => {
        setLoading(false);
        setRes(res);
      })
      .catch((err) => {
        setLoading(false);
        setError(true);
        if (error.code === "ECONNABORTED") {
          return <p>Sorry, request timed out :(</p>;
        } else {
          return <p>Something went wrong :(</p>;
        }
      });
  }, []);
  return loading ? (
    <Loader />
  ) : error ? (
    <p>Something Went wrong</p>
  ) : res || res.data || res.data.length !== 0 ? (
    <CardsContainer data={res.data} />
  ) : (
    <p>No data available</p>
  );
};

export default Home;
