import React from "react";
import { makeStyles, Typography, Grid } from "@material-ui/core";
import Star from "@material-ui/icons/Star";
import Image from "../../Shared/Image";
import { Link } from "react-router-dom";

const useStyle = makeStyles({
  root: {
    width: 220,
    height: 400,
    margin: "auto 20px",
  },
});

const AnimeCard = ({ anime }) => {
  const classes = useStyle();

  return (
    <div className={classes.root}>
      <Link to={`/anime/${anime.id}`}>
        <Image
          src={anime.image}
          StyleImgWrapper={{ height: "80%" }}
          pointerOnHover
        />
        <Typography
          variant="h6"
          align="center"
          style={{
            overflow: "hidden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
            color: "#4caf50",
          }}
        >
          {anime.title}
        </Typography>
        {anime.rating && (
          <Grid container justify="center" alignItems="center">
            <Typography variant="subtitle1" align="center">
              {anime.rating}
            </Typography>
            <Star htmlColor="#ffeb3b" />
          </Grid>
        )}
      </Link>
    </div>
  );
};

export default AnimeCard;
