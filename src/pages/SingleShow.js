import React from "react";
import { useGetAShowQuery } from "../features/showApi/showApi";
import { useParams } from "react-router-dom";

const SingleShow = () => {
  const { showId } = useParams();

  const {
    data: show,
    isLoading,
    isError,
    isSuccess,
    error,
  } = useGetAShowQuery(showId);

  console.log(show?.name);

  return (
    <div>
      <h6>{show?.name}</h6>
    </div>
  );
};

export default SingleShow;
