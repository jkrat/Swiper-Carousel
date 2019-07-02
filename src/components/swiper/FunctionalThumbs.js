import React, { useState, useEffect } from 'react';
import Swiper from 'react-id-swiper';
// import { Navigation, Controller } from 'swiper/dist/js/swiper.esm';
import { makeStyles } from '@material-ui/styles';

import '../../../node_modules/react-id-swiper/lib/styles/css/swiper.css';

const useStyles = makeStyles({
  container: {
    padding: '1rem',
    maxWidth: 1000,
    height: 500,
    margin: 'auto'
  },
  galleryTop: {
    height: '80%',
    width: '100%',
    '& .swiper-container': {
      height: '100%',
      width: '100%'
    },
    marginBottom: 5
  },
  galleryThumbs: {
    height: '20%',
    width: '100%',
    '& .swiper-container': {
      height: '100%',
      width: '100%',
      '& .swiper-wrapper': {
        '& .swiper-slide-active': {
          opacity: 1
        }
      }
    },
    marginBottom: 5
  },
  topContainer: {
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  },
  thumbContainer: {
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '25%',
    hieght: '100%',
    opacity: 0.4
  }
});

const FunctionalThumbs = ({ items }) => {
  const classes = useStyles();

  const [swiper, updateSwiper] = useState(null);

  const [swiperThumbs, updateSwiperThumbs] = useState(null);

  let params = {
    // modules: [Controller, Navigation],
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    loop: false,
    spaceBetween: 30,
    getSwiper: updateSwiper
  };
  let thumbsParams = {
    // modules: [Controller],
    slideToClickedSlide: true,
    slidesPerView: 'auto',
    centeredSlides: true,
    spaceBetween: 10,
    getSwiper: updateSwiperThumbs, // Get swiper instance callback
    style: {
      width: '100px'
    }
  };

  // Bind swiper and swiper thumbs
  useEffect(() => {
    if (swiper && swiperThumbs) {
      swiper.controller.control = swiperThumbs;
      swiperThumbs.controller.control = swiper;
    }
  }, [swiper, swiperThumbs]);

  return (
    <div className={classes.container}>
      <div className={classes.galleryTop}>
        <Swiper {...params}>
          {items.map(item => (
            <div
              key={`slide_${item.index}`}
              style={{ backgroundImage: `url(${item.image})` }}
            />
          ))}
        </Swiper>
      </div>
      <div className={classes.galleryThumbs}>
        <Swiper {...thumbsParams}>
          {items.map(item => (
            <div
              key={item.index}
              className={classes.thumbContainer}
              style={{ backgroundImage: `url(${item.image})` }}
            />
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default FunctionalThumbs;
