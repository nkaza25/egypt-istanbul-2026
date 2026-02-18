import { useState, useRef, useEffect } from "react";
import { scheduleEvents, scheduleHours, eventColors } from "../data/scheduleData";

const allDates = Object.keys(scheduleEvents);
const HOUR_HEIGHT = 60; // px per hour

const weekGroups = [
  { label: "Week 1 — Egypt", dates: allDates.slice(0, 6) },
  { label: "Week 2 — Egypt → Istanbul", dates: allDates.slice(6, 12) },
];

function formatHour(h) {
  if (h === 0 || h === 24) return "12 AM";
  if (h === 12) return "12 PM";
  if (h < 12) return `${h} AM`;
  return `${h - 12} PM`;
}

function formatTime(h) {
  const hour = Math.floor(h);
  const min = Math.round((h - hour) * 60);
  const period = hour >= 12 ? "PM" : "AM";
  const displayHour = hour > 12 ? hour - 12 : hour === 0 ? 12 : hour;
  return min > 0 ? `${displayHour}:${String(min).padStart(2, "0")} ${period}` : `${displayHour} ${period}`;
}

const locationLabels = {
  cairo: "Cairo",
  nile: "Nile Cruise",
  istanbul: "Istanbul",
};

export default function Schedule() {
  const [activeWeek, setActiveWeek] = useState(0);
  const [hoveredEvent, setHoveredEvent] = useState(null);
  const gridRef = useRef(null);

  const dates = weekGroups[activeWeek].dates;

  // Compute visible hour range for this week
  let minHour = 24, maxHour = 0;
  for (const date of dates) {
    const day = scheduleEvents[date];
    for (const ev of day.events) {
      if (ev.start < minHour) minHour = ev.start;
      const end = ev.start + ev.duration;
      if (end > maxHour) maxHour = end;
    }
  }
  minHour = Math.floor(minHour);
  maxHour = Math.ceil(maxHour);
  const visibleHours = scheduleHours.filter((h) => h >= minHour && h <= maxHour);

  // Scroll to ~8AM on mount
  useEffect(() => {
    if (gridRef.current) {
      const eightAM = (8 - minHour) * HOUR_HEIGHT;
      gridRef.current.scrollTop = Math.max(0, eightAM - 20);
    }
  }, [activeWeek, minHour]);

  return (
    <div className="schedule-tab">
      <div className="schedule-header">
        <h2>Schedule</h2>
        <div className="schedule-week-toggle">
          {weekGroups.map((wg, i) => (
            <button
              key={i}
              className={`schedule-week-btn ${activeWeek === i ? "active" : ""}`}
              onClick={() => setActiveWeek(i)}
            >
              {wg.label}
            </button>
          ))}
        </div>
      </div>

      <div className="schedule-legend">
        {Object.entries(eventColors).map(([type, colors]) => (
          <span key={type} className="schedule-legend-item" style={{ background: colors.bg, borderColor: colors.border, color: colors.text }}>
            {type}
          </span>
        ))}
      </div>

      <div className="schedule-grid-wrapper" ref={gridRef}>
        <div className="schedule-grid" style={{ gridTemplateColumns: `56px repeat(${dates.length}, 1fr)` }}>
          {/* Column headers */}
          <div className="schedule-corner"></div>
          {dates.map((date) => {
            const day = scheduleEvents[date];
            return (
              <div key={date} className={`schedule-col-header location-${day.location}`}>
                <span className="sch-day-name">{day.dayLabel}</span>
                <span className="sch-date">{date}</span>
                <span className="sch-location">{locationLabels[day.location]}</span>
              </div>
            );
          })}

          {/* Time gutter + day columns */}
          <div className="schedule-time-gutter">
            {visibleHours.map((h) => (
              <div key={h} className="schedule-time-label" style={{ height: HOUR_HEIGHT }}>
                {formatHour(h)}
              </div>
            ))}
          </div>

          {dates.map((date) => {
            const day = scheduleEvents[date];
            return (
              <div key={date} className={`schedule-day-col location-bg-${day.location}`}>
                {/* Hour grid lines */}
                {visibleHours.map((h) => (
                  <div key={h} className="schedule-hour-line" style={{ height: HOUR_HEIGHT }}></div>
                ))}

                {/* Events */}
                {day.events.map((ev, i) => {
                  const top = (ev.start - minHour) * HOUR_HEIGHT;
                  const height = Math.max(ev.duration * HOUR_HEIGHT - 2, 20);
                  const colors = eventColors[ev.type];
                  const isHovered = hoveredEvent === `${date}-${i}`;
                  return (
                    <div
                      key={i}
                      className={`schedule-event ${isHovered ? "hovered" : ""}`}
                      style={{
                        top,
                        height,
                        background: colors.bg,
                        borderLeft: `3px solid ${colors.border}`,
                        color: colors.text,
                      }}
                      onMouseEnter={() => setHoveredEvent(`${date}-${i}`)}
                      onMouseLeave={() => setHoveredEvent(null)}
                    >
                      <span className="sch-event-time">{formatTime(ev.start)}</span>
                      <span className="sch-event-title">{ev.title}</span>
                      {(isHovered || height > 50) && ev.detail && (
                        <span className="sch-event-detail">{ev.detail}</span>
                      )}
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
