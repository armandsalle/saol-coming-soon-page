import WeatherIcon from "@/components/weatherIcon"
import Form from "@/components/form"

const Footer = ({ currentWeather, currentWeatherDescription, currentTemp }) => {
  return (
    <footer className="footer">
      <div className="weather">
        <div className="weather-wrapper">
          <WeatherIcon currentWeather={currentWeather} />
          <p className="weather-text">
            {currentTemp}°c&nbsp;<span className="weather-description">{currentWeatherDescription},&nbsp;</span>
          </p>
        </div>
        <p className="weather-location">West Coast of Ireland</p>
      </div>

      <div className="contact">
        <div className="social">
          <p>info@studiosaol.com</p>
          <p>@studiosaol</p>
        </div>

        <Form />
      </div>
    </footer>
  )
}

export default Footer