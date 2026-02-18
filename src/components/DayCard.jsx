import { useState } from "react";

const locationStyles = {
  cairo: { gradient: "linear-gradient(135deg, #ff9800, #ff5722)", label: "Cairo", emoji: "🇪🇬" },
  nile: { gradient: "linear-gradient(135deg, #2196f3, #00bcd4)", label: "Nile Cruise", emoji: "⛵" },
  istanbul: { gradient: "linear-gradient(135deg, #e91e63, #9c27b0)", label: "Istanbul", emoji: "🇹🇷" },
};

export default function DayCard({ day }) {
  const [safetyOpen, setSafetyOpen] = useState(false);
  const [infoOpen, setInfoOpen] = useState(false);
  const loc = locationStyles[day.location];

  return (
    <div className={`day-card location-${day.location}`} id={`day-${day.dayNum}`}>
      <div className="day-card-header" style={{ background: loc.gradient }}>
        <div className="day-badge">Day {day.dayNum}</div>
        <div className="day-title-block">
          <h3>{day.title}</h3>
          <span className="day-date">{day.date}</span>
        </div>
        <span className="day-location-badge">{loc.emoji} {loc.label}</span>
      </div>

      <div className="day-card-body">
        <div className="day-media">
          <div className="day-image-wrapper">
            <img src={day.image} alt={day.imageAlt} loading="lazy" />
            <div className="photo-ops-badge">
              <span>📸</span> {day.photoOps}
            </div>
          </div>
        </div>

        <div className="day-details">
          <p className="day-overview">{day.overview}</p>

          {day.note && <div className="day-note">📌 {day.note}</div>}

          <div className="day-highlights">
            <h4>Highlights</h4>
            <ul>
              {day.highlights.map((h, i) => (
                <li key={i}>{h}</li>
              ))}
            </ul>
          </div>

          {day.practicalInfo && (
            <div className="day-practical">
              <button className="collapsible-btn" onClick={() => setInfoOpen(!infoOpen)}>
                <span>ℹ️ Practical Info</span>
                <span className={`chevron ${infoOpen ? "open" : ""}`}>›</span>
              </button>
              {infoOpen && (
                <div className="collapsible-content">
                  {day.practicalInfo.map((info, i) => (
                    <div key={i} className="info-row">
                      <span className="info-label">{info.label}</span>
                      <span className="info-value">{info.value}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {day.hotel && (
            <div className="day-hotel">
              <h4>🏨 Hotel</h4>
              <div className="hotel-info">
                <strong>{day.hotel.name}</strong>
                <p>{day.hotel.desc}</p>
                <span className="hotel-price">{day.hotel.price}</span>
              </div>
            </div>
          )}

          {day.dining.length > 0 && (
            <div className="day-dining">
              <h4>🍽️ Dining</h4>
              {day.dining.map((d, i) => (
                <div key={i} className="dining-item">
                  <div className="dining-header">
                    <strong>{d.name}</strong>
                    {d.price && <span className="dining-price">{d.price}</span>}
                  </div>
                  <p>{d.desc}</p>
                </div>
              ))}
            </div>
          )}

          {day.safety.length > 0 && (
            <div className="day-safety">
              <button className="collapsible-btn safety-btn" onClick={() => setSafetyOpen(!safetyOpen)}>
                <span>⚠️ Safety Tips ({day.safety.length})</span>
                <span className={`chevron ${safetyOpen ? "open" : ""}`}>›</span>
              </button>
              {safetyOpen && (
                <ul className="collapsible-content safety-list">
                  {day.safety.map((s, i) => (
                    <li key={i}>{s}</li>
                  ))}
                </ul>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
