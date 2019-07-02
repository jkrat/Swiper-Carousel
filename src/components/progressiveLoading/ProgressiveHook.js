import React, { useState, useEffect, useReducer } from 'react';
import { makeStyles } from '@material-ui/styles';
import axios from 'axios';
import BlurImageLoader from './BlurImageLoader';

const useStyles = makeStyles({
  root: {
    padding: 100
  },
  container: {
    display: 'flex',
    justifyContent: 'center'
  },
  image: {
    width: 800,
    height: 800,
    padding: 199,
    border: '1px solid black'
  }
});

const ProgressiveHook = () => {
  const classes = useStyles();
  const [full, setFull] = useState('');
  const [thumb, setThumb] = useState('');

  useEffect(() => {
    async function fetchVehicle() {
      const result = await axios(
        'https://inventory.thirtysixteen.net/api/chaconautos/27089'
      );
      setFull(result.data.pictures[0].large);
      setThumb(result.data.pictures[0].thumb);
      console.log(result.data.pictures[0].thumb);
    }

    fetchVehicle();
  }, []);

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.image}>
          <BlurImageLoader
            width={400}
            height={400}
            image={full}
            placeholder="https://ca-vimg.s3.amazonaws.com/vehicles/019813/388120/thumb_IMG_5979.JPG"
          />
        </div>
      </div>
    </div>
  );
};

export default ProgressiveHook;
