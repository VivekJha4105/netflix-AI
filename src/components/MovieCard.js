import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({ posterPath, name, id }) => {
  if (!posterPath) return null;
  return (
    <div className="w-44 pr-4">
      <img alt={name} src={IMG_CDN_URL + posterPath} />
    </div>
  );
};

export default MovieCard;
