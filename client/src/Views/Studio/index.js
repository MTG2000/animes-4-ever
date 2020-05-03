import React from "react";
import { Box, Container, Typography, Grid } from "@material-ui/core";
import { useQuery } from "@apollo/react-hooks";
import QueriesApi from "../../Api";
import LoadingPage from "../Shared/LoadingPage";
import AnimeCard from "../Home/components/AnimeCard";
const StudioPage = (props) => {
  const studioId = props.match.params.id;

  const { loading, data } = useQuery(QueriesApi.studioPage, {
    variables: { id: +studioId },
  });

  if (loading) return <LoadingPage />;

  const { studio } = data;

  return (
    <Box py={6}>
      <Container>
        <Typography color="textPrimary">Studio Name: </Typography>
        <Typography color="textPrimary" variant="h3">
          {studio.name}
        </Typography>
        <Typography variant="h4" className="mb-3 mt-5" color="textPrimary">
          Studio's Works:
        </Typography>
        <Grid container justify="center">
          {studio.animes.map((a) => (
            <AnimeCard key={a.id} anime={a} />
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default StudioPage;
