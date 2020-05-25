import React, { useEffect, useState } from 'react'
import { Route, useParams } from 'react-router-dom'
import axios from 'axios'
import Head from './head'
import City from './city'
import Header from './header'
import Main from './main'

const Home = () => {
  const API_KEY = '2354aab2cc2fb3ea41d59f9629c4bcf7'
  const [weather, setWeather] = useState({})
  const { userCity } = useParams()

  useEffect(() => {
    axios(
      `https://api.openweathermap.org/data/2.5/weather?q=${userCity}&units=metric&appid=${API_KEY}`
    ).then(({ data }) => setWeather(data))
  }, [userCity])
  if (weather.main === undefined) {
    return <div>Loading . . .</div>
  }
  return (
    <div>
      <Head />
      <Header />
      <div className="home-bg page-wrap">
        <div className="container mx-auto pt-24 pb-8 ">
          <Route exact path="/" component={() => <Main weather={weather} userCity={userCity} />} />
          <Route exact path="/:userCity" component={() => <City weather={weather} />} />
        </div>
      </div>
    </div>
  )
}

Home.propTypes = {}
export default Home
