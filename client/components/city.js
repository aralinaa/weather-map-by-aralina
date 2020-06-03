import React from 'react'
import Head from './head'

const City = (props) => {
  if (props.weather.main === undefined) {
    return <div>Loading . . .</div>
  }
  return (
    <div className="flex mt-48 mx-40 bg-city justify-around">
      <Head title="weather" />
      <div className="flex ml-10 flex-col ">
        <div className=" mb-8 mt-24 shadow-lg">
          <p className="font-semibold mb-1">feels:</p>
          <p className="font-normal">{props.weather.main.feels_like} C </p>
        </div>
        <div className=" mb-8 shadow-lg">
          <p className="font-semibold mb-1">humidity:</p>
          <p className="font-normal">{props.weather.main.humidity}%</p>
        </div>
        <div className=" mb-8">
          <p className="font-semibold mb-1 ">pressure: </p>
          <p>{props.weather.main.pressure}hpa</p>
        </div>
        <div className=" mb-8">
          <p className="font-semibold mb-1">max temp:</p>
          <p className="font-normal">{props.weather.main.temp_max} C </p>
        </div>
        <div className="mb-8 ">
          <p className="font-semibold mb-1">min temp:</p>
          <p className="font-normal shadow-lg">{props.weather.main.temp_min} C </p>
        </div>
      </div>
      <div className="flex  flex-col ml-20 mt-24  mr-20">
        <div className=" mb-8"> 1</div>
        <div className=" mb-8 mt-16 "> {props.userCity}</div>
        <div className=" mb-8 mt-24">
          {' '}
          <p>{props.weather.main.temp} C </p>{' '}
        </div>
      </div>
    </div>
  )
}
City.propTypes = {}
export default City
