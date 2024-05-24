import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Gwalior",
    Humidity: 48,
    feelsLike: 32.31,
    temp: 31.05,
    tempMax: 31.05,
    tempMin: 31.05,
    weather: "haze",
  });
  let updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  };
  return (
    <>
      <div>
        <h2>Weather App</h2>
        <SearchBox updateInfo={updateInfo} />
        <InfoBox info={weatherInfo} />
      </div>
    </>
  );
}
