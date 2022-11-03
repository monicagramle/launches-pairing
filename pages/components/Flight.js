import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card';

const Flight = () => {
  const [dataApi, setDataApi] = useState([]);

  const getFlightDetails = async () => {
    try {
      let url = `https://api.spacexdata.com/v3/launches`;
      axios.get(url).then((res) => {
        setDataApi(res.data);
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getFlightDetails();
  }, []);

  return (
    <>
      <Card flightData={dataApi} />
    </>
  );
};

export default Flight;
