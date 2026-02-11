"use client";

import { useState, useCallback } from "react";

import { Button } from "@/component/ui/button";
import { Globe } from "@/component/globe/Globe";
import PlaceForm from "@/component/globe/PlaceForm";
import CopyInstall from "@/component/globe/InstallButton";
import { CopyGlobeButton } from "@/component/globe/copyGlobe";
import GlobeFooter from "@/component/globe/footer";

type Place = {
  name: string;
  lat: number;
  lon: number;
};

export default function Page() {
  const [markers, setMarkers] = useState<Place[]>([]);
  const [draftPlaces, setDraftPlaces] = useState<Place[]>([]);

  const addDraftPlace = useCallback((place: Place) => {
    setDraftPlaces((prev) => {
      const exists = prev.some(
        (p) => p.lat === place.lat && p.lon === place.lon,
      );
      return exists ? prev : [...prev, place];
    });
  }, []);

  const commitDraftPlaces = useCallback(() => {
    if (draftPlaces.length === 0) return;

    setMarkers((prev) => [...prev, ...draftPlaces]);
    setDraftPlaces([]);
  }, [draftPlaces]);

  const clearAll = useCallback(() => {
    setMarkers([]);
    setDraftPlaces([]);
  }, []);

  const removeMarker = useCallback((index: number) => {
    setMarkers((prev) => prev.filter((_, i) => i !== index));
  }, []);

  const hasDrafts = draftPlaces.length > 0;
  const hasMarkers = markers.length > 0;

  return (
    <main className="min-h-screen w-full bg-linear-to-b from-slate-500 via-slate-200 to-slate-900 py-6 sm:py-10 lg:py-14">
      <section className="mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 sm:gap-8 sm:px-6 lg:gap-10 lg:px-8">
        <h1 className="pt-6 text-center text-3xl font-bold tracking-tight text-neutral-800 sm:pt-10 sm:text-4xl lg:text-5xl">
          Interactive Globe Component
        </h1>

        <div className="flex w-full justify-center">
          <div className="w-full max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-xl">
            <div className="relative aspect-square w-full overflow-hidden rounded-lg">
              <Globe markers={markers} />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-6 flex max-w-7xl flex-col gap-6 px-4 sm:mt-10 sm:gap-8 sm:px-6 lg:px-8">
        <PlaceForm onAddTemp={addDraftPlace} tempList={draftPlaces} />

        {hasDrafts && (
          <div className="flex flex-col justify-between gap-3 rounded-lg border border-blue-200/20 bg-linear-to-r from-blue-500/10 to-cyan-500/10 px-4 py-3 shadow-lg sm:flex-row">
            <button
              onClick={commitDraftPlaces}
              className="order-1 rounded-md bg-linear-to-r from-blue-500 to-cyan-500 px-4 py-2 font-medium text-white shadow-lg transition hover:from-blue-600 hover:to-cyan-600 sm:order-0"
            >
              Add {draftPlaces.length} to Globe
            </button>

            <Button
              variant="destructive"
              onClick={() => setDraftPlaces([])}
              className="order-2 sm:order-0"
            >
              Cancel
            </Button>
          </div>
        )}

        <div className="flex flex-col gap-4">
          <div className="flex flex-col items-start justify-between gap-3 rounded-lg border border-slate-300/30 bg-white/5 px-4 py-3 shadow-lg backdrop-blur-sm sm:flex-row sm:items-center">
            <strong className="text-lg font-semibold text-slate-700">
              Markers ({markers.length})
            </strong>

            <Button onClick={clearAll} disabled={!hasMarkers}>
              Clear All
            </Button>
          </div>

          <ul className="max-h-60 overflow-y-auto rounded-lg border border-slate-300/30 bg-white/5 px-4 py-3 shadow-lg backdrop-blur-sm">
            {!hasMarkers && (
              <li className="py-4 text-center text-slate-500">
                No markers added yet
              </li>
            )}

            {markers.map((marker, index) => (
              <li
                key={`${marker.lat}-${marker.lon}-${index}`}
                className="flex flex-col items-start justify-between gap-2 rounded border-b border-slate-200/20 px-2 py-2 transition last:border-b-0 hover:bg-white/5 sm:flex-row sm:items-center"
              >
                <span className="flex-1 truncate text-sm font-medium text-slate-700 sm:text-base">
                  {marker.name}
                </span>

                <Button
                  size="sm"
                  onClick={() => removeMarker(index)}
                  className="w-full sm:w-auto"
                >
                  Remove
                </Button>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto mt-12 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 rounded-xl border border-white/20 bg-linear-to-br from-white/10 to-slate-200/10 p-4 shadow-xl backdrop-blur-sm sm:p-6 lg:p-8">
          <div className="space-y-4">
            <h2 className="text-lg font-bold tracking-tight text-slate-700 sm:text-xl lg:text-2xl">
              Setup Instructions
            </h2>
            <p className="text-sm text-slate-600 sm:text-base">
              Install required dependencies in your project:
            </p>
            <CopyInstall />
          </div>

          <div className="border-t border-white/10" />

          <div className="space-y-4">
            <h2 className="text-lg font-bold tracking-tight text-slate-700 sm:text-xl lg:text-2xl">
              Copy Globe Component
            </h2>
            <p className="text-sm text-slate-600 sm:text-base">
              Get your customized globe component with all markers
              pre-populated:
            </p>
            <CopyGlobeButton markers={markers} />
          </div>
        </div>
      </section>

      <GlobeFooter />
    </main>
  );
}
