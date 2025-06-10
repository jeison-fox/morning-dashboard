import type { CurrentWeatherData, CurrentWeatherUnits } from "./weather";

export interface WeatherCardProps {
  data: CurrentWeatherData;
  units: CurrentWeatherUnits;
}
