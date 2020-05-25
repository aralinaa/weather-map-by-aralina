import React from 'react'
import Head from './head'
import Header from './header'

const City = (props) => {
  if (props.weather.main === undefined) {
    return <div>Loading . . .</div>
  }
  return (
    <div>
      <Head title="weather" />
      <Header />
      <div className="container mx-auto">
        <div className=" p-6">
          <div className="">
            <div className="">
              <p>feels: {props.weather.main.temp}</p>
            </div>
            <div className="">Cloudy </div>
          </div>
          <div className="">
            <p> hello</p>
          </div>
        </div>
        <div className=" p-6"> 2</div>
      </div>
      <div className="container mx-auto">
        <div className=""> 1</div>
        <div className=""> 2</div>
        <div className="">3 </div>
        <div className="">4 </div>
        <div className="">5 </div>
      </div>
    </div>
  )
}
City.propTypes = {}
export default City
