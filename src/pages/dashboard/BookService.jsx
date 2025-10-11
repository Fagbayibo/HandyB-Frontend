import React from "react";
import { useParams } from "react-router";

const BookService = () => {
  const {id} = useParams();
  return <p>Service ID {id}</p>;
};

export default BookService;
