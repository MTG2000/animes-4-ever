import React from "react";
import { Container, Grid, Box, Typography } from "@material-ui/core";
import Image from "../Shared/ImageFixedAspect";
import { useQuery } from "@apollo/react-hooks";
import QueriesApi from "../../Api";
import LoadingPage from "../Shared/LoadingPage";
import Star from "@material-ui/icons/Star";

const AnimePage = (props) => {
  const animeId = props.match.params.id;

  const { loading, data } = useQuery(QueriesApi.animePage, {
    variables: { id: +animeId },
  });

  if (loading) return <LoadingPage />;

  const { anime } = data;
  console.log(anime);

  return (
    <Box py={6}>
      <Container>
        <Grid container>
          <Grid item xs={12} sm={4}>
            <Image src={anime.image} />
          </Grid>
          <Grid item className="px-5" xs={12} sm={8}>
            <Typography variant="h3" component="h1" color="primary">
              {anime.title}
            </Typography>
            <Typography variant="h6" color="textPrimary">
              Author: {anime.author.name}
            </Typography>
            <Typography variant="h6" color="textPrimary">
              Studio: {anime.studio.name}
            </Typography>
            {anime.rating && (
              <Typography variant="h6" color="textPrimary">
                {anime.rating} <Star htmlColor="#ffeb3b" />
              </Typography>
            )}
            <Typography
              variant="body1"
              color="textPrimary"
              className="mt-5"
              style={{ lineHeight: "2em" }}
            >
              {anime.description}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AnimePage;
