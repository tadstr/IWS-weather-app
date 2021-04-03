import React, { useEffect, useState } from 'react'
import "./widget.style.css"
import { nanoid } from "nanoid";
import getWeatherForecast, { fetchLocation } from "../../fetchData/fetchData";
import TempDay from "../TempDay/TempDay"

const Widget = () => {

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
  }, []);

  const handleChange = () => {
    setIsFahrenheit(!isFahrenheit)
  };

  return (
    <section className="weatherWidget">
      <h1>Simple Weather Widget</h1>
      <div className="widget">
        {isLoaded ?
          <div className="widget-content">
            <div className="widget-top">
              <h2>
                <img className="whe" src="images/weather.png" alt="" />
                {`${locationData.city}, ${locationData.country}`}
              </h2>
              <ul>
                <li onClick={handleChange}>
                  <p className={isFahrenheit ? 'cen' : ''}>°F</p>
                </li>
                <li onClick={handleChange}>
                  <p className={!isFahrenheit ? 'cen' : ''}>°C</p>
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
          : <div className="lds-hourglass"></div>}
      </div>
    </section>
  )
}

export default Widget;