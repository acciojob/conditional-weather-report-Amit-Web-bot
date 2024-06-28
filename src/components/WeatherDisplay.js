import React from "react";

const WeatherDisplay = function (props){
    let  isvalid = false
    let temp = props.temperature
    if(temp>20){
        isvalid = true;
    }
    return 
     <div>
        <p style = {isvalid ? {color:'red'}: {color:'blue'}}>{props.temperature}</p>
        <p>{props.condition}</p>
    </div> 
}
export default WeatherDisplay
