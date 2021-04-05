import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  formContainer: {
    padding: "1rem 2rem",
  },
}));

const ReviewOrder = ({ handleBack, handleNext, orderData }) => {
  const classes = useStyles();

  return (
    <div className={classes.formContainer}>
      <Typography variant="h6">Review Order</Typography>
      <form></form>
    </div>
  );
};

export default ReviewOrder;
