import React, { useEffect, useState } from 'react'
import DataRender from './Components/DataRender';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  const [cityName, setCityName] = useState("");
  const [cityInp, setCityInp] = useState("");
  const [dataFetched, setDataFetched] = useState(false);
  const [data, setData] = useState([]);

  const apiKey = "237697a6e0152984a6d0eb0e2c8f66da";
  const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

  const getWeather = async () => {
    const response = await fetch(apiUrl + cityName + `&appid=${apiKey}`);

    if (response.status == 404) {
      setDataFetched(false);
      toast.error("Invalid city name.");
      setCityInp("");

    } else {
      var data = await response.json();

      if (data.cod !== "400") {
        setData(data);
        setDataFetched(true);
        setCityInp("");
      }
    }
  }

  useEffect(() => {
    getWeather();
  }, [cityName]);

  const searchWeather = () => {
    setCityName(cityInp)
  }
  return (
    <div className='container mt-5 px-4'>
      <div className="inputDiv mb-4">
        <label className='form-label'>
          City Name:
        </label>
        <input type="text" className='form-control' placeholder='Enter city name...' onChange={(e) => setCityInp(e.target.value)} value={cityInp} />
        <div className="btnDiv mt-3">
          <button onClick={searchWeather}>Search Weather</button>
        </div>
      </div>
      {
        dataFetched && <DataRender data={data} />
      }

      <ToastContainer autoClose={2000}/>
    </div>
  )
}