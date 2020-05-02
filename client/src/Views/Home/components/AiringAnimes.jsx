import React from "react";
import { Grid, Typography } from "@material-ui/core";
import AnimeCard from "./AnimeCard";

const AiringAnimes = ({ data }) => {
  return (
    <>
      <Typography variant="h4" className="mb-3" color="primary">
        Top Airing Animes
      </Typography>
      <Grid container justify="center">
        {data.map((a) => (
          <AnimeCard key={a.id} anime={a} />
        ))}
      </Grid>
    </>
  );
};

export default AiringAnimes;
