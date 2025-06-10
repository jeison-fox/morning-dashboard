import { render, screen } from "@testing-library/react";
import Dashboard from "@/app/page";
import { mockGeoInfo, mockWeather } from "./_mocks_/data";
import { setupFetchMocks } from "./_utils_/handlers";

const mockFetch = jest.fn();
global.fetch = mockFetch;

beforeEach(() => {
  mockFetch.mockClear();
  process.env.NEXT_PUBLIC_BASE_URL = "http://localhost:3000";
  process.env.API_KEY = "test-api-key";
});

describe("Dashboard page", () => {
  it("displays the quote and error fallbacks when geoInfo is null", async () => {
    setupFetchMocks(mockFetch, { geoOk: false });

    const Page = await Dashboard();
    render(Page);

    expect(screen.getByTestId("quote")).toBeInTheDocument();
    expect(screen.getByTestId("header-location-unavailable")).toBeInTheDocument();
    expect(screen.getByTestId("weather-card-error")).toHaveTextContent("Location Unavailable");
    expect(screen.getByTestId("forecast-card-error")).toHaveTextContent("Location Unavailable");
    expect(screen.queryByTestId("weather-card")).not.toBeInTheDocument();
    expect(screen.queryByTestId("forecast-card")).not.toBeInTheDocument();
  });

  it("renders the dashboard as expected when geoInfo is available", async () => {
    setupFetchMocks(mockFetch);

    const Page = await Dashboard();
    render(Page);

    expect(screen.getByTestId("quote")).toBeInTheDocument();
    expect(screen.getByTestId("header-location")).toHaveTextContent(`${mockGeoInfo.city}, ${mockGeoInfo.country}`);
    expect(screen.getByTestId("weather-card")).toBeInTheDocument();
    expect(screen.getByTestId("forecast-card")).toBeInTheDocument();
    expect(screen.getByTestId("weather-card-temperature")).toHaveTextContent(
      `${mockWeather.current.temperature_2m}${mockWeather.current_units.temperature_2m}`,
    );
    expect(screen.getAllByTestId("forecast-card-day").length).toBe(mockWeather.daily.time.length);
  });
});
