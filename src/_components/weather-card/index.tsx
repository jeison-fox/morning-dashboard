import Image from "next/image";
import { LuDroplet, LuThermometer, LuWind } from "react-icons/lu";
import { getWeatherDescriptionAndIcon } from "@utils/weather";
import styles from "./styles.module.css";
import type { WeatherCardProps } from "@customTypes/weatherCard";

export default function WeatherCard({ data, units }: WeatherCardProps) {
  const {
    temperature_2m: temperature,
    apparent_temperature: feelsLike,
    relative_humidity_2m: humidity,
    wind_speed_10m: windSpeed,
    weather_code: weatherCode,
    is_day: isDay,
  } = data;

  const {
    temperature_2m: temperatureUnit,
    apparent_temperature: feelsLikeUnit,
    relative_humidity_2m: humidityUnit,
    wind_speed_10m: windSpeedUnit,
  } = units;

  const { description, iconPath } = getWeatherDescriptionAndIcon(weatherCode, isDay === 1);

  const legends = [
    {
      label: "Feels like",
      key: "feels_like",
      value: feelsLike,
      unit: feelsLikeUnit,
      Icon: LuThermometer,
    },
    {
      label: "Humidity",
      key: "humidity",
      value: humidity,
      unit: humidityUnit,
      Icon: LuDroplet,
    },
    {
      label: "Wind Speed",
      key: "wind_speed",
      value: windSpeed,
      unit: windSpeedUnit,
      Icon: LuWind,
    },
  ];

  return (
    <article className={styles.weatherCard} data-testid="weather-card">
      <header>
        <h2>Today&apos;s Weather</h2>
      </header>
      <div className={styles.weatherCardContent}>
        <div className={styles.weatherCardContentTop}>
          <div className={styles.weatherCardTemperature}>
            <strong data-testid="weather-card-temperature">
              {temperature}
              {temperatureUnit}
            </strong>
            <p>{description}</p>
          </div>
          <div className={styles.weatherCardIconContainer}>
            <Image src={iconPath} alt={description} fill />
          </div>
        </div>
        <div className={styles.weatherCardContentBottom}>
          {legends.map((legend) => (
            <div className={styles.weatherCardLegend} key={legend.key} data-testid="weather-card-legend">
              <legend.Icon className={styles.weatherCardLegendIcon} />
              <div>
                <strong>
                  {legend.value}
                  {legend.unit}
                </strong>
                <p>{legend.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}

WeatherCard.ErrorFallback = function WeatherCardError({ message }: { message?: string }) {
  return (
    <article className={styles.weatherCard} data-testid="weather-card-error">
      <header>
        <h2>Today&apos;s Weather</h2>
      </header>
      <div className={styles.weatherCardError}>
        <p>{message ? message : "Sorry, we couldn't load the weather right now."}</p>
      </div>
    </article>
  );
};
