import React from 'react';
import '../App.css';
// import { TiWeatherSunny } from "react-icons/fa";
import { WiDayShowers } from "react-icons/wi";
import { Link } from 'react-router-dom';

// FaTemperatureLow
function Landing() {
  return (
    <div className="icontemp">
      <Link to="/temp" >
      <WiDayShowers color={'orange'} size="30vh" />
      </Link>
    </div>
  );
}

export default Landing;