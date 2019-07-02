import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  root: {
    padding: 100
  },
  container: {
    display: 'flex',
    justifyContent: 'space-around'
  },
  image: {
    width: 300,
    border: '1px solid black'
  }
});

const ProgressiveLoading = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.image} />
        <img className={classes.image} src="/static/paella.jpg" alt="" />
      </div>
    </div>
  );
};

export default ProgressiveLoading;
