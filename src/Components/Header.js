import {
  AppBar,
  Container,
  Select,
  Toolbar,
  Typography,
  MenuItem,
  createTheme,
  ThemeProvider,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import { useNavigate } from "react-router-dom";

const useStyles = makeStyles(() => ({
  title: {
    flex: 1,
    color: "gold",
    fontFamily: "Rubik",
    cursor: "pointer",
  },
}));

const Header = () => {
  const classes = useStyles();

  const navigate = useNavigate();

  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#fff",
      },
      type: "dark",
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar color="transparent" position="static">
        <Container>
          <Toolbar>
            <Typography
              onClick={() => navigate("/")}
              className={classes.title}
              variant="h6"
            >
              Crypto Tracker
            </Typography>

            <Select
              variant="outlined"
              style={{ width: 100, height: 40, marginRight: 15 }}
            >
              <MenuItem value={"USD"}>USD</MenuItem>
              <MenuItem value={"INR"}>INR</MenuItem>
            </Select>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
};

export default Header;
