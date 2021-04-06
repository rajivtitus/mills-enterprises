import React from "react";
import { Button, Typography } from "@material-ui/core";
import { Elements, ElementsConsumer, CardElement } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import useStyles from "./paymentFormStyles";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY);

const PaymentForm = ({ handleBack, handleNext, orderData, setOrderData }) => {
  const classes = useStyles();

  const handleSubmit = async (event, elements, stripe) => {
    event.preventDefault();

    if (!stripe || !elements) return;

    const cardElement = elements.getElement(CardElement);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
      console.log("[error]", error);
    } else {
      console.log("[Payment Method]", paymentMethod);
      setOrderData({ ...orderData, paymentMethod });
      handleNext();
    }
  };

  return (
    <div className={classes.formContainer}>
      <Typography className={classes.formTitle} variant="body1">
        Please enter your card number:
      </Typography>
      <Elements stripe={stripePromise}>
        <ElementsConsumer>
          {({ elements, stripe }) => (
            <form onSubmit={(event) => handleSubmit(event, elements, stripe)}>
              <CardElement />
              <div className={classes.formActions}>
                <Button variant="outlined" onClick={handleBack}>
                  Go Back
                </Button>
                <Button type="submit" variant="contained" color="primary" disabled={!stripe}>
                  Next
                </Button>
              </div>
            </form>
          )}
        </ElementsConsumer>
      </Elements>
    </div>
  );
};

export default PaymentForm;
