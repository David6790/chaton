import React from "react";
const { useState, useEffect } = React;

const TimeCountDown = (props) => {
  const [countdownDate] = useState(new Date("05/09/2025").getTime());
  const [state, setState] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const intervalId = setInterval(() => setNewTime(), 1000);
    return () => clearInterval(intervalId);
    // eslint-disable-next-line
  }, []);

  const setNewTime = () => {
    if (countdownDate) {
      const currentTime = new Date().getTime();
      const distanceToDate = countdownDate - currentTime;

      let days = Math.floor(distanceToDate / (1000 * 60 * 60 * 24));
      let hours = Math.floor(
        (distanceToDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let minutes = Math.floor(
        (distanceToDate % (1000 * 60 * 60)) / (1000 * 60)
      );
      let seconds = Math.floor((distanceToDate % (1000 * 60)) / 1000);

      // Ajout de zéro si nécessaire
      days = `${days}`;
      hours = hours < 10 ? `0${hours}` : hours;
      minutes = minutes < 10 ? `0${minutes}` : minutes;
      seconds = seconds < 10 ? `0${seconds}` : seconds;

      setState({ days, hours, minutes, seconds });
    }
  };

  return (
    <div className="react-countdown">
      <div className="time-section">
        <div className="time">{state.days || "0"}</div>
        <small className="time-text">Jours</small>
      </div>
      <div className="time-section">
        <div className="time">{state.hours || "00"}</div>
        <small className="time-text">Heures</small>
      </div>
      <div className="time-section">
        <div className="time">{state.minutes || "00"}</div>
        <small className="time-text">Min</small>
      </div>
      <div className="time-section">
        <div className="time">{state.seconds || "00"}</div>
        <small className="time-text">Sec</small>
      </div>
    </div>
  );
};

export default TimeCountDown;
