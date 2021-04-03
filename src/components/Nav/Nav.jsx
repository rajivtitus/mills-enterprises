import React from "react";
import { AppBar, Badge, CssBaseline, IconButton, Toolbar, Typography } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import useStyles from "./navStyles";
import logo from "../../assets/logo.jpeg";

const Nav = () => {
  const { total_items } = useSelector((state) => state.cart);
  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <AppBar className={classes.appBar}>
        <Toolbar className={classes.toolBar}>
          <Typography component={Link} to="/" className={classes.title} variant="h6">
            <img className={classes.logo} src={logo} alt="logo" title="Mills Enterprises" />
            Mills Enterprises
          </Typography>
          <IconButton component={Link} to="/cart" aria-label="cart" color="inherit">
            <Badge badgeContent={total_items} color="primary">
              <ShoppingCartIcon fontSize="large" />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Nav;
