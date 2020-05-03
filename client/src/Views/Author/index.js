import React from "react";
import { Box, Container, Typography, Grid } from "@material-ui/core";
import { useQuery } from "@apollo/react-hooks";
import QueriesApi from "../../Api";
import LoadingPage from "../Shared/LoadingPage";
import AnimeCard from "../Home/components/AnimeCard";

const AuthorPage = (props) => {
  const authorId = props.match.params.id;

  const { loading, data } = useQuery(QueriesApi.authorPage, {
    variables: { id: +authorId },
  });

  if (loading) return <LoadingPage />;

  const { author } = data;

  return (
    <Box py={6}>
      <Container>
        <Typography color="textPrimary">Author Name: </Typography>
        <Typography color="textPrimary" variant="h3">
          {author.name}
        </Typography>
        <Typography variant="h4" className="mb-3 mt-5" color="textPrimary">
          Author's Works:
        </Typography>
        <Grid container justify="center">
          {author.animes.map((a) => (
            <AnimeCard key={a.id} anime={a} />
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default AuthorPage;
