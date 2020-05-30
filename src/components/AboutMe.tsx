import React from "react";
import {
  withStyles,
  Theme,
  createStyles,
  makeStyles,
} from "@material-ui/core/styles";

import { Typography } from "@material-ui/core";

const H2 = withStyles((theme: Theme) =>
  createStyles({
    h2: {
      fontSize: "24px",
    },
  })
)(Typography);

const AboutMe: React.FC = () => {
  return (
    <>
      <H2 variant="h2">略歴</H2>
      <Typography variant="body1">
        広島の大学院卒業後、東京の大手SIerに就職して8年目
      </Typography>
    </>
  );
};

export default AboutMe;
