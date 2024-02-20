import React, { useEffect, useState } from 'react'
import drizzle from "../Assets/drizzle.png"
import humidity from '../Assets/humidity.png'
import wind from "../Assets/wind.png"
import Clouds from "../Assets/cloud.png"
import Clear from "../Assets/clear.png"
import Rain from "../Assets/rain.png"
import Drizzle from "../Assets/drizzle.png"
import Mist from "../Assets/mist.png"
import Haze from "../Assets/haze.png"
import Smoke from "../Assets/smoke.png"

export default function DataRender({ data }) {
    const [imgSrc, setImgSrc] = useState(null);

    useEffect(() => {
        if (data.weather[0].main == "Clouds") {
            setImgSrc(Clouds)
        } else if (data.weather[0].main == "Clear") {
            setImgSrc(Clear)
        } else if (data.weather[0].main == "Rain") {
            setImgSrc(Rain)
        } else if (data.weather[0].main == "Drizzle") {
            setImgSrc(Drizzle)
        } else if (data.weather[0].main == "Mist") {
            setImgSrc(Mist)
        } else if (data.weather[0].main == "Haze") {
            setImgSrc(Haze)
        } else if (data.weather[0].main == "Smoke") {
            setImgSrc(Smoke)
        }
    }, [data])


    return (
        <div className='d-flex flex-column align-items-center gap-3'>

            <div className="imgDiv">
                <img src={imgSrc} alt="" />
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

            <div className="d-flex justify-content-between humidityWindDiv">
                <div className="himidityDiv d-flex align-items-center gap-2">
                    <div>
                        <img src={humidity} alt="" />
                    </div>
                    <div>
                        <p>{data.main.humidity} %</p>
                        <p>Humidity</p>
                    </div>
                </div>

                <div className="windSpeedDiv d-flex align-items-center gap-2">
                    <div>
                        <img src={wind} alt="" />
                    </div>
                    <div>
                        <p>{data.wind.speed} km/h</p>
                        <p>Wind Speed</p>
                    </div>
                </div>
            </div>

        </div>
    )
}