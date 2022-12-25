import React from "react";

export const AnimalFilter = ({ filterHandler }) => {
  return <input type="text" onChange={(e) => filterHandler(e)} />;
};
