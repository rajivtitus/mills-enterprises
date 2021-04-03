import React, { useState, useEffect } from "react";
import { Container, Button, Paper, StepLabel, Stepper, Step, Typography } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";

import useStyles from "./checkoutStyles";
import ShippingForm from "./ShippingForm/ShippingForm";
import PaymentForm from "./PaymentForm/PaymentForm";
import ReviewOrder from "./ReviewOrder/ReviewOrder";
import { generateCheckoutToken } from "../../actions/checkoutActions";

function getSteps() {
  return ["Shipping Information", "Payment", "Review Order"];
}

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return <ShippingForm />;
    case 1:
      return <PaymentForm />;
    case 2:
      return <ReviewOrder />;
    default:
      return "An error has occured. Please try again!";
  }
}

const Checkout = () => {
  const { id } = useSelector((state) => state.cart);
  const [activeStep, setActiveStep] = useState(0);
  // const [orderData, setOrderData] = useState({});
  const dispatch = useDispatch();
  const classes = useStyles();
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  useEffect(() => {
    if (id) dispatch(generateCheckoutToken(id));
  }, [id, dispatch]);

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
            <Typography variant="h6">All steps completed</Typography>
          ) : (
            <>
              {getStepContent(activeStep)}
              <div className={classes.stepActions}>
                <Button variant="outlined" onClick={handleBack} disabled={activeStep === 0}>
                  Go Back
                </Button>
                <Button variant="contained" color="primary" onClick={handleNext}>
                  Next
                </Button>
              </div>
            </>
          )}
        </>
      </Paper>
    </Container>
  );
};

export default Checkout;
