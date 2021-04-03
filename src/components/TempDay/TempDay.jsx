import React, { useState } from "react";
import { days, icon, months } from "../../common/common";
import "./tempday.style.css"

const TempDay = ({ isFahrenheit, ...props }) => {
  const { Day, Night, Temperature, className } = props;

  const time = props.Date
  let max = Temperature.Maximum.Value;
  let min = Temperature.Minimum.Value;

  const timeDisplay = new Date(time)

  const monthName = months[timeDisplay.getMonth()]
  const dayName = days[timeDisplay.getDay()]
  const dateName = timeDisplay.getDate()

  // hook
  const [isDay, setisDay] = useState(true)
  if (!isFahrenheit) {
    min = Math.round((min - 32) * 5 / 9);
    max = Math.round((max - 32) * 5 / 9);
  }

  //change C to F
  return (
    <div className={className}>
      <div className="day-inner">
        <div onMouseEnter={() => setisDay(false)}
          onMouseLeave={() => setisDay(true)}>
          <div className="phrase">
            <h4>{isDay ? "Day" : "Night"}</h4>
            <h4>
              {isDay ? Day.IconPhrase : Night.IconPhrase}
            </h4>
          </div>
          <span className="icon-container">
            <i className={isDay ? icon[`${Day.IconPhrase}`] : icon[`${Night.IconPhrase}`]}></i>
          </span>
          <h6>
            <span>{min}°</span>
            {max}°
        </h6>
        </div>
        <div className="date">
          <p>{`${monthName} ${dateName}`}</p>
          <p>{`${dayName}`}</p>
        </div>
      </div>
    </div>
  );
};

export default TempDay;
