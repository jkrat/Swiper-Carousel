import React from 'react';
import Swiper from 'react-id-swiper';
import { makeStyles } from '@material-ui/styles';

import '../../../node_modules/react-id-swiper/lib/styles/css/swiper.css';

const useStyles = makeStyles({
  container: {
    position: 'relative',
    padding: '1rem 4rem',
    width: '1000',
    margin: 'auto',
    '& .swiper-container': {
      padding: '0 2rem'
    }
  },
  media: {
    padding: 5
  }
});

const SimpleCarousel = ({ items }) => {
  const classes = useStyles();
  const params = {
    breakpointsInverse: true,
    slidesPerView: 1,
    spaceBetween: 5,
    breakpoints: {
      700: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      1000: {
        slidesPerView: 3,
        spaceBetween: 30
      }
    }
  };
  return (
    <div className={classes.container}>
      <Swiper {...params}>
        {items.map(item => (
          <div key={item.index} className={classes.media}>
            {item.card}
          </div>
        ))}
      </Swiper>
    </div>
  );
};

export default SimpleCarousel;
