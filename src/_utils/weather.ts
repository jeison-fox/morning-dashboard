import type { GeoResponse } from "@customTypes/geo";

/**
 * Creates URLSearchParams for Open-Meteo API with weather data parameters
 *
 * @param {GeoResponse} geoInfo - Object containing latitude and longitude coordinates
 * @returns {URLSearchParams} URLSearchParams object with configured weather parameters
 */
export function getOpenMeteoURlParams(geoInfo: GeoResponse | null): URLSearchParams {
  return new URLSearchParams({
    latitude: geoInfo?.latitude.toString() ?? "",
    longitude: geoInfo?.longitude.toString() ?? "",
    current: [
      "is_day",
      "temperature_2m",
      "relative_humidity_2m",
      "apparent_temperature",
      "weather_code",
      "wind_speed_10m",
    ].join(","),
    daily: ["weathercode", "temperature_2m_max", "temperature_2m_min", "precipitation_probability_max"].join(","),
    timezone: "auto",
    forecast_days: "7",
  });
}

/**
 * Map Open-Meteo weather_code to a friendly label and icon path.
 *
 * @param {number} code — the numeric weather_code from Open-Meteo
 * @param {boolean} isDay - whether it is currently daytime
 * @returns {{ description: string, iconPath: string }} Object containing weather description and icon path
 */
export function getWeatherDescriptionAndIcon(code: number, isDay: boolean): { description: string; iconPath: string } {
  if (code === 0) {
    return {
      description: isDay ? "sunny" : "clear night",
      iconPath: `/icons/${isDay ? "clear_day" : "clear_night"}.svg`,
    };
  }
  if ([1, 2].includes(code)) {
    return {
      description: "partly cloudy",
      iconPath: `/icons/${isDay ? "partly_cloudy_day" : "partly_cloudy_night"}.svg`,
    };
  }
  if (code === 3) {
    return {
      description: "cloudy",
      iconPath: "/icons/cloudy.svg",
    };
  }
  if ([45, 48].includes(code)) {
    return {
      description: "foggy",
      iconPath: "/icons/foggy.svg",
    };
  }
  if ([51, 53, 55].includes(code)) {
    return {
      description: "drizzle",
      iconPath: "/icons/drizzle.svg",
    };
  }
  if ([56, 57].includes(code)) {
    return {
      description: "drizzle (freezing)",
      iconPath: "/icons/drizzle_freezing.svg",
    };
  }
  if ([61, 63, 65].includes(code)) {
    return {
      description: "rainy",
      iconPath: "/icons/rainy.svg",
    };
  }
  if ([66, 67].includes(code)) {
    return {
      description: "rainy (freezing)",
      iconPath: "/icons/drizzle_freezing.svg",
    };
  }
  if ([71, 73, 75, 77].includes(code)) {
    return {
      description: "snowy",
      iconPath: "/icons/snowy.svg",
    };
  }
  if ([80, 81, 82].includes(code)) {
    return {
      description: "rain showers",
      iconPath: "/icons/rainy.svg",
    };
  }
  if ([85, 86].includes(code)) {
    return {
      description: "snow showers",
      iconPath: "/icons/snowy.svg",
    };
  }
  if (code === 95) {
    return {
      description: "thunderstorm",
      iconPath: "/icons/thunderstorm.svg",
    };
  }
  if ([96, 99].includes(code)) {
    return {
      description: "thunderstorm with hail",
      iconPath: "/icons/thunderstorm_hail.svg",
    };
  }
  return {
    description: "unknown",
    iconPath: "/icons/thermometer.svg",
  };
}
