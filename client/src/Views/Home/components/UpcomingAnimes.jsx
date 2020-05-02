import React from "react";
import { Grid, Typography } from "@material-ui/core";
import AnimeCard from "./AnimeCard";

const UpcomingAnimes = ({ data }) => {
  return (
    <>
      <Typography variant="h4" className="my-3" color="primary">
        Top Upcoming Animes
      </Typography>
      <Grid container justify="center">
        {data.map((a) => (
          <AnimeCard key={a.id} anime={a} />
        ))}
      </Grid>
    </>
  );
};

export default UpcomingAnimes;
