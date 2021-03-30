import React, { useEffect, useState } from "react";
import "./App.css";
import { nanoid } from "nanoid";
import TempDay from "./components/TempDay";
import getWeatherForecast, { fetchLocation } from "./fetchData/fetchData";

function App() {
  const [weatherData, setWeatherData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isFahrenheit, setIsFahrenheit] = useState(true)
  const [locationData, setLocationData] = useState({});

  useEffect(() => {
    const getData = async () => {
      try {
        const weatherData = await getWeatherForecast();
        const locationData = await fetchLocation();
        setWeatherData(weatherData);
        setLocationData(locationData);
        setIsLoaded(true);
      } catch (err) {
        setIsLoaded(true);
      }
    };
    getData();
    // getLocation();
    // const getLocation = async () => {
    //   try {
    //     const data = await fetchLocation();
    //     setIsLoaded(true);
    //     setLocationData(data);
    //   } catch (err) {
    //     setIsLoaded(true);
    //   }
    // };
  }, []);


  const handleChange = () => {
    setIsFahrenheit(!isFahrenheit)
  };

  return (
    isLoaded ?
    <>
      <h1>Simple Weather Widget</h1>
      <div className="widget">
        <div className="widget-top">
          <h2>
            <img className="whe" src="images/weather.png" alt="" />
            {`${locationData.city}, ${locationData.country}`}
          </h2>
          <ul>
            <li onClick={handleChange}>
              <p className={isFahrenheit ? '' : 'cen'}>°F</p>
            </li>
            <li onClick={handleChange}>
              <p className={!isFahrenheit ? '' : 'cen'}>°C</p>
            </li>
          </ul>
          <div className="clear"> </div>
        </div>
        <div className="widget-bottom">{
          weatherData.map(({ id, ...props }) => (
            <TempDay key={(id = nanoid())} {...props} isFahrenheit={isFahrenheit} className="day" />
          ))
        }
          <div className="clear"> </div>
        </div>
      </div>

      <div className="copy-right">
        <p>
          © 2019 Simple Weather Widget. All rights reserved | Design by{" "}
          <a href="http://w3layouts.com/" target="_blank" rel="noopener noreferrer">
            {" "}
            W3layouts{" "}
          </a>
        </p>
      </div>
    </> : <div class="lds-hourglass"></div>
  );
}

export default App;
