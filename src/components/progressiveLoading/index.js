import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import classNames from 'classnames';
import axios from 'axios';

const useStyles = makeStyles({
  root: {
    padding: 100
  },
  container: {
    display: 'flex',
    justifyContent: 'center'
  },
  image: {
    width: 600,
    border: '1px solid black'
  },
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

const ProgressiveLoading = () => {
  const classes = useStyles();
  const [vehicle, setVehicle] = useState('');
  const [full, setFull] = useState('');
  const [thumb, setThumb] = useState('');
  const [loaded, setLoaded] = useState(false);

  function handleImageLoad() {
    setLoaded(true);
  }

  useEffect(() => {
    async function fetchVehicle() {
      const result = await axios(
        'https://inventory.thirtysixteen.net/api/chaconautos/27089'
      );
      console.log(result.data);
      setVehicle(result.data);
      setFull(result.data.pictures[0].large);
      setThumb(result.data.pictures[0].thumb);
    }

    fetchVehicle();
  }, []);

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.image}>
          <div
            className={classNames(classes.ratioBox, {
              [classes.loaded]: loaded
            })}
            style={{
              backgroundImage: `url(${thumb})`
            }}
          >
            <img
              src={full}
              alt=""
              onLoad={handleImageLoad}
              className={classNames(classes.picture, {
                [classes.loaded]: loaded
              })}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressiveLoading;
