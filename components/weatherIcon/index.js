import SunCloud from "@/components/svg/sunCloud"
import Sunshine from "@/components/svg/sunshine"
import RainCloud from "@/components/svg/rainCloud"
import SnowCloud from "@/components/svg/snowCloud"
import WindyCloud from "@/components/svg/windyCloud"

const WeatherIcon = ({ currentWeather }) => {
  switch (currentWeather) {
    case "Thunderstorm":
      return <ThunderCloud />
    case "Drizzle":
      return <RainCloud />
    case "Rain":
      return <RainCloud />
    case "Snow":
      return <SnowCloud />
    case "Clouds":
      return <SunCloud />
    case "Atmosphere":
      return <WindyCloud />
    case "Clear":
      return <Sunshine />
    default:
      return <Sunshine />
  }
}

export default WeatherIcon
