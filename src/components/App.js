
import React, {useEffect, useState} from "react";
import './../styles/App.css';
import WeatherDisplay from "./WeatherDisplay.js";

const [weatherData, setweatherData] = useState({temperature:0, condition:"" })

useEffect(()=>{
  setweatherData({
    temperature: 25,
    condition: "Sunny"
  },[])
})

const App = () => {

  return (
    <div>
        <WeatherDisplay temperature = {weatherData.temperature} conditions = {weatherData.condition}/>
    </div>
  )
}

export default App
