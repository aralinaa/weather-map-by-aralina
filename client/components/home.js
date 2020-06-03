import React, { useEffect, useState } from 'react'
import { Route, useParams } from 'react-router-dom'
import axios from 'axios'
import City from './city'
import Main from './main'
import './main.scss'

const Home = () => {
  const API_KEY = '2354aab2cc2fb3ea41d59f9629c4bcf7'
  const [weather, setWeather] = useState({})
  const [weatherLondon, setWeatherLondon] = useState({})
  const [weatherMiami, setWeatherMiami] = useState({})
  const [weatherChicago, setWeatherChicago] = useState({})
  const { userCity } = useParams()

  useEffect(() => {
    axios(
      `https://api.openweathermap.org/data/2.5/weather?q=${userCity}&units=metric&appid=${API_KEY}`
    ).then(({ data }) => setWeather(data))
  }, [userCity])

  useEffect(() => {
    axios(
      `https://api.openweathermap.org/data/2.5/weather?q=london&units=metric&appid=2354aab2cc2fb3ea41d59f9629c4bcf7`
    ).then(({ data }) => setWeatherMiami(data))
  }, [userCity])

  useEffect(() => {
    axios(
      `https://api.openweathermap.org/data/2.5/weather?q=miami&units=metric&appid=2354aab2cc2fb3ea41d59f9629c4bcf7`
    ).then(({ data }) => setWeatherLondon(data))
  }, [userCity])

  useEffect(() => {
    axios(
      `https://api.openweathermap.org/data/2.5/weather?q=chicago&units=metric&appid=2354aab2cc2fb3ea41d59f9629c4bcf7`
    ).then(({ data }) => setWeatherChicago(data))
  }, [userCity])

  return (
    <div className="">
      <div className="container mx-auto">
        <Route
          exact
          path="/"
          component={() => (
            <Main
              weather={weather}
              userCity={userCity}
              weatherLondon={weatherLondon}
              weatherMiami={weatherMiami}
              weatherChicago={weatherChicago}
            />
          )}
        />
        <Route
          exact
          path="/:userCity"
          component={() => <City weather={weather} userCity={userCity} />}
        />
      </div>
    </div>
  )
}

Home.propTypes = {}
export default Home
