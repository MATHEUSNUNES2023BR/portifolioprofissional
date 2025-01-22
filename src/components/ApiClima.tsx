import lupa from '../assets/icons8-magnifying-glass-96.png'
import localizacao from '../assets/icons8-location-96.png'
import vento from '../assets/icons8-wind-96.png'
import umidade from '../assets/icons8-humidity-96.png'
import loading from '../assets/Spinner@1x-1.0s-200px-200px.gif'
import { useState, KeyboardEvent, useContext } from 'react'
import { LanguageContext } from '../App'

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
  const [error, setError] = useState(false)
  
  const { t, language } = useContext(LanguageContext)

  const showWheaterData = async (city: string) =>{
    try {
      const apiWheaterURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=${language}`
      const res = await fetch(apiWheaterURL)
      if (!res.ok) {
        throw new Error('City not found')
      }
      const data: WeatherData = await res.json()
      setIsLoading(true)
      setError(false)
      setCityName(data.name)
      setTemperature(Math.trunc(data.main.temp))
      setHumidity(data.main.humidity)
      setWind(Math.trunc(data.wind.speed))
      setCountryURL(`https://flagsapi.com/${data.sys.country}/flat/32.png`)
      setWheater((data.weather['0'].description))
      setWheaterIcon(data.weather['0'].icon)
    } catch (err) {
      setError(true)
      setIsLoading(false)
    }
  }

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && cityState.length > 0) {
      showWheaterData(cityState)
      setActivator(true)
      setIsLoading(false)
    }
  }

  return(
    <div className='w-full max-w-md bg-white/90 backdrop-blur-sm rounded-xl shadow-lg p-6 font-["Poppins"] text-gray-800 hover:shadow-xl transition-all duration-300'>
      <div className='space-y-4'>
        <h3 className='text-xl font-semibold text-center'>
          <span className='bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text'>
            {t.weather.title}
          </span>
        </h3>
        
        <div className='relative group'>
          <div className='absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-0 group-hover:opacity-30 transition duration-300'></div>
          <div className='relative flex items-center gap-2 bg-white rounded-lg shadow-sm p-2'>
            <input 
              onChange={(e) => setCityState(e.target.value)} 
              onKeyPress={handleKeyPress}
              className='flex-1 px-3 py-2 outline-none text-gray-700 placeholder-gray-400 text-sm focus:placeholder-gray-300 transition-colors'
              placeholder={t.weather.placeholder}
              type="text"
            />
            <button 
              onClick={() => {
                if (cityState.length > 0) {
                  showWheaterData(cityState)
                  setActivator(true)
                  setIsLoading(false)
                }
              }}
              className='p-2 hover:bg-gray-100 rounded-lg transition-all duration-300 hover:scale-105'
              title={t.weather.search}
            >
              <img className='w-5 h-5 opacity-60 hover:opacity-100 transition-opacity' src={lupa} alt={t.weather.search} />
            </button>
          </div>
        </div>

        {error && (
          <div className='text-center text-sm text-red-500'>
            {t.weather.error}
          </div>
        )}

        {activator ? (
          islLoading ? (
            <div className='space-y-6 animate-fade-in'>
              <div className='h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent'></div>
              
              <div className='flex items-center justify-center gap-3 hover:transform hover:scale-105 transition-transform duration-300'>
                <img className='w-5 opacity-60' src={localizacao} alt="Localização" />
                <span className='text-xl font-medium'>{cityName}</span>
                <img className='h-5 shadow-sm rounded-sm' src={countryURL} alt={`Bandeira de ${cityName}`} />
              </div>

              <div className='text-center transform hover:scale-105 transition-transform duration-300'>
                <div className='text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text'>
                  {temperature}°C
                </div>
                <div className='flex items-center justify-center mt-1'>
                  <span className='text-sm text-gray-600 capitalize'>{weather}</span>
                  <img 
                    className='w-10 h-10 transform hover:scale-110 transition-transform'
                    src={`https://openweathermap.org/img/wn/${weatherIcon}.png`} 
                    alt={weather} 
                  />
                </div>
              </div>

              <div className='flex justify-center gap-12'>
                <div className='flex items-center gap-3 hover:transform hover:scale-105 transition-all duration-300 bg-blue-50/50 p-3 rounded-lg'>
                  <img className='w-6 opacity-60' src={umidade} alt={t.weather.humidity} />
                  <div>
                    <p className='text-sm text-gray-500 font-medium'>{t.weather.humidity}</p>
                    <p className='font-semibold text-blue-600'>{humidity}%</p>
                  </div>
                </div>
                <div className='flex items-center gap-3 hover:transform hover:scale-105 transition-all duration-300 bg-purple-50/50 p-3 rounded-lg'>
                  <img className='w-6 opacity-60' src={vento} alt={t.weather.wind} />
                  <div>
                    <p className='text-sm text-gray-500 font-medium'>{t.weather.wind}</p>
                    <p className='font-semibold text-purple-600'>{wind} km/h</p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className='flex justify-center p-4'>
              <img className='w-16 opacity-70 animate-spin' src={loading} alt={t.weather.loading} />
            </div>
          )
        ) : (
          <div className='text-center text-sm text-gray-400 italic mt-2'>
            {t.weather.search}
          </div>
        )}
      </div>
    </div>
  )
}

export default ApiClima