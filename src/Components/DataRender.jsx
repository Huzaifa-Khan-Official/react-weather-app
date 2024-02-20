import React from 'react'
import drizzle from "../Assets/drizzle.png"
import humidity from '../Assets/humidity.png'

export default function DataRender({ data }) {
    return (
        <div className='d-flex flex-column align-items-center gap-3'>

            <div className="imgDiv">
                <img src={drizzle} alt="" />
            </div>

            <div className="tempDiv">
                <h1>
                    {
                        data.main.temp && data.main.temp
                    }<sup>o</sup><span>C</span>
                </h1>
            </div>

            <div className="cityNameHeading">
                <h1>
                    {data.name}
                </h1>
            </div>

            <div className="humidityWindDiv d-flex justify-content-between">
                <div className="himidityDiv d-flex align-items-center gap-2">
                    <div>
                        <img src={humidity} alt="" />
                    </div>
                    <div>
                        <p>87%</p>
                        <p>Humidity</p>
                    </div>
                </div>

                <div className="windSpeedDiv d-flex align-items-center gap-2">
                    <div>
                        <img src={humidity} alt="" />
                    </div>
                    <div>
                        <p>87%</p>
                        <p>Humidity</p>
                    </div>
                </div>
            </div>

        </div>
    )
}