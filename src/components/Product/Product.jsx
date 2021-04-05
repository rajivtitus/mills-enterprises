import React from "react";
import { Card, CardMedia, CardContent, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

import useStyles from "./productStyles";

const Product = ({ product }) => {
  const classes = useStyles();

  return (
    <Link to={`/product/${product.id}`} className={classes.link}>
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image={product.media.source}
          src={product.media.source}
          title={product.name}
        />
        <CardContent>
          <Typography className={classes.cardTitle} variant="h6" gutterBottom>
            {product.name}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            {product.price.formatted_with_symbol}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  );
};

export default Product;
