import React, { useEffect, useState, Fragment } from 'react';
import '../App.css';
import { WiCelsius, WiHumidity, WiStrongWind, WiThermometer, WiThermometerExterior } from "react-icons/wi";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Swal from 'sweetalert2';

//search module
import { FormControl } from '@material-ui/core';
import { InputLabel } from '@material-ui/core';
import { FormHelperText } from '@material-ui/core';
// import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';

// import { Opacity } from '@material-ui/icons';

// const apiKey = "d9f3b6a5a3ed0bc6cc82a168c0f7f0cc";
// const CodeURL = 'https://api.openweathermap.org/data/2.5/weather?q=London&appid=d9f3b6a5a3ed0bc6cc82a168c0f7f0cc';

// api tesss - https://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=439d4b804bc8187953eb36d2a8c26a02

function Temp() {

  const [query, setQuery] = useState('bandung');
  const [url, setUrl] = useState('https://api.openweathermap.org/data/2.5/weather?q=bandung&units=metric&appid=d9f3b6a5a3ed0bc6cc82a168c0f7f0cc');
  const [error, setError] = useState(false);
  //State for City
  const [city, setCity] = useState({})
  // State for windspeed
  const [wind, setWind] = useState({
    speed: "null",
    deg: "null"
  });

  const [weather, setWeather] = useState('null')


  // state for sys
  const [sys, setSys] = useState({
    country: "null",
    id: "null",
    sunrise: "null",
    sunset: "null",
    type: "null"
  });

  // state for main temperature
  const [tempstate, setTemp] = useState({
    feels_like: "null",
    humidity: "null",
    pressure: "null",
    temp: "null",
    temp_max: "null",
    temp_min: "null"
  });

  useEffect(() => {
    fetchItems();
  }, [url])

  const fetchItems = async () => {
    let data;
    //setError(false);

    try {
      data = await fetch(url);
      // console.log('await 1 fetch');

      const items = await data.json();
      // console.log(items.weather[0].main);

      // return fetched api to state
      setCity(items);
      setTemp(items.main);
      setWeather(items.weather[0].description);
      setSys(items.sys);
      setWind(items.wind);
    } catch (err) {
      //fetch(url);
      //setError(true)
      console.log(error);
      //setQuery('jakarta');

      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
        footer: '<a href="">City name not found..</a>'
      })
      // alert("City not found, enter the valid city");
      window.location.reload(false);
    }

  };

  // console.log('3');

  // console.log(weather);

  // Dislpay requested api state
  return (
    <Fragment>
      <Box sx={{mb: '1.3rem'}}>
        <FormControl>
          <InputLabel color='secondary' variant='filled' htmlFor="my-input"></InputLabel>
            <Input variant="body1" color="text.secondary" placeholder="Search City.." inputProps={{ 'aria-label': 'description' }} type='text' value={query} onChange={event => setQuery(event.target.value)} />
          <FormHelperText id="my-helper-text">Input the correct city!</FormHelperText>
          <Button
            type="button"
            onClick={() => setUrl(`https://api.openweathermap.org/data/2.5/weather?q=${query}&units=metric&appid=d9f3b6a5a3ed0bc6cc82a168c0f7f0cc`)}
            variant="contained"
            color="secondary"
            startIcon={<SearchIcon />}
          >Get Weather
          </Button>
          {/* {error && <div style={{color: `red`}}>some error occurred, while fetching api</div>} */}
        </FormControl>
      </Box>

      {/* <div className="Temp"> */}
      <Fragment>
        <Card style={{ display: 'inline-block', opacity: 0.5, boxShadow: 5, borderRadius: 2, }} sx={{ minWidth: 540, boxShadow: 5, borderRadius: 2,}} variant='outlined'>
          <CardContent>

            <Typography sx={{ letterSpacing: 2 }} variant="body1" align="center" color="text.primary" paragraph>
              <h2>City: {city.name} </h2>
              <h2>Weather: {weather} </h2>
              <Degtemp tempprops={tempstate.temp} feels_likeprops={tempstate.feels_like} humidprops={tempstate.humidity} windprops={wind.speed} />
              <Checkcountry countryprops={sys.country} />
            </Typography>
            {/* <div>  */}
            {/* <h2>City: {city.name} </h2>
            <h2>Weather: {weather} </h2>
            <Degtemp tempprops={tempstate.temp} feels_likeprops={tempstate.feels_like} humidprops={tempstate.humidity} windprops={wind.speed} />
            <Checkcountry countryprops={sys.country} /> */}
            {/* </div> */}
          </CardContent>
        </Card>
      </Fragment>
      {/* </div> */}
    </Fragment>
  );
}

function Checkcountry({ countryprops }) {
  var countryvar = ''
  if (countryprops === 'ID') {
    countryvar = 'Indonesia';
  } else { countryvar = countryprops }
  return (
    <h2>country: {countryvar}</h2>
  );
}

function Degtemp({ tempprops, feels_likeprops, humidprops, windprops }) {

  var tempcol = ''
  var humidcol = ''
  if (tempprops < 25) {
    tempcol = "blue"
  } if (tempprops >= 26) {
    tempcol = "red"
  } if (humidprops >= 50) {
    humidcol = "blue"
  } if (humidprops < 50) {
    humidcol = "red"
  } else if (tempprops < 25) {
    tempcol = "blue"

  }

  return (
    <Fragment>
      <h2><WiThermometer color={tempcol} />Temperature: {tempprops}<WiCelsius /></h2>
      <h2><WiThermometerExterior color={tempcol} />Feels like: {feels_likeprops}<WiCelsius /></h2>
      <h2><WiHumidity color={humidcol} />Humidity: {humidprops} %</h2>
      <h2><WiStrongWind />Wind Speed: {windprops} m/s</h2>
    </Fragment>
  );
}


export default Temp;