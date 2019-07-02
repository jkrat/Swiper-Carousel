import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProgressiveThumbs from './ProgressiveThumbs';

const ProgressiveThumbsContainer = () => {
  const [vehicle, setVehicle] = useState([]);

  useEffect(() => {
    async function fetchVehicle() {
      const result = await axios(
        'https://inventory.thirtysixteen.net/api/chaconautos/27089'
      );
      setVehicle(result.data);
    }

    fetchVehicle();
  }, []);

  return <ProgressiveThumbs pictures={vehicle.pictures} vehicle={vehicle} />;
};

export default ProgressiveThumbsContainer;
