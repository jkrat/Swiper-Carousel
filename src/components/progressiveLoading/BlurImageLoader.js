import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: props => ({
    width: props.width,
    height: props.height,
    transition: 'filter 1s ease',
    backgroundPosition: '50% 50%',
    backgroundOrigin: 'border-box',
    backgroundSize: 'cover',
    zIndex: 1
  })
});

const BlurImageLoader = ({ placeholder, image, ...props }) => {
  const classes = useStyles(props);
  const runOnce = true;
  const [loadState, setLoadState] = useState({
    src: placeholder,
    loaded: false
  });

  useEffect(() => {
    const img = new Image();

    img.onload = function() {
      setLoadState({
        src: img.src,
        loaded: true
      });
    };

    img.src = image;
  }, [runOnce, image]);

  return (
    <div
      className={classes.root}
      {...props}
      style={{
        filter: !loadState.loaded ? 'blur(3px)' : 'unset',
        backgroundImage: `url(${loadState.src})`
      }}
    />
  );
};

export default BlurImageLoader;
