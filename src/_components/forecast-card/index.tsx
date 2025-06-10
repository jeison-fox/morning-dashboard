import Image from "next/image";
import { getWeatherDescriptionAndIcon } from "@utils/weather";
import styles from "./styles.module.css";
import type { ForecastCardProps } from "@customTypes/forecastCard";

export default function ForecastCard({ data, units }: ForecastCardProps) {
  const {
    precipitation_probability_max: precipitationProbability,
    temperature_2m_max: temperatureMax,
    temperature_2m_min: temperatureMin,
    weathercode: weatherCode,
    time,
  } = data;

  const { precipitation_probability_max: precipitationProbabilityUnit } = units;

  return (
    <article className={styles.forecastCard} data-testid="forecast-card">
      <header>
        <h2>Week forecast</h2>
      </header>
      <div className={styles.forecastCardContent}>
        {precipitationProbability.map((probability, index) => {
          const { description, iconPath } = getWeatherDescriptionAndIcon(weatherCode[index], true);

          const day = new Date(time[index]).toLocaleDateString("en-US", {
            weekday: "short",
          });

          return (
            <div className={styles.forecastCardDay} key={time[index]} data-testid="forecast-card-day">
              <p className={styles.forecastCardDayDate}>{day}</p>
              <div className={styles.forecastCardDayIcon}>
                <Image src={iconPath} alt={description} fill />
              </div>
              <p className={styles.forecastCardDayProbability}>
                {probability}
                {precipitationProbabilityUnit}
              </p>
              <div className={styles.forecastCardDayTemperature}>
                <span>{temperatureMax[index]}&deg;</span>
                &nbsp;/&nbsp;
                <span>{temperatureMin[index]}&deg;</span>
              </div>
            </div>
          );
        })}
      </div>
    </article>
  );
}

ForecastCard.ErrorFallback = function WeatherCardError({ message }: { message?: string }) {
  return (
    <article className={styles.forecastCard} data-testid="forecast-card-error">
      <header>
        <h2>Week forecast</h2>
      </header>
      <div className={styles.forecastCardError}>
        <p>{message ? message : "Sorry, we couldn't load the forecast right now."}</p>
      </div>
    </article>
  );
};
