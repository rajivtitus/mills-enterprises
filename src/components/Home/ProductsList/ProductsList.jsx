import React from "react";
import { Container, Grid, Typography } from "@material-ui/core";
import { useSelector } from "react-redux";

import useStyles from "./productsListStyles";
import Loader from "../../Loader/Loader";
import Product from "../../Product/Product";

const ProductsList = () => {
  const products = useSelector((store) => store.products);
  const classes = useStyles();

  return !products.length ? (
    <Loader />
  ) : (
    <Container className={classes.container}>
      <Typography variant="h5" className={classes.title}>
        All Products
      </Typography>
      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid item xs={6} sm={4} md={3} key={product.id}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ProductsList;
