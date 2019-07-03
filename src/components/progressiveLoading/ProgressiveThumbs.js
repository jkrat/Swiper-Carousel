import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import Swiper from 'react-id-swiper';
import { makeStyles } from '@material-ui/styles';
import ProgressiveLoading from '.';

import '../../../node_modules/react-id-swiper/lib/styles/css/swiper.css';

const useStyles = makeStyles({
  container: {
    padding: '1rem',
    maxWidth: 800,
    margin: 'auto'
  },
  galleryTop: {
    marginBottom: 5
  },
  galleryThumbs: {
    '& .swiper-container': {
      height: 90,
      width: '100%',
      '& .swiper-wrapper': {
        '& .swiper-slide-active': {
          opacity: 1
        }
      }
    },
    marginBottom: 5
  },
  ratioBox: {
    width: '100%',
    position: 'relative',
    height: 0,
    overflow: 'hidden',
    paddingBottom: 'calc(100%/(12/9))',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover'
  },
  thumbContainer: {
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '25%',
    opacity: 0.4
  },
  picture: {
    position: 'absolute',
    top: '0',
    bottom: '0',
    left: '0',
    right: '0',
    width: '100%',
    height: '100%',
    zIndex: 2
  }
});

const ProgressiveThumbs = ({ pictures = [], vehicleName }) => {
  const classes = useStyles();

  const items = pictures.map(p => ({
    original: p.large,
    thumbnail: p.thumb,
    originalAlt: vehicleName
  }));

  const [swiper, updateSwiper] = useState(null);
  const [swiperThumbs, updateSwiperThumbs] = useState(null);

  let params = {
    // lazy: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    loop: false,
    spaceBetween: 30,
    getSwiper: updateSwiper
  };
  let thumbsParams = {
    slideToClickedSlide: true,
    slidesPerView: 'auto',
    centeredSlides: true,
    spaceBetween: 10,
    getSwiper: updateSwiperThumbs // Get swiper instance callback
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
          {items.map((item, idx) => (
            <div
              className={classes.ratioBox}
              key={`slide_${idx}`}
              style={{
                backgroundImage: `url(${item.thumbnail})`
              }}
            >
              <img
                alt={item.originalAlt}
                src={item.original}
                className={classNames(classes.picture, 'swiper-lazy')}
              />
              {/* <div className="swiper-lazy-preloader" /> */}
            </div>
          ))}
        </Swiper>
      </div>
      <div className={classes.galleryThumbs}>
        <Swiper {...thumbsParams}>
          {items.map((item, idx) => (
            <div
              key={`thumb_${idx}`}
              className={classes.thumbContainer}
              style={{ backgroundImage: `url(${item.thumbnail})` }}
            />
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ProgressiveThumbs;
