import React from "react";
import { Box, Container, Typography, Grid } from "@material-ui/core";
import { useQuery } from "@apollo/react-hooks";
import QueriesApi from "../../Api";
import LoadingPage from "../Shared/LoadingPage";
import AnimeCard from "../Home/components/AnimeCard";

const SearchResult = (props) => {
  const searchValue = props.match.params.value;

  const { loading, data } = useQuery(QueriesApi.searchAnime, {
    variables: { name: searchValue },
  });

  if (loading) return <LoadingPage />;

  return (
    <Box py={6}>
      <Container>
        <Typography color="textPrimary" variant="h6">
          search results for: '{searchValue}'
        </Typography>

        <Grid container justify="center">
          {data.animes.map((a) => (
            <AnimeCard key={a.id} anime={a} />
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default SearchResult;
