"use client";

import { SectionHeading } from "@/components/shared/section-heading";
import { WorldMap } from "@/components/ui/world-map";

const connections = [
  {
    start: { lat: 28.6139, lng: 77.209, label: "New Delhi" },
    end: { lat: 51.5074, lng: -0.1278, label: "London" },
  },
  {
    start: { lat: 28.6139, lng: 77.209, label: "New Delhi" },
    end: { lat: 25.2048, lng: 55.2708, label: "Dubai" },
  },
  {
    start: { lat: 28.6139, lng: 77.209, label: "New Delhi" },
    end: { lat: 40.7128, lng: -74.006, label: "New York" },
  },
  {
    start: { lat: 28.6139, lng: 77.209, label: "New Delhi" },
    end: { lat: 1.3521, lng: 103.8198, label: "Singapore" },
  },
  {
    start: { lat: 28.6139, lng: 77.209, label: "New Delhi" },
    end: { lat: -1.2921, lng: 36.8219, label: "Nairobi" },
  },
];

export default function WorldMapSection() {
  return (
    <section className="py-20 md:py-24 bg-white">
      <div className="max-w-[1280px] mx-auto px-6">
        <SectionHeading
          subtitle="Global Reach"
          title="Based in India. Delivering Globally."
          description="From our headquarters in Gurugram, we serve clients across five continents."
          align="center"
        />

        <div className="mt-12">
          <WorldMap dots={connections} lineColor="#FF3E00" />
        </div>
      </div>
    </section>
  );
}
