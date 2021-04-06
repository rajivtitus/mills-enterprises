import React from "react";
import { Button, Divider, Grid, Typography } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";

import useStyles from "./reviewOrderStyles";
import { captureCheckout } from "../../../actions/checkoutActions";
import { refreshCart } from "../../../actions/cartActions";

const ReviewOrder = ({ handleBack, handleNext, orderData }) => {
  const {
    cart,
    checkout: { token },
  } = useSelector((state) => state);

  const dispatch = useDispatch();
  const classes = useStyles();

  const submitOrder = (event) => {
    event.preventDefault();
    dispatch(captureCheckout(token, orderData));
    dispatch(refreshCart());
    handleNext();
  };

  return (
    <div className={classes.formContainer}>
      <Typography variant="h6">Order Summary</Typography>
      <Divider className={classes.divider} />
      <div id="shipping-info">
        <Typography variant="body1">{`${orderData.firstName} ${orderData.lastName}`}</Typography>
        <Typography variant="body1">{orderData.email}</Typography>
        <Typography variant="body1">{orderData.street}</Typography>
        <Typography variant="body1">{`${orderData.city} ${orderData.postalCode}`}</Typography>
      </div>
      <Divider className={classes.divider} />
      <Grid container spacing={3}>
        {cart.line_items.map((item) => (
          <Grid item xs={12} key={item.id} className={classes.productRow}>
            <div className={classes.productCell}>
              <img className={classes.productImage} src={item.media.source} alt={item.product_name} />
              <div>
                <Typography variant="body1">{item.product_name}</Typography>
                <Typography variant="body2" color="textSecondary">
                  Qty: {item.quantity}
                </Typography>
              </div>
            </div>
            <Typography variant="body1">{item.price.formatted_with_symbol}</Typography>
          </Grid>
        ))}
      </Grid>
      <Divider className={classes.divider} />
      <Typography variant="h6" align="right">
        Total: {cart.subtotal.formatted_with_symbol}
      </Typography>
      <form onSubmit={submitOrder}>
        <div className={classes.formActions}>
          <Button variant="outlined" onClick={handleBack}>
            Go Back
          </Button>
          <Button type="submit" variant="contained" color="primary">
            Confirm
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ReviewOrder;
