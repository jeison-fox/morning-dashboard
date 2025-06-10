import type { DailyWeatherData, DailyWeatherUnits } from "./weather";

export interface ForecastCardProps {
  data: DailyWeatherData;
  units: DailyWeatherUnits;
}
