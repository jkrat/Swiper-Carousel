import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    marginBottom: 20
  }
}));

const Header = ({ value, switchTab }) => {
  const classes = useStyles();

  function handleChange(event, newValue) {
    switchTab(newValue);
  }
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} variant="fullWidth">
          <Tab label="Simple Carousel" />
          <Tab label="Image Slider with Thumbs" />
          <Tab label="Blurred Image Loader" />
        </Tabs>
      </AppBar>
    </div>
  );
};

Header.propTypes = {
  value: PropTypes.number.isRequired,
  switchTab: PropTypes.func.isRequired
};

export default Header;
