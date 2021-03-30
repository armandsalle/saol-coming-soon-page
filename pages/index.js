import SEO from "@/components/SEO"
import Header from "@/components/header"
import Main from "@/components/main"
import Footer from "@/components/footer"

export default function Home(props) {
  return (
    <>
      <SEO />

      <div className="bg"></div>
      <div className="container">
        <Header />
        <Main />

        <Footer {...props} />
      </div>
    </>
  )
}

export const getServerSideProps = async () => {
  const url = `http://api.openweathermap.org/data/2.5/weather?id=2962941&appid=${process.env.WEATHER_API_KEY}&units=metric`

  const response = await fetch(url)
  const data = await response.json()

  if (response.status !== 200) {
    return {
      props: {
        currentWeather: "Clear",
        currentWeatherDescription: "clear sky",
        currentTemp: 13,
      },
    }
  }

  const currentWeather = data.weather[0].main
  const currentWeatherescription = data.weather[0].description
  const currentTemp = data.main.temp

  return {
    props: {
      currentWeather: currentWeather || "Clear",
      currentWeatherDescription: currentWeatherescription || "clear sky",
      currentTemp: Math.round(currentTemp) || 13,
    },
  }
}
