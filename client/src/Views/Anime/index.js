import React from "react";

const AnimePage = (props) => {
  console.log(props);

  const animeId = props.match.params.id;

  return <h2>Anime Page {animeId}</h2>;
};

export default AnimePage;
