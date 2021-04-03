import React from "react";
import { Typography } from "@material-ui/core";

import useStyles from "./footerStyles";

const Footer = () => {
  const classes = useStyles();

  return (
    <footer className={classes.footer}>
      <Typography className={classes.footerTitle} align="center" variant="body2">
        Mills Enterprises 2020 &copy;
      </Typography>
    </footer>
  );
};

export default Footer;
