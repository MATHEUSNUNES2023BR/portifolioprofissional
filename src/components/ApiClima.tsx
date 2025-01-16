import lupa from '../assets/icons8-magnifying-glass-96.png'
import localizacao from '../assets/icons8-location-96.png'
import vento from '../assets/icons8-wind-96.png'
import umidade from '../assets/icons8-humidity-96.png'
import loading from '../assets/Spinner@1x-1.0s-200px-200px.gif'
import { useState } from 'react'
interface WeatherData {
  coord: {
    lon: number;
    lat: number;
  };
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[];
  base: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    sea_level?: number;
    grnd_level?: number;
  };
  visibility: number;
  wind: {
    speed: number;
    deg: number;
    gust?: number;
  };
  clouds: {
    all: number;
  };
  dt: number;
  sys: {
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
}

function ApiClima(){
  const apiKey = 'a0fae49a60fc5af3325a31fee54dda0c'
  const [cityState, setCityState] = useState("")
  const [cityName , setCityName] = useState("")
  const [temperature , setTemperature] = useState(0)
  const [humidity , setHumidity] = useState(0)
  const [countryURL , setCountryURL] = useState("")
  const [wind , setWind] = useState(0)
  const [weather , setWheater] = useState("")
  const [weatherIcon , setWheaterIcon] = useState("")
  const [islLoading, setIsLoading] = useState(false)
  const [activator, setActivator] = useState(false)
  const showWheaterData = async (city: string) =>{
    const apiWheaterURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`
    const res = await fetch(apiWheaterURL)
    const data: WeatherData = await res.json()
    setIsLoading(true)
    setCityName(data.name)
    setTemperature(Math.trunc(data.main.temp))
    setHumidity(data.main.humidity)
    setWind(Math.trunc(data.wind.speed))
    setCountryURL(`https://flagsapi.com/${data.sys.country}/flat/32.png`)
    setWheater((data.weather['0'].description))
    setWheaterIcon(data.weather['0'].icon)
    return 
  }
  return(
    <div className='shadow-md bg-gradient-to-t from-neutral-200 to-sky-400  rounded-md  font-["Poppins"] text-neutral-800 w-[310px] h-auto'>
      <div className='flex-col place-items-center w-full'>
        <h3 className='text-xl text-center pt-2'>Confira o clima de uma cidade: </h3>
        <div id="form-input-container" className='flex items-center justify-around w-full mt-5'>
          <input onChange={(e) => setCityState(e.target.value)} className='w-[80%] h-10 border-2 rounded-md border-neutral-700 placeholder-neutral-500 placeholder:p-2' placeholder='Digite o nome da cidade' type="text" name="" id="" />
          <button onClick={() => {showWheaterData(cityState), setActivator(true), setIsLoading(false)}} id="search" className='w-8'>
            <img className='w-full' src={lupa} alt="" />
          </button>
        </div>
        {
        activator ? 
          (islLoading ? 
            <div className={`w-full`}>
              <hr className='text-black w-full mt-2'/>
              <div className='mt-4 flex-col place-items-center'>
              <div className='flex items-center justify-evenly w-72 mx-auto mt-7'>
                <img className='w-6' src={localizacao} alt="Icone Localização" />
                <span className='text-xl text-center' id='city'>{cityName}</span>
                <img className='mt-1' id='country' alt="Bandeira do país" src={countryURL} />
              </div>
              <p className='text-xl mt-5'><span>{temperature}</span> &deg;C</p>
              <div className='flex items-center mt-2'>
                <p className='capitalize'>{weather}</p>
                <img id='weather-icon' src={`https://openweathermap.org/img/wn/${weatherIcon}.png`} alt="Condições do clima" />
              </div>
              <div className='flex justify-around w-48 mt-3'>
                <p className='flex items-center' id="humidity">
                  <img className='w-6' src={umidade} alt="Umidade" />
                  <span className='ms-3'>{humidity}%</span>
                </p>
                <p className='flex items-center' id="wind">
                  <img className='w-6' src={vento} alt="Vento" />
                  <span className='ms-3'>{wind}km/h</span>
                </p>
              </div>
            </div>
            </div>
            : <img className='w-24' src={loading}/>)
          : (<div> </div>)
        }
      </div>
    </div>
  )
}
export default ApiClima