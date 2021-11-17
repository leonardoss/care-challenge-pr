import React, { useState, useEffect } from 'react';
import { Button, Typography, Box } from '@material-ui/core';
import { styled } from '@mui/styles';

const MyBox = styled(Box)({
  background: 'aliceblue',
  padding: '12px',
});

const convert = (temp: any) => {
  let converted = 0;

  if (temp) {
    converted = temp - 273.15
  }

  return converted.toFixed(1);
};

const Weather = (props: any) => {
  const [data, setData] = useState<{ name: string, main: any }>({ name: '', main: {} });
  const [loading, setLoading] = useState(true);
  const [updateTemp, setUpdateTemp] = useState(false);
  const city = props.name

  useEffect(() => {
    fetch('http://api.openweathermap.org/data/2.5/weather?appid=52c005afb94bec44bbeee6101b54ffa4&q=' + city).then((response) => {
      return response.json()
    }).then((data) => {
      setData(data);
      return data
    });

    setLoading(false);
    setUpdateTemp(false)

  }, [city, updateTemp]);

  console.log('##### render Weather');

  return (
    <div style={{
      padding: '2px',
    }}>
      {
        loading ? (
          <p> {props.isLoadingText}</p >
        ) : (
          <MyBox>
            <Typography variant="h4">{data?.name}</Typography>

            <Typography>
              min: {convert(data.main.temp_min)} <sup>°c</sup> | max:{' '}
              {convert(data.main.temp_max)} <sup>°c</sup>
            </Typography>
            <br />
            <Button variant="contained">update temperature</Button>
          </MyBox>
        )}
    </div >
  );
};

export default Weather;