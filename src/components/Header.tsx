import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import { Route, Link } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  })
);

const Header: React.FC = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            Teshima's portfolio
          </Typography>

          <Link to="/aboutme">
            <Button color="inherit">about me</Button>
          </Link>
          <Button color="inherit">skills</Button>
          <Button color="inherit">work</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
