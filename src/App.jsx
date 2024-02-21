import React, { useEffect, useState } from 'react'
import DataRender from './Components/DataRender';
import { ToastContainer, toast } from 'react-toastify';
import searchIcon from "./Assets/search.png"
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  const [cityName, setCityName] = useState("");
  const [cityInp, setCityInp] = useState("");
  const [dataFetched, setDataFetched] = useState(false);
  const [data, setData] = useState([]);
  const [history, setHistory] = useState([]);
  const historyData = JSON.parse(window.localStorage.getItem("history")) || [];

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

        setHistory([...history, data]);
        window.localStorage.setItem("history", JSON.stringify([...history, data]));

        setDataFetched(true);
        setCityInp("");


      }
    }
  }

  useEffect(() => {
    setHistory(historyData);
    localStorage.setItem("history", JSON.stringify(history));
  }, []);

  useEffect(() => {
    getWeather();
  }, [cityName]);

  const searchWeather = () => {
    setCityName(cityInp);
  };


  const AddInputKeyPress = (e) => {
    if (e.key === 'Enter') {
      searchWeather();
    }
  };

  return (
    <div className='container px-4'>
      <div className="inputDiv mb-4 d-flex gap-3 align-items-center">
        <input type="text" className='form-control' placeholder='Enter city name...' onChange={(e) => setCityInp(e.target.value)} value={cityInp}
          onKeyUp={AddInputKeyPress}
        />
        <div className="btnDiv">
          <button onClick={searchWeather}>
            <img src={searchIcon} width={"15px"} alt="" />
          </button>
        </div>
      </div>
      {
        dataFetched && <DataRender data={data} />
      }

      <ToastContainer autoClose={2000} />
    </div>
  )
}