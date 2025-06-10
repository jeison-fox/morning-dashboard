export interface CurrentWeatherData {
  apparent_temperature: number;
  is_day: 1 | 0;
  relative_humidity_2m: number;
  temperature_2m: number;
  weather_code: number;
  wind_speed_10m: number;
}

export interface CurrentWeatherUnits {
  apparent_temperature: string;
  relative_humidity_2m: string;
  temperature_2m: string;
  wind_speed_10m: string;
}

export interface DailyWeatherData {
  precipitation_probability_max: number[];
  temperature_2m_max: number[];
  temperature_2m_min: number[];
  time: string[];
  weathercode: number[];
}

export interface DailyWeatherUnits {
  precipitation_probability_max: string;
  temperature_2m_max: string;
  temperature_2m_min: string;
  weathercode: string;
}

export interface WeatherResponse {
  current: CurrentWeatherData;
  current_units: CurrentWeatherUnits;
  daily: DailyWeatherData;
  daily_units: DailyWeatherUnits;
}
