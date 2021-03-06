import React from "react";
import { Button, Typography } from "@material-ui/core";
import Carousel from "react-material-ui-carousel";

import useStyles from "./slideshowStyles";
import slides from "../../../constants/carouselSlides";

const Slideshow = () => {
  const classes = useStyles();

  return (
    <div className={classes.imageContainer}>
      <Carousel
        NextIcon={false}
        PrevIcon={false}
        fullHeightHover={false}
        navButtonsProps={{ style: { backgroundColor: "transparent" } }}
      >
        {slides.map((slide) => (
          <div key={slide.id}>
            <img className={classes.slideImage} src={slide.src} alt={slide.name} title={slide.name} />
            <div className={classes.overlay}>
              <div className={classes.slideDescription}>
                <Typography className={classes.slideTitle} variant="h3">
                  {slide.description}
                </Typography>
                <Button className={classes.slideButton} variant="contained" size="large">
                  Shop Now
                </Button>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Slideshow;
