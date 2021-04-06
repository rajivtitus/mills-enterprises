import React, { useState, useEffect } from "react";
import { Button, Container, Paper, StepLabel, Stepper, Step, Typography } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import useStyles from "./checkoutStyles";
import ShippingForm from "./ShippingForm/ShippingForm";
import PaymentForm from "./PaymentForm/PaymentForm";
import ReviewOrder from "./ReviewOrder/ReviewOrder";
import { generateCheckoutToken } from "../../actions/checkoutActions";

function getSteps() {
  return ["Shipping Information", "Payment Details", "Confirm Order"];
}

const Checkout = () => {
  const {
    cart,
    checkout: { order },
  } = useSelector((state) => state);
  const [activeStep, setActiveStep] = useState(0);
  const [orderData, setOrderData] = useState({});
  const dispatch = useDispatch();
  const classes = useStyles();
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const getStepContent = (stepIndex) => {
    switch (stepIndex) {
      case 0:
        return <ShippingForm setOrderData={setOrderData} handleNext={handleNext} />;
      case 1:
        return (
          <PaymentForm
            orderData={orderData}
            setOrderData={setOrderData}
            handleBack={handleBack}
            handleNext={handleNext}
          />
        );
      case 2:
        return <ReviewOrder orderData={orderData} handleBack={handleBack} handleNext={handleNext} />;
      default:
        return "An error has occured. Please try again!";
    }
  };

  useEffect(() => {
    if (cart.id) dispatch(generateCheckoutToken(cart.id));
  }, [cart, dispatch]);

  return (
    <Container className={classes.container}>
      <Paper elevation={5}>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
        <>
          {activeStep === steps.length ? (
            <div className={classes.orderConfirmation}>
              <Typography variant="h6">
                Thank you for shopping with us! Your order confirmation number is: {order.id}
              </Typography>

              <Button className={classes.homeButton} component={Link} to="/" variant="outlined">
                Back To Home
              </Button>
            </div>
          ) : (
            <>{getStepContent(activeStep)}</>
          )}
        </>
      </Paper>
    </Container>
  );
};

export default Checkout;
