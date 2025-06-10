import { NextRequest, NextResponse } from "next/server";
import { geolocation } from "@vercel/functions";

export function GET(request: NextRequest) {
  const apiKey = request.headers.get("x-api-key");

  if (apiKey !== process.env.API_KEY) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { latitude, longitude, city, region, country } = geolocation(request);

  const geoInfo = {
    latitude: latitude ?? parseFloat(process.env.DEFAULT_LATITUDE!),
    longitude: longitude ?? parseFloat(process.env.DEFAULT_LONGITUDE!),
    city: city ?? process.env.DEFAULT_CITY!,
    region: region ?? process.env.DEFAULT_REGION!,
    country: country ?? process.env.DEFAULT_COUNTRY!,
  };

  return NextResponse.json(geoInfo, {
    headers: {
      "Cache-Control": "public, s-maxage=86400, stale-while-revalidate=86400",
    },
  });
}
