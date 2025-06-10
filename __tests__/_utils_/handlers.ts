import { mockGeoInfo, mockQuote, mockWeather } from "../_mocks_/data";
import type { FetchMockOptions } from "@customTypes/test";

export function setupFetchMocks(mockFetch: jest.Mock, { geoOk = true }: FetchMockOptions = {}) {
  mockFetch.mockImplementation((url: RequestInfo | URL) => {
    const urlString = url.toString();

    if (urlString.includes("forismatic")) {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockQuote),
      } as Response);
    }

    if (urlString.includes("/api/geo")) {
      if (geoOk) {
        return Promise.resolve({
          ok: true,
          json: () => Promise.resolve(mockGeoInfo),
        } as Response);
      } else {
        return Promise.resolve({ ok: false, status: 500 } as Response);
      }
    }

    if (urlString.includes("open-meteo")) {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockWeather),
      } as Response);
    }

    return Promise.reject(new Error(`Unhandled fetch: ${urlString}`));
  });
}
