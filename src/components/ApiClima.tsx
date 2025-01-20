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
    <div className='w-full max-w-md bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6 font-["Poppins"] text-gray-800'>
      <div className='space-y-4'>
        <h3 className='text-xl font-semibold text-center bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text'>
          Confira o clima de uma cidade
        </h3>
        
        <div className='flex items-center gap-2 bg-white rounded-lg shadow-sm p-2'>
          <input 
            onChange={(e) => setCityState(e.target.value)} 
            className='flex-1 px-3 py-2 outline-none text-gray-700 placeholder-gray-400 text-sm'
            placeholder='Digite o nome da cidade'
            type="text"
          />
          <button 
            onClick={() => {showWheaterData(cityState), setActivator(true), setIsLoading(false)}}
            className='p-2 hover:bg-gray-100 rounded-lg transition-colors'
          >
            <img className='w-5 h-5 opacity-60' src={lupa} alt="Buscar" />
          </button>
        </div>

        {activator ? (
          islLoading ? (
            <div className='space-y-6 animate-fade-in'>
              <hr className='border-gray-200'/>
              
              <div className='flex items-center justify-center gap-3'>
                <img className='w-5 opacity-60' src={localizacao} alt="Localização" />
                <span className='text-xl font-medium'>{cityName}</span>
                <img className='h-5' src={countryURL} alt={`Bandeira de ${cityName}`} />
              </div>

              <div className='text-center'>
                <div className='text-4xl font-bold text-blue-600'>
                  {temperature}°C
                </div>
                <div className='flex items-center justify-center mt-1'>
                  <span className='text-sm text-gray-600 capitalize'>{weather}</span>
                  <img 
                    className='w-8'
                    src={`https://openweathermap.org/img/wn/${weatherIcon}.png`} 
                    alt={weather} 
                  />
                </div>
              </div>

              <div className='flex justify-center gap-8'>
                <div className='flex items-center gap-2'>
                  <img className='w-5 opacity-60' src={umidade} alt="Umidade" />
                  <div>
                    <p className='text-sm text-gray-500'>Umidade</p>
                    <p className='font-medium'>{humidity}%</p>
                  </div>
                </div>
                <div className='flex items-center gap-2'>
                  <img className='w-5 opacity-60' src={vento} alt="Vento" />
                  <div>
                    <p className='text-sm text-gray-500'>Vento</p>
                    <p className='font-medium'>{wind} km/h</p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className='flex justify-center p-4'>
              <img className='w-16 opacity-70' src={loading} alt="Carregando..." />
            </div>
          )
        ) : null}
      </div>
    </div>
  )
}
export default ApiClima