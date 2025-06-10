import type { GeoResponse } from "@customTypes/geo";
import type { QuoteResponse } from "@customTypes/quote";
import type { WeatherResponse } from "@customTypes/weather";

export const mockQuote: QuoteResponse = {
  quoteText: "The best way to predict the future is to create it.",
  quoteAuthor: "Peter Drucker",
};

export const mockGeoInfo: GeoResponse = {
  city: "San Francisco",
  country: "United States",
  latitude: 37.7749,
  longitude: -122.4194,
  region: "CA",
};

export const mockWeather: WeatherResponse = {
  current: {
    temperature_2m: 15,
    apparent_temperature: 14,
    relative_humidity_2m: 70,
    wind_speed_10m: 12,
    weather_code: 3,
    is_day: 1,
  },
  current_units: {
    temperature_2m: "°C",
    apparent_temperature: "°C",
    relative_humidity_2m: "%",
    wind_speed_10m: "km/h",
  },
  daily: {
    time: ["2024-05-20", "2024-05-21", "2024-05-22", "2024-05-23", "2024-05-24", "2024-05-25", "2024-05-26"],
    weathercode: [3, 2, 1, 0, 1, 2, 3],
    temperature_2m_max: [18, 19, 20, 21, 20, 19, 18],
    temperature_2m_min: [12, 13, 14, 15, 14, 13, 12],
    precipitation_probability_max: [10, 5, 0, 0, 5, 10, 15],
  },
  daily_units: {
    precipitation_probability_max: "%",
    temperature_2m_max: "°C",
    temperature_2m_min: "°C",
    weathercode: "wmo code",
  },
};
