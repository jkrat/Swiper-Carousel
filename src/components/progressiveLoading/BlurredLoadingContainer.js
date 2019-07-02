import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import axios from 'axios';
import ProgressiveLoading from '.';

const useStyles = makeStyles({
  imageContainer: {
    margin: '100px auto',
    width: props => props.width,
    border: '1px solid black'
  }
});

const BlurredLoadingContainer = props => {
  const classes = useStyles(props);
  const [full, setFull] = useState('');
  const [thumb, setThumb] = useState('');

  useEffect(() => {
    async function fetchVehicle() {
      const result = await axios(
        'https://inventory.thirtysixteen.net/api/chaconautos/27089'
      );
      console.log(result.data);
      setFull(result.data.pictures[0].large);
      setThumb(result.data.pictures[0].thumb);
    }

    fetchVehicle();
  }, []);

  return (
    <div className={classes.imageContainer}>
      {' '}
      <ProgressiveLoading src={full} placeholder={thumb} ratio="12/9" />
    </div>
  );
};

export default BlurredLoadingContainer;
