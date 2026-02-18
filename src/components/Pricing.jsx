import { useState } from "react";
import { priceTiers } from "../data/tripData";

const tierKeys = ["budget", "comfortable", "premium"];

export default function Pricing() {
  const [selectedTier, setSelectedTier] = useState("comfortable");
  const [compareMode, setCompareMode] = useState(false);

  const notIncluded = [
    "International flights (already booked)",
    "Egypt e-visa ($25/person)",
    "Turkey e-visa (~$50/person, varies by passport)",
    "Travel insurance (highly recommended)",
    "Nile cruise crew tips (~$55/person, sometimes mandatory)",
    "Personal shopping and souvenirs",
    "Rakesh Uncle's separate departure flight from Cairo",
  ];

  if (compareMode) {
    return (
      <div className="pricing-tab">
        <div className="pricing-header">
          <h2>Price Tier Comparison</h2>
          <button className="toggle-compare" onClick={() => setCompareMode(false)}>
            ← Single View
          </button>
        </div>
        <div className="comparison-table-wrapper">
          <table className="comparison-table">
            <thead>
              <tr>
                <th>Category</th>
                {tierKeys.map((k) => (
                  <th key={k} className={priceTiers[k].recommended ? "recommended-col" : ""}>
                    <span className="tier-emoji">{priceTiers[k].emoji}</span>
                    {priceTiers[k].label}
                    {priceTiers[k].recommended && <span className="rec-badge">RECOMMENDED</span>}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {priceTiers.budget.items.map((item, i) => (
                <tr key={i}>
                  <td className="cat-cell">{item.category}</td>
                  {tierKeys.map((k) => (
                    <td key={k} className={priceTiers[k].recommended ? "recommended-col" : ""}>
                      <div className="compare-detail">{priceTiers[k].items[i].details}</div>
                      <div className="compare-cost">{priceTiers[k].items[i].cost}</div>
                    </td>
                  ))}
                </tr>
              ))}
              <tr className="total-row">
                <td><strong>Per Adult Total</strong></td>
                {tierKeys.map((k) => (
                  <td key={k} className={priceTiers[k].recommended ? "recommended-col" : ""}>
                    <strong>{priceTiers[k].totalAdult}</strong>
                  </td>
                ))}
              </tr>
              <tr className="total-row">
                <td><strong>Per Child (est.)</strong></td>
                {tierKeys.map((k) => (
                  <td key={k} className={priceTiers[k].recommended ? "recommended-col" : ""}>
                    <strong>{priceTiers[k].totalChild}</strong>
                  </td>
                ))}
              </tr>
              <tr className="total-row group-total">
                <td><strong>4 Adults + 2 Children</strong></td>
                {tierKeys.map((k) => (
                  <td key={k} className={priceTiers[k].recommended ? "recommended-col" : ""}>
                    <strong>{priceTiers[k].totalGroup}</strong>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
        <div className="not-included">
          <h3>Not Included in Estimates</h3>
          <ul>
            {notIncluded.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

  const tier = priceTiers[selectedTier];

  return (
    <div className="pricing-tab">
      <div className="pricing-header">
        <h2>Price Tiers</h2>
        <button className="toggle-compare" onClick={() => setCompareMode(true)}>
          Compare All ↔
        </button>
      </div>

      <div className="tier-toggle">
        {tierKeys.map((k) => {
          const t = priceTiers[k];
          return (
            <button
              key={k}
              className={`tier-btn ${selectedTier === k ? "active" : ""} ${t.recommended ? "recommended" : ""}`}
              onClick={() => setSelectedTier(k)}
            >
              <span className="tier-emoji-lg">{t.emoji}</span>
              <span className="tier-name">{t.label}</span>
              {t.recommended && <span className="rec-star">★ RECOMMENDED</span>}
            </button>
          );
        })}
      </div>

      <div className="tier-detail">
        <div className="tier-header-card">
          <span className="tier-big-emoji">{tier.emoji}</span>
          <h3>{tier.label}</h3>
          <p className="tier-tagline">{tier.tagline}</p>
        </div>

        <div className="tier-items">
          {tier.items.map((item, i) => (
            <div key={i} className="tier-item">
              <div className="tier-item-left">
                <strong>{item.category}</strong>
                <span>{item.details}</span>
              </div>
              <div className="tier-item-cost">{item.cost}</div>
            </div>
          ))}
        </div>

        <div className="tier-totals">
          <div className="total-card">
            <span className="total-label">Per Adult</span>
            <span className="total-amount">{tier.totalAdult}</span>
          </div>
          <div className="total-card">
            <span className="total-label">Per Child (est.)</span>
            <span className="total-amount">{tier.totalChild}</span>
          </div>
          <div className="total-card highlight">
            <span className="total-label">4 Adults + 2 Children</span>
            <span className="total-amount">{tier.totalGroup}</span>
          </div>
        </div>

        {tier.recommended && (
          <div className="recommendation-box">
            <strong>Recommendation:</strong> The Comfortable tier gives the best balance of quality and value. You get a 5-star Nile cruise, excellent hotels with pyramid views, private guides at key sites, and memorable dining — all without luxury-tier pricing.
          </div>
        )}
      </div>

      <div className="not-included">
        <h3>Not Included in Estimates</h3>
        <ul>
          {notIncluded.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
