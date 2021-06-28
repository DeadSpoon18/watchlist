import React from "react";
import { Link as RouterLink } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Container, makeStyles, Button } from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    fontFamily: "Montserrat",
  },
  btn: {
    backgroundColor: "#0C4271",
    marginLeft: 10,
    color: "white",
    fontFamily: "Montserrat",
  },
  nav: {
    background: "#0A1931",
  },
});

const LinkBehavior = React.forwardRef((props, ref) => (
  <RouterLink ref={ref} to="/getting-started/installation/" {...props} />
));

const Header = () => {
  const classes = useStyles();
  return (
    <header className={classes.root}>
      <AppBar position="static" className={classes.nav}>
        <Container>
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              WatchList
            </Typography>

            <Button
              variant="outlined"
              component={LinkBehavior}
              to="/"
              className={classes.btn}
            >
              {" "}
              Watch List
            </Button>
            <Button
              variant="outlined"
              component={LinkBehavior}
              to="/watched"
              className={classes.btn}
            >
              {" "}
              Watched
            </Button>
            <Button
              variant="outlined"
              component={LinkBehavior}
              to="/add"
              className={classes.btn}
            >
              {" "}
              + Add
            </Button>
          </Toolbar>
        </Container>
      </AppBar>
    </header>
  );
};

export default Header;
