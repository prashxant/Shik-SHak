"use client";

import { Button } from "@/component/ui/button";
import { Input } from "@/component/ui/input";
import { Spinner } from "@/component/ui/spinner";
import { useState } from "react";

type Place = { name: string; lat: number; lon: number };

export default function PlaceForm({
  onAddTemp,
  tempList,
}: {
  onAddTemp: (p: Place) => void;
  tempList: Place[];
}) {
  const [q, setQ] = useState("");
  const [results, setResults] = useState<Place[]>([]);
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");

  const search = async () => {
    setErr("");
    if (!q.trim()) return;
    setLoading(true);
    try {
      const res = await fetch(`/api/geocode?q=${encodeURIComponent(q)}`);
      if (!res.ok) {
        setResults([]);
        setErr("Search failed");
        return;
      }
      const json = await res.json();
      if (!json.results || json.results.length === 0) {
        setResults([]);
        setErr("No results found");
      } else {
        setResults(
          json.results.map((r:any) => ({
            name: r.name || "Unknown",
            lat: typeof r.lat === "string" ? parseFloat(r.lat) : r.lat,
            lon: typeof r.lon === "string" ? parseFloat(r.lon) : r.lon,
          })),
        );
      }
    } catch (e) {
      setErr("Search failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full space-y-4">
      <div className="flex w-full flex-col items-stretch gap-2 sm:flex-row">
        <Input
          className="flex-1 rounded-lg border-slate-200/30 px-4 py-2 shadow-md transition placeholder:text-slate-400 focus:ring-2 focus:ring-blue-500 sm:py-3"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search for places (city, country, landmark)..."
          onKeyDown={(e) => {
            if (e.key === "Enter") search();
          }}
        />
        <Button
          type="submit"
          onClick={search}
          variant="outline"
          className="w-full rounded-lg px-4 py-2 font-medium transition hover:bg-blue-50 sm:w-auto sm:px-6 sm:py-3"
        >
          {loading ? <Spinner /> : "Search"}
        </Button>
      </div>

      {err && (
        <div className="mt-2 rounded-lg border border-red-200/50 bg-red-50 px-3 py-2 text-sm text-red-500">
          {err}
        </div>
      )}

      <div className="max-h-96 space-y-2 overflow-y-auto">
        {results.length > 0 && (
          <div className="space-y-2">
            {results.map((r, i) => (
              <div
                key={i}
                className="flex flex-col items-start justify-between gap-3 rounded-lg border border-slate-300/20 bg-white/50 p-3 backdrop-blur-sm transition hover:bg-blue-50/50 sm:flex-row sm:items-center sm:p-4"
              >
                <div className="min-w-0 flex-1">
                  <div className="truncate text-sm font-semibold text-slate-800 sm:text-base">
                    {r.name}
                  </div>
                  <div className="font-mono text-xs text-slate-500 sm:text-sm">
                    {Number(r.lat).toFixed(4)}, {Number(r.lon).toFixed(4)}
                  </div>
                </div>
                <button
                  onClick={() => {
                    onAddTemp({
                      name: r.name,
                      lat: Number(r.lat),
                      lon: Number(r.lon),
                    });
                    setQ("");
                    setResults([]);
                    setErr("");
                  }}
                  className="w-full cursor-pointer rounded-lg bg-linear-to-r from-blue-500 to-cyan-500 px-4 py-2 text-sm font-medium text-white shadow-md transition hover:from-blue-600 hover:to-cyan-600 sm:w-auto"
                >
                  Add
                </button>
              </div>
            ))}
          </div>
        )}

        {tempList.length > 0 && (
          <div className="mt-4 space-y-2 rounded-lg border border-amber-200/50 bg-linear-to-r from-amber-50 to-orange-50 p-3 shadow-md sm:p-4">
            <div className="text-sm font-semibold text-amber-900 sm:text-base">
              To render ({tempList.length})
            </div>
            <ul className="space-y-1">
              {tempList.map((t, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2 text-xs text-amber-800 sm:text-sm"
                >
                  <span className="mt-1 text-amber-600">•</span>
                  <span className="truncate">
                    {t.name} — {t.lat.toFixed(4)}, {t.lon.toFixed(4)}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
