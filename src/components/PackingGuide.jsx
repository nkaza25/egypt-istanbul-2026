import { useState } from "react";

const categories = [
  {
    icon: "👕",
    title: "Clothing",
    items: [
      { item: "Light, breathable layers", note: "Egypt is hot; Istanbul is cooler" },
      { item: "Comfortable walking shoes", note: "Lots of cobblestone & uneven ground" },
      { item: "Modest outfit for mosques", note: "Cover shoulders & knees" },
      { item: "Headscarf (women)", note: "Required at Hagia Sophia & Blue Mosque" },
      { item: "Light jacket or sweater", note: "Istanbul evenings & cruise deck" },
      { item: "Swimsuit", note: "Hotel pool & Nile cruise sundeck" },
    ],
  },
  {
    icon: "☀️",
    title: "Sun & Heat Protection",
    items: [
      { item: "Sunscreen SPF 50+", note: "Reapply often — Egypt sun is strong" },
      { item: "Wide-brimmed hat", note: "Essential for pyramids & temples" },
      { item: "Sunglasses", note: "Desert glare" },
      { item: "Refillable water bottle", note: "Fill with bottled water; 2L/day in Upper Egypt" },
    ],
  },
  {
    icon: "🌧️",
    title: "Rain & Cool Weather",
    items: [
      { item: "Compact umbrella", note: "For Istanbul's spring showers" },
      { item: "Light rain jacket", note: "Packable — won't need in Egypt" },
    ],
  },
  {
    icon: "💊",
    title: "Health & Comfort",
    items: [
      { item: "Motion sickness medication", note: "Nile cruise & hot air balloon" },
      { item: "Basic first aid kit", note: "Band-aids, pain relief, anti-diarrheal" },
      { item: "Hand sanitizer", note: "Bazaars & street food" },
      { item: "Insect repellent", note: "Evenings on the Nile" },
    ],
  },
  {
    icon: "🎒",
    title: "Day Bag Essentials",
    items: [
      { item: "Small crossbody or anti-theft bag", note: "Bazaars & crowded sites" },
      { item: "Portable phone charger", note: "Long sightseeing days" },
      { item: "Copies of passport & e-visas", note: "Egypt + Turkey e-visas" },
      { item: "Small bills (USD + local)", note: "Tips, haggling, vendors" },
    ],
  },
];

export default function PackingGuide({ compact = false }) {
  const [expandedCats, setExpandedCats] = useState(
    compact ? {} : Object.fromEntries(categories.map((_, i) => [i, true]))
  );

  const toggle = (i) => {
    setExpandedCats((prev) => ({ ...prev, [i]: !prev[i] }));
  };

  return (
    <div className={`packing-guide ${compact ? "compact" : ""}`}>
      {!compact && <h2>Packing Guide</h2>}
      {compact && <h3 className="packing-compact-title">🧳 Packing Checklist</h3>}
      <div className="packing-categories">
        {categories.map((cat, i) => (
          <div key={i} className={`packing-category ${expandedCats[i] ? "open" : ""}`}>
            <button className="packing-cat-header" onClick={() => toggle(i)}>
              <span className="packing-cat-label">
                <span className="packing-cat-icon">{cat.icon}</span>
                {cat.title}
              </span>
              <span className={`chevron ${expandedCats[i] ? "open" : ""}`}>›</span>
            </button>
            {expandedCats[i] && (
              <ul className="packing-items">
                {cat.items.map((entry, j) => (
                  <li key={j}>
                    <span className="packing-item-name">{entry.item}</span>
                    <span className="packing-item-note">{entry.note}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
