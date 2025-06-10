import { NextResponse } from "next/server";

export async function GET() {
  const url = "http://ip-api.com/json/";

  // if (process.env.VERCEL) {
  //   const ip = request.headers.get("x-forwarded-for");

  //   if (ip) {
  //     url = `http://ip-api.com/json/${ip}`;
  //   }
  // }

  // console.log("URL", url);

  try {
    const geoResponse = await fetch(url);
    const data = await geoResponse.json();

    if (data.status === "fail") {
      throw new Error(data.message || "Failed to fetch geolocation from ip-api.com");
    }

    const geoInfo = {
      latitude: data.lat,
      longitude: data.lon,
      city: data.city,
      region: data.regionName,
      country: data.country,
    };

    return NextResponse.json(geoInfo, {
      headers: {
        "Cache-Control": "public, s-maxage=86400, stale-while-revalidate=86400",
      },
    });
  } catch (error) {
    console.error("Failed to fetch from ip-api.com:", error);

    const geoInfo = {
      latitude: parseFloat(process.env.DEFAULT_LATITUDE!),
      longitude: parseFloat(process.env.DEFAULT_LONGITUDE!),
      city: process.env.DEFAULT_CITY!,
      region: process.env.DEFAULT_REGION!,
      country: process.env.DEFAULT_COUNTRY!,
    };

    return NextResponse.json(geoInfo);
  }
}
