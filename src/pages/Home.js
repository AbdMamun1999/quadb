import React from "react";
import { useGetAllShowQuery } from "../features/showApi/showApi";
import Loading from "../components/Loading";
import Error from "../components/Error";
import ShowCard from "../components/ShowCard";

const Home = () => {
  const {
    data: scores,
    isLoading,
    isError,
    isSuccess,
    error,
  } = useGetAllShowQuery();

  console.log(scores);
  let content;

  if (isLoading) content = <Loading />;

  if (!isLoading && isError)
    content = <Error error="There is an error occured" />;

  if (!isLoading && !isError && scores.length === 0)
    content = <p>There is no error</p>;

  if (!isLoading && !isError && scores.length > 0)
    content = scores.map((score) => (
      <div className="col-sm-12 col-md-6 col-lg-4" key={score.show.id}>
        <ShowCard score={score} />
      </div>
    ));

  return (
    <section className="w-75 mx-auto ">
      <h4 className="text-center mt-3">All Shows</h4>
      <div className="mt-3 row  g-3 ustify-content-center">{content}</div>
    </section>
  );
};

export default Home;
