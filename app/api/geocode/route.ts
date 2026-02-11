// app/api/geocode/route.ts
import { NextResponse } from "next/server";


export interface NominatimResult {
  display_name: string;
  lat: string;
  lon: string;
  boundingbox: string[];
  type: string;
  class: string;
}

export async function GET(request: Request) {
  const url = new URL(request.url);
  const q = url.searchParams.get("q");
  if (!q) return NextResponse.json({ error: "Missing query" }, { status: 400 });

  const nominatimUrl = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
    q,
  )}&limit=8&addressdetails=1`;

  const res = await fetch(nominatimUrl, {
    headers: {
      // Nominatim requires a valid User-Agent identifying your app.
      "User-Agent": "nextjs-globe-example/1.0 (contact@yourdomain.com)",
    },
  });

  if (!res.ok)
    return NextResponse.json({ error: "Geocode failed" }, { status: 500 });

  const json = await res.json();

  const results = (json || []).map((r:NominatimResult) => ({
    name: r.display_name,
    lat: parseFloat(r.lat),
    lon: parseFloat(r.lon),
    boundingbox: r.boundingbox,
    type: r.type,
    class: r.class,
  }));

  return NextResponse.json({ results });
}
