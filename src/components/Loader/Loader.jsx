import React from "react";
import { Container, CircularProgress } from "@material-ui/core";

import useStyles from "./loaderStyles";

const Loader = () => {
  const classes = useStyles();

  return (
    <Container className={classes.loadingCart}>
      <CircularProgress />
    </Container>
  );
};

export default Loader;
