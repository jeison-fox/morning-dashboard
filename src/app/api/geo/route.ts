import { NextRequest, NextResponse } from "next/server";

export const runtime = "edge";

export function GET(request: NextRequest) {
  const { latitude, longitude, city, region, country } = request.geo ?? {
    latitude: parseFloat(process.env.DEFAULT_LATITUDE!),
    longitude: parseFloat(process.env.DEFAULT_LONGITUDE!),
    city: process.env.DEFAULT_CITY!,
    region: process.env.DEFAULT_REGION!,
    country: process.env.DEFAULT_COUNTRY!,
  };

  return NextResponse.json(
    { city, region, country, latitude, longitude },
    {
      headers: {
        "Cache-Control": "public, s-maxage=86400, stale-while-revalidate=86400",
      },
    },
  );
}
