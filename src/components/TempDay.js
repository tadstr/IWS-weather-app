import React from "react";
import { days, icon, months } from "../common/common";

const TempDay = ({isFahrenheit, ...props }) => {
  const { Day, Temperature, className } = props;

  const time = props.Date
  let max = Temperature.Maximum.Value;
  let min = Temperature.Minimum.Value;

  const timeDisplay = new Date(time)
  
  const monthName = months[timeDisplay.getMonth()]
  const dayName = days[timeDisplay.getDay()] 
  const dateName = timeDisplay.getDate()  

  if (!isFahrenheit) {
    min = Math.round((min - 32) * 5/9) ;
    max = Math.round((max - 32) * 5/9) ;
  }


  //change C to F
  return (
    <div className={className}>
      <div className="day-inner">
        <h4>{Day.IconPhrase}</h4>
        <i className={icon[`${Day.IconPhrase}`]}></i>
        <h6>
          <span>{min}°</span>
          {max}°
        </h6>
        <div className="date">
          <p>{`${monthName} ${dateName}`}</p>
          <p>{`${dayName}`}</p>
        </div>
      </div>
    </div>
  );
};

export default TempDay;
