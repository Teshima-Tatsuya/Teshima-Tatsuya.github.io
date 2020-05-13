import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import { Route } from "react-router-dom";
import AboutMe from "./AboutMe";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    main: {
      flexGrow: 1,
    },
  })
);

const Main: React.FC = () => {
  return (
    <Container>
      <Box my={2}>
        this is main contents teshima's portfolio 現在、作成中です。
      </Box>
      <Route path="/aboutme" component={AboutMe}></Route>
    </Container>
  );
};

export default Main;
