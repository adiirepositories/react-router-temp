import React, { useEffect, useState, Fragment } from 'react';
import '../App.css';
// import Search from './Search';
// import { Link } from 'react-router-dom';
// import { ReactComponent as Logo } from './sun.svg';
import { WiCelsius, WiHumidity, WiStrongWind, WiThermometer,WiThermometerExterior} from "react-icons/wi";
// import { FcAreaChart } from "react-icons/fc";
import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Swal from 'sweetalert2';

// import Box from '@material-ui/material/Box';

//search module
import { FormControl } from '@material-ui/core';
import { InputLabel } from '@material-ui/core';
import { FormHelperText } from '@material-ui/core';
// import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';

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


  useEffect(() =>{
    fetchItems();
  },[url])

  const fetchItems = async () =>{
    let data;
    //setError(false);

    try{
      data = await fetch(url);
      const items = await data.json();

    // return fetched api to state
      setCity(items);
      setTemp(items.main);
      setSys(items.sys);
      setWind(items.wind);
    
    }catch(err){
      //fetch(url);
      //setError(true)
      console.log(error);
      //setQuery('jakarta');

      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
        footer: '<a href="">City name not found..</a>',
        timer: 4000
      })
      // alert("City not found, enter the valid city");
      window.location.reload(false);
    }
   
  };

  const handleKeypress = e => {
    if (e.keyCode === 13) {
      this.btn.click();
      console.log("enter pressed");
    }
  };

// return requested api state
  return (
    <Fragment>
      <div>   
        <FormControl>
          <InputLabel color='secondary' variant='filled' htmlFor="my-input"></InputLabel>
          <Input  placeholder="Search City.." inputProps={{ 'aria-label': 'description' }} type='text' value={query} onKeyPress={handleKeypress} onChange={event => setQuery(event.target.value)}/>
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
      </div>

      {/* <div className="Temp"> */}
        <Fragment>
          <Card  className="Temp" style={{display: 'inline-block'}} sx={{ width: '75%'}} variant='outlined'>
            <CardContent>
              {/* <div>  */}
                <h2>City: {city.name} </h2> 
                <Degtemp tempprops={tempstate.temp} feels_likeprops={tempstate.feels_like} humidprops={tempstate.humidity} windprops={wind.speed}/>
                <Checkcountry countryprops={sys.country} />
              {/* </div> */}
            </CardContent>
          </Card>
        </Fragment>
      {/* </div> */}
    </Fragment>
  );  
}

function Checkcountry({countryprops}){
  var countryvar = ''
  if(countryprops === 'ID'){
       countryvar = 'Indonesia';
  }else{countryvar =countryprops }
  return(
    <h2>country: {countryvar}</h2> 
  );
}

function Degtemp({ tempprops, feels_likeprops, humidprops, windprops }) {

  var tempcol = ''
  var humidcol = ''
  if (tempprops < 25 ) {
     tempcol = "blue"
  } if (tempprops >= 26 ) {
     tempcol = "red"
  }if(humidprops >=50 ){
     humidcol = "blue"
  }if(humidprops <50 ){
     humidcol = "red"
  }else if(tempprops < 25){
    tempcol = "blue"

  } 
 
  return (
    <Fragment>
      <h2><WiThermometer color={tempcol} />Temperature: {tempprops}<WiCelsius /></h2>
      <h2><WiThermometerExterior color={tempcol} />Feels like: {feels_likeprops}<WiCelsius /></h2> 
      <h2><WiHumidity color={humidcol} />Humidity: {humidprops} %</h2>
      <h2><WiStrongWind />Wind Speed: {windprops} Km</h2>
    </Fragment>
  );
}


export default Temp;