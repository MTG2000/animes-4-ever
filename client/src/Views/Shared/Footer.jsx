import React from "react";
import { makeStyles, Typography, Container } from "@material-ui/core";

const useStyle = makeStyles({
  root: () => ({
    background: "#000",
    width: "100%",
    padding: "5px 25px",
    position: "absolute",
    bottom: 0,
    left: 0,
  }),
  input: {
    color: "white !important",
  },
});

const Footer = () => {
  const classes = useStyle();

  return (
    <footer className={classes.root}>
      <Container>
        <Typography variant="subtitle1" color="textPrimary">
          Made By &nbsp;
          <a
            href="https://mtgdev.herokuapp.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Typography variant="h6" component="span" color="primary">
              Mtg
            </Typography>
          </a>
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;
