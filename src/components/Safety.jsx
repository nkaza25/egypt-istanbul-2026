import { useState } from "react";
import { safetyTips } from "../data/tripData";

export default function Safety() {
  const [openSections, setOpenSections] = useState({ egypt: true, istanbul: true });
  const [openTips, setOpenTips] = useState({});

  const toggleSection = (key) => {
    setOpenSections((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const toggleTip = (key) => {
    setOpenTips((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="safety-tab">
      <h2>Safety Quick Reference</h2>
      <p className="safety-intro">
        Tap any topic to expand for detailed advice. These tips are curated for families traveling with children.
      </p>

      {Object.entries(safetyTips).map(([regionKey, region]) => (
        <div key={regionKey} className="safety-region">
          <button className="region-header" onClick={() => toggleSection(regionKey)}>
            <span>
              <span className="region-icon">{region.icon}</span>
              <span className="region-label">{region.label}</span>
              <span className="region-count">{region.tips.length} tips</span>
            </span>
            <span className={`chevron ${openSections[regionKey] ? "open" : ""}`}>›</span>
          </button>

          {openSections[regionKey] && (
            <div className="safety-tips-list">
              {region.tips.map((tip, i) => {
                const tipKey = `${regionKey}-${i}`;
                const isOpen = openTips[tipKey];
                return (
                  <div key={i} className={`safety-tip-item ${isOpen ? "open" : ""}`}>
                    <button className="tip-header" onClick={() => toggleTip(tipKey)}>
                      <span className="tip-topic">{tip.topic}</span>
                      <span className={`chevron ${isOpen ? "open" : ""}`}>›</span>
                    </button>
                    {isOpen && (
                      <div className="tip-advice">
                        {tip.advice}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
