import Head from "next/head";
import axios from "axios";
import { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import React from 'react';

export default function Home() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(false);
const appid = process.env.NEXT_PUBLIC_WEATHER_KEY
  const url = `https://api.openweathermap.org/data/2.5/weather?q=vancouver&appid=${appid}`;


  const fetchWeather = (e) => {
    e.preventDefault();
    setLoading(true);
    axios.get(url)
      .then((response) => {
        setWeather(response.data);
        console.log(response.data);
      });
    setCity("");
    setLoading(false);
  };

  return (
    <div>
      <Head>
        <title>Weather-Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <button onClick={fetchWeather}>fetch data</button>
    </div>
  );
}
