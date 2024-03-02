import React from "react";
import { useParams } from "react-router-dom";

const Realisation = ({ items }) => {
  const { id } = useParams();

  // Find the corresponding service based on the ID
  const realisation = items.find((item) => item.id === parseInt(id));
  return <div>{realisation.title}</div>;
};

export default Realisation;
