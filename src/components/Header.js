import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  }
}));

const Header = ({ value, switchTab }) => {
  const classes = useStyles();

  function handleChange(event, newValue) {
    console.log(newValue);
    switchTab(newValue);
  }
  return (
    <div className={classes.root}>
      <Paper position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
        >
          <Tab label="Simple Carousel" />
          <Tab label="Image Slider with Thumbs" />
          <Tab label="Lazy Loading Carousel" />
        </Tabs>
      </Paper>
    </div>
  );
};

Header.propTypes = {
  value: PropTypes.number.isRequired,
  switchTab: PropTypes.func.isRequired
};

export default Header;
