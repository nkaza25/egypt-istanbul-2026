import { useState } from "react";
import { restaurants } from "../data/tripData";

export default function Restaurants() {
  const [activeCity, setActiveCity] = useState("cairo");

  const cities = [
    { key: "cairo", label: "🇪🇬 Cairo", count: restaurants.cairo.length },
    { key: "istanbul", label: "🇹🇷 Istanbul", count: restaurants.istanbul.length },
  ];

  const list = restaurants[activeCity];

  return (
    <div className="restaurants-tab">
      <h2>Restaurant Guide</h2>
      <div className="city-toggle">
        {cities.map((c) => (
          <button
            key={c.key}
            className={`city-btn ${activeCity === c.key ? "active" : ""}`}
            onClick={() => setActiveCity(c.key)}
          >
            {c.label}
            <span className="city-count">{c.count}</span>
          </button>
        ))}
      </div>
      <div className="restaurant-grid">
        {list.map((r, i) => (
          <div key={i} className="restaurant-card">
            <div className="restaurant-name">{r.name}</div>
            <div className="restaurant-cuisine">{r.cuisine}</div>
            <div className="restaurant-meta">
              <span className="restaurant-vibe">{r.vibe}</span>
              <span className="restaurant-price">{r.price}/person</span>
            </div>
            <div className="restaurant-best">{r.bestFor}</div>
            <div className="restaurant-location">📍 {r.location}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
