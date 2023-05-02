import Head from "next/head";
import axios from "axios";
import { useEffect, useState } from "react";
import { BsSearch } from "react-icons/bs";
import React from 'react';
import Image from 'next/image';
import 'tailwindcss/tailwind.css'
import Weather from "../components/Weather";



export default function Home() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(false);
const appid = process.env.NEXT_PUBLIC_WEATHER_KEY
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b074a274a35fca512da588073991e058`;

  const fetchWeather = (e) => {
    e.preventDefault();
    setLoading(true);
    axios.get(url)
      .then((response) => {
        setWeather(response.data);
        // console.log(response.data);
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

    <div className="bg-black/40 absolute top-0 left-0 right-0 bottom-0 z-[1]" />
    <Image
      src="https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
      alt="A beautiful sunset over the mountains"
      width={1080}
      height={720}
      className="object-cover"
    />
    <div className='relative flex justify-between items-center max-w-[500px] w-full m-auto pt-4 text-white z-10'>
    <form onSubmit={fetchWeather}className='relative flex justify-between items-center max-w-[500px] w-full m-auto pt-4 text-white z-10'>
      <div className='flex-1'>
        <input
          onChange={(e) => setCity(e.target.value)}
          type="text"
          placeholder="search city"
          className='w-full p-3 bg-transparent border border-gray-300 text-white rounded-2xl'
        />
      </div>
      <button onClick={fetchWeather}>
        <BsSearch size={20} />
      </button>
    </form>
  </div>
 {/* weather */}
    {weather.main && < Weather data={weather}/>}
    </div>

  )};
