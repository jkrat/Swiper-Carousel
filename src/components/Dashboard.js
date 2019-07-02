import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Header from './Header';
import Swiper from './swiper';
import FunctionalThumbs from './swiper/FunctionalThumbs';
import BlurredLoadingContainer from './progressiveLoading/BlurredLoadingContainer';
import { getCards, getImages } from '../helpers';

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 1300,
    margin: '0 auto'
  },
  imageContainer: {
    margin: '100px auto',
    width: 600,
    border: '1px solid black'
  }
}));

const Dashboard = () => {
  const classes = useStyles();
  const [tab, setTab] = useState(0);

  function handleSwitchTab(newValue) {
    setTab(newValue);
  }

  return (
    <div className={classes.root}>
      <Header value={tab} switchTab={handleSwitchTab} />
      <div style={{ height: 100, backgroundColor: 'green' }} />
      {tab === 0 && <Swiper items={getCards(8)} />}
      {tab === 1 && <FunctionalThumbs items={getImages(8)} />}
      {tab === 2 && <BlurredLoadingContainer width={600} />}
    </div>
  );
};

export default Dashboard;
