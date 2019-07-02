import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import classNames from 'classnames';

const useStyles = makeStyles({
  ratioBox: {
    width: '100%',
    position: 'relative',
    height: 0,
    overflow: 'hidden',
    paddingBottom: 'calc(100%/(12/9))',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    filter: 'blur(8px)',
    transform: 'scale(1)',
    transition: 'filter 1s ease'
  },
  picture: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    width: '100%',
    height: '100%'
  },
  loaded: {
    filter: 'none'
  }
});

const ProgressiveLoading = ({
  src,
  placeholder,
  altText = '',
  ratio = '16/9'
}) => {
  const classes = useStyles();
  const [loaded, setLoaded] = useState(false);

  function handleImageLoad() {
    setLoaded(true);
  }

  return (
    <div
      className={classNames(classes.ratioBox, {
        [classes.loaded]: loaded
      })}
      style={{
        backgroundImage: `url(${placeholder})`
      }}
    >
      <img
        src={src}
        alt={altText}
        onLoad={handleImageLoad}
        className={classNames(classes.picture, {
          [classes.loaded]: loaded
        })}
      />
    </div>
  );
};

ProcessingInstruction.PropTypes = {
  src: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  altText: PropTypes.string,
  ratio: PropTypes.string
};

export default ProgressiveLoading;
