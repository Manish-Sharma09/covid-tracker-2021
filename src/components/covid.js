import React, { useEffect, useState } from "react";

const Covid = () => {
  const [data, setData] = useState([]);
  const getCovidData = async () => {
    try {
      const res = await fetch("https://data.covid19india.org/data.json"); //it returns promises
      const actualData = await res.json();
      console.log(actualData.statewise[0]); //array of an object
      setData(actualData.statewise[0]);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getCovidData();
  }, []);

  return (
    <div>
      <h1>Covid-19 Tracker (2021)</h1>
      <div class="wrapper">
        <div class="card">
          <h3 class="card-title">OUR COUNTRY</h3>
          <h1>INDIA</h1>
        </div>
        <div class="card">
          <h3 class="card-title">TOTAL RECOVERED</h3>
          <h1>{data.recovered}</h1>
        </div>
        <div class="card">
          <h3 class="card-title">TOTAL CONFIRMED</h3>
          <h1>{data.confirmed}</h1>
        </div>
        <div class="card card4">
          <h3 class="card-title">TOTAL DEATH</h3>
          <h1>{data.deaths}</h1>
        </div>
        <div class="card">
          <h3 class="card-title">TOTAL ACTIVE</h3>
          <h1>{data.active}</h1>
        </div>
        <div class="card">
          <h3 class="card-title">LAST UPDATES</h3>
          <h1>{data.lastupdatedtime}</h1>
        </div>
      </div>
    </div>
  );
};
export default Covid;
