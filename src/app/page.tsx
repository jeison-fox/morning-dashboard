import Quote from "@components/quote";
import WeatherCard from "@components/weather-card";
import ForecastCard from "@components/forecast-card";
import Header from "@components/header";
import { fetchOrNull, getBaseUrl } from "@utils/common";
import { getOpenMeteoURlParams } from "@utils/weather";
import styles from "@/app/styles.module.css";
import type { QuoteResponse } from "@customTypes/quote";
import type { GeoResponse } from "@customTypes/geo";
import type { WeatherResponse } from "@customTypes/weather";

export default async function Dashboard() {
  const baseURL = getBaseUrl();

  const quotePromise = fetchOrNull<QuoteResponse>(
    "http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json",
    {
      cache: "no-store",
    },
  );

  const geoInfoPromise = fetchOrNull<GeoResponse>(`${baseURL}/api/geo`, {
    cache: "no-store",
  });

  const [initialQuoteInfo, geoInfo] = await Promise.all([quotePromise, geoInfoPromise]);

  const weatherPromise = geoInfo
    ? fetchOrNull<WeatherResponse>(`https://api.open-meteo.com/v1/forecast?${getOpenMeteoURlParams(geoInfo)}`, {
        cache: "no-store",
      })
    : Promise.resolve(null);

  const initialWeatherInfo = await weatherPromise;
  const renderQuote = initialQuoteInfo ? <Quote initialQuoteInfo={initialQuoteInfo} /> : <Quote.ErrorFallback />;

  if (!geoInfo) {
    return (
      <main className={styles.main}>
        <Header geoInfo={null} />
        <section className={styles.content}>
          {renderQuote}
          <div className={styles.weatherContainer}>
            <WeatherCard.ErrorFallback message="Location Unavailable" />
            <ForecastCard.ErrorFallback message="Location Unavailable" />
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className={styles.main}>
      <Header geoInfo={geoInfo} />
      <section className={styles.content}>
        {renderQuote}
        {initialWeatherInfo ? (
          <div className={styles.weatherContainer}>
            <WeatherCard data={initialWeatherInfo.current} units={initialWeatherInfo.current_units} />
            <ForecastCard data={initialWeatherInfo.daily} units={initialWeatherInfo.daily_units} />
          </div>
        ) : (
          <div className={styles.weatherContainer}>
            <WeatherCard.ErrorFallback />
            <ForecastCard.ErrorFallback />
          </div>
        )}
      </section>
    </main>
  );
}
