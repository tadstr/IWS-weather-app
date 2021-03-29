import axios from "axios";
const API_KEY = "0ggA3deRH22GFeYDqjWkoirbAz1tEU1D";
const IP_ADDRESS = "113.190.104.63";

export const fetchLocation = async () => {
  try {
    const res = await axios.get(`http://ip-api.com/json/${IP_ADDRESS}`);
    return res.data;
  } catch (e) {
    console.log("ERROR", e);
  }
};

export const fetchCity = async () => {
  try {
    const res = await axios.get(`http://ip-api.com/json/${IP_ADDRESS}`);
    const city = res.data.city;
    return city;
  } catch (e) {
    console.log("ERROR", e);
  }
};

export const fetchLocationKey = async () => {
  try {
    const city = await fetchCity();
    const res = await axios.get(
      `http://dataservice.accuweather.com/locations/v1/cities/search?q=${city}&apikey=${API_KEY}`
    );
    const data = res.data;
    let locationKey = "";
    data.forEach((element) => {
      if (
        element.AdministrativeArea.CountryID === "VN" &&
        element.AdministrativeArea.EnglishName === "Hanoi"
      ) {
        locationKey = element.Key;
      }
    });
    return locationKey;
  } catch (e) {
    console.log("ERROR", e);
  }
};

const getWeatherForecast = async () => {
  try {
    const locationKey = await fetchLocationKey();
    const res = await axios.get(
      `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${locationKey}?apikey=${API_KEY}`
    );
    const data = res.data.DailyForecasts;
    return data;
  } catch (e) {
    console.log("ERROR", e);
  }
};

export default getWeatherForecast;
