import { render, screen } from "@testing-library/react";
import Header from "@components/header";

describe("Header", () => {
  it("shows unavailable when geoInfo is null", () => {
    render(<Header geoInfo={null} />);

    expect(screen.getByTestId("header-location-unavailable")).toHaveTextContent("Location Unavailable");
  });

  it("shows city and country when geoInfo is provided", () => {
    const geo = { city: "Bogotá", country: "Colombia" };

    render(<Header geoInfo={geo} />);

    const el = screen.getByTestId("header-location");

    expect(el).toHaveTextContent("Bogotá, Colombia");
  });
});
