import { useState } from "react";
import { days } from "../data/tripData";
import DayCard from "./DayCard";
import PackingGuide from "./PackingGuide";

const filters = [
  { key: "all", label: "All Days" },
  { key: "cairo", label: "🇪🇬 Cairo" },
  { key: "nile", label: "⛵ Nile Cruise" },
  { key: "istanbul", label: "🇹🇷 Istanbul" },
];

export default function Itinerary({ scrollToDay }) {
  const [activeFilter, setActiveFilter] = useState("all");

  const filtered = activeFilter === "all" ? days : days.filter((d) => d.location === activeFilter);

  return (
    <div className="itinerary-tab">
      <div className="itinerary-header">
        <h2>Day-by-Day Itinerary</h2>
        <div className="filter-bar">
          {filters.map((f) => (
            <button
              key={f.key}
              className={`filter-btn ${activeFilter === f.key ? "active" : ""}`}
              onClick={() => setActiveFilter(f.key)}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      <div className="itinerary-layout">
        <div className="itinerary-main">
          <div className="timeline">
            <div className="timeline-line"></div>
            {filtered.map((day) => (
              <div key={day.dayNum} className="timeline-item" ref={scrollToDay === day.dayNum ? (el) => el?.scrollIntoView({ behavior: "smooth", block: "start" }) : undefined}>
                <div className="timeline-dot-wrapper">
                  <div className={`timeline-dot location-${day.location}`}></div>
                </div>
                <DayCard day={day} />
              </div>
            ))}
          </div>
        </div>
        <aside className="itinerary-sidebar">
          <div className="sidebar-sticky">
            <PackingGuide compact />
          </div>
        </aside>
      </div>
    </div>
  );
}
