import React, { useEffect, useState, Fragment } from 'react';
import '../App.css';
import { ReactComponent as Logo } from './sun.svg';
import { WiCelsius, WiHumidity, WiStrongWind, WiThermometer,WiThermometerExterior} from "react-icons/wi";
import { FcAreaChart } from "react-icons/fc";

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';


const apiKey = "d9f3b6a5a3ed0bc6cc82a168c0f7f0cc";
const CodeURL = 'https://api.openweathermap.org/data/2.5/weather?q=London&appid=d9f3b6a5a3ed0bc6cc82a168c0f7f0cc';

// let tes = 'api.openweathermap.org/data/2.5/weather?q={city name}&appid={your api key}'
// api.openweathermap.org/data/2.5/weather?q=London,uk
// https://samples.openweathermap.org/data/2.5/weather?q=London,uk&appid=439d4b804bc8187953eb36d2a8c26a02


function Temp() {
  useEffect(() =>{
    fetchItems();
  },[])



  //State for City
  const [city, setCity] = useState({
    
  })

  

  
// function setCity(propscity){
//   if(propscity != null){
      
//       var cityvar = propscity;
//     // <h2>country: Indonesia</h2> 
//       // return countryvar;
//   }
//   return(
//     <h2>city: {cityvar}</h2> 
//     // <h2>{countryvar}</h2>

//   );
// }

  // State for windspeed
  const [wind, setWind] = useState({
    speed: null,
    deg: null
  });

  // state for sys
  const [sys, setSys] = useState({
    country: null,
    id: null,
    sunrise: null,
    sunset: null,
    type: null
  });

  // state for main temperature
  const [tempstate, setTemp] = useState({
    feels_like: null,
    humidity: null,
    pressure: null,
    temp: null,
    temp_max: null,
    temp_min: null
  });



// api request function
  const fetchItems = async () =>{
    const data = await fetch('https://api.openweathermap.org/data/2.5/weather?q=bekasi&units=metric&appid=d9f3b6a5a3ed0bc6cc82a168c0f7f0cc');
    const items = await data.json();

    // return fetched api to state
    setCity(items);
    setTemp(items.main);
    setSys(items.sys);
    setWind(items.wind);

    // console.log(items);
    // console.log(items.name);
  
  };

  console.log(city.name);




// return requested api state
  return (
    
    
    <div className="Temp">
      {
        <Fragment>

          <div className="card">
            <h2>City: {city.name} </h2> 
    
            <Degtemp tempprops={tempstate.temp} feels_likeprops={tempstate.feels_like} humidprops={tempstate.humidity} windprops={wind.speed}/>
            <Checkcountry countryprops={sys.country} />
          </div>
 
        </Fragment>
        }
    </div>

  );

 

  
}


function Checkcountry({countryprops}){
  if(countryprops === 'ID'){
      
      var countryvar = 'Indonesia';
    // <h2>country: Indonesia</h2> 
      // return countryvar;
  }else{var countryvar = 'not indonesia'}
  return(
    <h2>country: {countryvar}</h2> 
    // <h2>{countryvar}</h2>

  );
}

function Degtemp({ tempprops, feels_likeprops, humidprops, windprops }) {
  if (tempprops < 35 ) {
    var tempcol = "orange"
    // return null;
  } if (tempprops >= 35 ) {
    var tempcol = "red"
    // return null;
  }if(humidprops >=50 ){
    var humidcol = "blue"
  }if(humidprops <50 ){
    var humidcol = "red"
  }else if(tempprops < 25){
    tempcol = "blue"

  } 
 
  return (
    <Fragment>

    <h2><WiThermometer color={tempcol} />Temp: {tempprops}<WiCelsius /></h2>
    <h2><WiThermometerExterior color={tempcol} />Feels like: {feels_likeprops}<WiCelsius /></h2> 
    <h2><WiHumidity color={humidcol} />Humidity: {humidprops} %</h2>
    <h2><WiStrongWind />Wind Speed: {windprops} Km</h2> 
 

    </Fragment>

  );
}


export default Temp;




const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="h2">
          be{bull}nev{bull}o{bull}lent
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          adjective
        </Typography>
        <Typography variant="body2" component="p">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
