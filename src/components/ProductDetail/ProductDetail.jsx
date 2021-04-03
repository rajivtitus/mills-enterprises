import React, { useState } from "react";
import { Container, Button, Divider, Grid, IconButton, Typography } from "@material-ui/core";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import useStyles from "./productDetailStyles";
import Loader from "../Loader/Loader";
import Product from "../Product/Product";
import { addToCart } from "../../actions/cartActions";

const ProductDetail = () => {
  const { pathname } = useLocation();
  const productId = pathname.split("/")[2];
  const product = useSelector((state) => state.products.filter((product) => product.id === productId))[0];
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();
  const classes = useStyles();

  if (!product) return <Loader />;

  return (
    <>
      <Container className={classes.container}>
        <div className={`${classes.productImg} ${classes.productFlex}`}>
          <img src={product.media.source} alt={product.name} title={product.name} />
        </div>
        <div className={`${classes.productDesc} ${classes.productFlex}`}>
          <Typography variant="h4">{product.name}</Typography>
          <Typography variant="body1" color="textSecondary" dangerouslySetInnerHTML={{ __html: product.description }} />
          <Typography variant="h6">Price: {product.price.formatted_with_symbol}</Typography>
          <div>
            <div className={classes.productActions}>
              <Typography variant="h6">Quantity:</Typography>
              <IconButton
                onClick={() => (quantity > 1 ? setQuantity((prevQuantity) => prevQuantity - 1) : setQuantity(1))}
              >
                <RemoveIcon />
              </IconButton>
              <Typography variant="body1">{quantity}</Typography>
              <IconButton onClick={() => setQuantity((prevQuantity) => prevQuantity + 1)}>
                <AddIcon />
              </IconButton>
            </div>
            <Button
              onClick={() => dispatch(addToCart(product.id, quantity))}
              variant="outlined"
              startIcon={<AddShoppingCartIcon />}
            >
              Add To Cart
            </Button>
          </div>
        </div>
      </Container>
      {product.related_products.length && (
        <Container style={{ marginBottom: "7.5rem" }}>
          <Divider />
          <Typography variant="h5" style={{ marginTop: "1rem" }} gutterBottom>
            Related Items
          </Typography>
          <Grid container spacing={3}>
            {product.related_products.map((product) => (
              <Grid item xs={6} sm={4} md={3} key={product.id}>
                <Product product={product} />
              </Grid>
            ))}
          </Grid>
        </Container>
      )}
    </>
  );
};

export default ProductDetail;
