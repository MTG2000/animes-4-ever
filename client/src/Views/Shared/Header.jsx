import React, { useState } from "react";
import {
  makeStyles,
  useTheme,
  Typography,
  TextField,
  Grid,
} from "@material-ui/core";
import Search from "@material-ui/icons/Search";
import { useHistory, Link } from "react-router-dom";

const useStyle = makeStyles({
  root: (props) => ({
    background: "#000",
    width: "100%",
    padding: "15px 25px",
  }),
  input: {
    color: "white !important",
  },
});

const Header = () => {
  const [search, setSearch] = useState("");

  const theme = useTheme();
  const classes = useStyle(theme);
  const history = useHistory();

  const handleSearch = (e) => {
    e.preventDefault();
    history.push(`/search/${search}`);
    setSearch("");
  };

  return (
    <header className={classes.root}>
      <Grid container justify="space-between" alignItems="center">
        <Link to="/">
          <Typography color="textPrimary" variant="h4" component="h1">
            Animes
            <Typography color="primary" component="span" variant="h4">
              4
            </Typography>
            Ever
          </Typography>
        </Link>
        <Grid item>
          <form onSubmit={handleSearch}>
            <Grid container alignItems="flex-end">
              <Grid item>
                <Search htmlColor="#FFF" className="mx-2" />
              </Grid>
              <Grid item>
                <TextField
                  label="Search For Anime"
                  className={classes.input}
                  color="primary"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  InputProps={{
                    className: classes.input,
                  }}
                  InputLabelProps={{
                    className: classes.input,
                  }}
                />
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </header>
  );
};

export default Header;
