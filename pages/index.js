import Head from "next/head"
import WeatherIcon from "@/components/weatherIcon"

export default function Home({ currentWeather, currentTemp, currentWeatherDescription }) {
  return (
    <>
      <Head>
        <title>Saol</title>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Ag teacht go luath. Launching Summer 2021. Saol is a research and design lab based on the West Coast of Ireland on a mission to create better ways of living."
        />
        <meta name="author" content="Saol" />
        <meta name="copyright" content="Saol" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="" />
        <meta property="og:title" content="Saol" />
        <meta
          property="og:description"
          content="Ag teacht go luath. Launching Summer 2021. Saol is a research and design lab based on the West Coast of Ireland on a mission to create better ways of living."
        />
        <meta property="og:image" content="" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="" />
        <meta property="twitter:title" content="Saol" />
        <meta
          property="twitter:description"
          content="Ag teacht go luath. Launching Summer 2021. Saol is a research and design lab based on the West Coast of Ireland on a mission to create better ways of living."
        />
        <meta property="twitter:image" content="" />
      </Head>

      <div className="bg"></div>
      <div className="container">
        <header>
          <span className="logotype">Saol</span>
        </header>

        <main className="main">
          <h1 className="h1">
            Ag teacht go luath<span>Launching Summer 2021</span>
          </h1>
          <p className="content">
            Saol is a research and design lab based on the West Coast of Ireland on a mission to create better ways of
            living.
          </p>
        </main>

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

            <form className="email-form">
              <input type="email" name="email" id="email" placeholder="Email me at launch" />
              <button type="submit">
                <svg xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M10.87.724l-.43.473 6.713 6.67H.5v.6h16.653L10.44 15.14l.43.473 7.444-7.444z"
                    fill="#fff"
                    stroke="#fff"
                  />
                </svg>
              </button>
            </form>
          </div>
        </footer>
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
