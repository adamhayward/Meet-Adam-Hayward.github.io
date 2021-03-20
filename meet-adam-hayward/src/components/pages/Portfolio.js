import React from "react";
// import EventCalendar from "../../images/event-calendar.png";
// import Noted from "../../images/noted-app.png";
// import WeatherDashboard from "../../images/weather-dashboard.png";
import Title from "../Title";
import Card from "../Card";
import data from "../../portfolioData.json";

function Portfolio() {
  return (
    <div>
      <Title>portfolio</Title>
      <Card
        title={data[0].title}
        img={data[0].img}
        url={data[0].url}
      />
    </div>

  );
}

export default Portfolio;
