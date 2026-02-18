import { useState } from "react";

const locationColors = {
  cairo: { bg: "#fff3e0", border: "#ff9800", label: "Cairo" },
  nile: { bg: "#e3f2fd", border: "#2196f3", label: "Nile Cruise" },
  istanbul: { bg: "#fce4ec", border: "#e91e63", label: "Istanbul" },
};

export default function Calendar({ data, onDayClick }) {
  const [hoveredDay, setHoveredDay] = useState(null);

  return (
    <section className="calendar-section">
      <h2>Calendar — April 2026</h2>
      <div className="calendar-legend">
        {Object.entries(locationColors).map(([key, val]) => (
          <span key={key} className="legend-item">
            <span className="legend-dot" style={{ background: val.border }}></span>
            {val.label}
          </span>
        ))}
      </div>
      {Object.values(data).map((week) => (
        <div key={week.label} className="calendar-week">
          <h3>{week.label}</h3>
          <div className="calendar-grid">
            {week.days.map((day) => {
              const loc = day.location ? locationColors[day.location] : null;
              const isActive = day.content !== "";
              return (
                <div
                  key={day.date}
                  className={`calendar-cell ${isActive ? "active" : "empty"} ${hoveredDay === day.date ? "hovered" : ""}`}
                  style={loc ? { backgroundColor: loc.bg, borderColor: loc.border } : {}}
                  onMouseEnter={() => setHoveredDay(day.date)}
                  onMouseLeave={() => setHoveredDay(null)}
                  onClick={() => isActive && onDayClick?.(day.date)}
                >
                  <div className="cell-header">
                    <span className="cell-day">{day.day}</span>
                    <span className="cell-date">{day.date}</span>
                  </div>
                  {isActive && (
                    <>
                      <span className="cell-icon">{day.icon}</span>
                      <p className="cell-content">{day.content}</p>
                    </>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </section>
  );
}
