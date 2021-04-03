import React from "react";
import { Button, Typography } from "@material-ui/core";
import Carousel from "react-material-ui-carousel";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

import useStyles from "./slideshowStyles";
import slides from "../../../constants/carouselSlides";

const Slideshow = () => {
  const classes = useStyles();

  return (
    <div className={classes.imageContainer}>
      <Carousel
        NextIcon={<ArrowForwardIosIcon />}
        PrevIcon={<ArrowBackIosIcon />}
        fullHeightHover={false}
        navButtonsProps={{ style: { backgroundColor: "transparent" } }}
      >
        {slides.map((slide) => (
          <div key={slide.id}>
            <img className={classes.slideImage} src={slide.src} alt={slide.name} title={slide.name} />
            <div className={classes.slideDescription}>
              <Typography className={classes.slideTitle} variant="h3">
                {slide.description}
              </Typography>
              <Button className={classes.slideButton} variant="contained" size="large">
                Shop Now
              </Button>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Slideshow;
