import React from "react";
import {
  Button,
  Container,
  IconButton,
  Typography,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  Paper,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import useStyles from "./cartStyles";
import Loader from "../Loader/Loader";
import { emptyCart, updateCart } from "../../actions/cartActions";

const Cart = () => {
  const { line_items } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const classes = useStyles();

  const EmptyCart = () => (
    <div className={classes.emptyCart}>
      <Typography variant="h5" color="textSecondary" align="center">
        There are currently no items in your Shopping Cart!
      </Typography>
      <Button component={Link} to="/" variant="outlined">
        Shop Now
      </Button>
    </div>
  );

  const FilledCart = () => (
    <div>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Product Name</TableCell>
              <TableCell align="center">Quantity</TableCell>
              <TableCell align="center">Price</TableCell>
              <TableCell align="center">Total</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {line_items.map((item) => (
              <TableRow key={item.id}>
                <TableCell className={classes.productCell}>
                  <img className={classes.cartImage} src={item.media.source} alt={item.name} />
                  <Typography variant="h6">{item.name}</Typography>
                </TableCell>
                <TableCell align="center">
                  <IconButton onClick={() => dispatch(updateCart(item.id, item.quantity - 1))}>
                    {item.quantity === 1 ? <DeleteIcon /> : <RemoveIcon />}
                  </IconButton>
                  {item.quantity}
                  <IconButton onClick={() => dispatch(updateCart(item.id, item.quantity + 1))}>
                    <AddIcon />
                  </IconButton>
                </TableCell>
                <TableCell align="center">{item.price.formatted_with_symbol}</TableCell>
                <TableCell align="center">{`₹${item.quantity * item.price.formatted}`}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div className={classes.cartActions}>
        <Button onClick={() => dispatch(emptyCart())} variant="contained">
          Empty Cart
        </Button>
        <Button component={Link} to="/checkout" variant="contained" color="primary">
          Checkout
        </Button>
      </div>
    </div>
  );

  if (!line_items) return <Loader />;

  return (
    <Container className={classes.cartContainer}>
      <Typography className={classes.cartTitle} variant="h4">
        Your Shopping Cart
      </Typography>
      {!line_items.length ? <EmptyCart /> : <FilledCart />}
    </Container>
  );
};

export default Cart;
