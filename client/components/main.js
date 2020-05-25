import React, { useState } from 'react'
import { history } from '../redux'

const Main = () => {
  const [userValue, setUserValue] = useState('')
  const handleSearch = (event) => setUserValue(event.target.value)

  return (
    <div className="flex flex-col ">
      <div>
        <input
          onKeyPress={(ev) => {
            if (ev.key === 'Enter') {
              history.push(`/${userValue}`)
            }
          }}
          type="text"
          id="input-field"
          className="inputClass bg-gray-400  relative appearance-none border-2 border-gray-400 rounded py-2 px-4 text-black-800 leading-tight focus:outline-none focus:bg-white focus:border-orange-500"
          value={userValue}
          onChange={handleSearch}
        />
        <button
          type="button"
          id="search-button"
          className="btnClass transition duration-500 ease-in-out bg-blue-500 hover:bg-red-500 transform hover:-translate-y-1 hover:scale-110 ... bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => history.push(`/${userValue}`)}
        >
          Search
        </button>
      </div>
      <div>
        <div> hello</div>
      </div>
    </div>
  )
}

Main.propTypes = {}
export default Main
