import React, { useState } from 'react'
import { history } from '../redux'

const Main = (props) => {
  const [userValue, setUserValue] = useState('')
  const handleSearch = (event) => setUserValue(event.target.value)
  if (props.weatherLondon.main === undefined) {
    return <div>Loading . . .</div>
  }
  return (
    <div className="border-solid border-yellow-500 mt-32 bg-main flex flex-col mx-40">
      <div className="border-double mb-20 flex flex-col items-center">
        <div className="mb-4 mt-8 text-green-500"> Check Weather </div>
        <div>
          <input
            onKeyPress={(ev) => {
              if (ev.key === 'Enter') {
                history.push(`/${userValue}`)
              }
            }}
            type="text"
            id="input-field"
            className="inputClass   mb-4 relative appearance-none border-2 border-gray-400 rounded py-2 px-4 text-black-800 leading-tight focus:outline-none focus:bg-white focus:border-orange-500"
            value={userValue}
            onChange={handleSearch}
            placeholder="type city name"
          />
        </div>
        <div>
          {' '}
          <button
            type="button"
            id="search-button"
            className="btnClass transition duration-500 ease-in-out bg-blue-500 hover:bg-red-500 transform hover:-translate-y-1 hover:scale-110 ... bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => history.push(`/${userValue}`)}
          >
            Search
          </button>
        </div>
      </div>
      <div className="flex  justify-around  mb-4 ">
        <div className="flex flex-col mb-3 bg-chicago">
          <div className="mb-5 text-green-500 "> Chicago </div>
          <div> {props.weatherChicago.main.temp} C </div>
        </div>
        <div className="flex flex-col mb-3">
          <div className="mb-5 text-green-500"> Miami </div>
          <div> {props.weatherMiami.main.temp} C </div>
        </div>
        <div className="flex flex-col mb-3">
          <div className="mb-5 text-green-500"> London </div>
          <div> {props.weatherLondon.main.temp} C </div>
        </div>
      </div>
    </div>
  )
}

Main.propTypes = {}
export default Main
