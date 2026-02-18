import { travelers, weather, calendarData } from "../data/tripData";
import Calendar from "./Calendar";
import PackingGuide from "./PackingGuide";

export default function Overview({ onDayClick }) {
  return (
    <div className="overview-tab">
      <section className="hero-section">
        <div className="hero-content">
          <h1>Egypt & Istanbul</h1>
          <p className="hero-dates">April 8–19, 2026</p>
          <div className="hero-flags">
            <span className="flag-badge egypt">🇪🇬 Egypt</span>
            <span className="flag-badge istanbul">🇹🇷 Istanbul</span>
          </div>
        </div>
      </section>

      <section className="route-section">
        <h2>Our Journey</h2>
        <div className="route-timeline">
          <div className="route-track"></div>

          <div className="route-stop cairo">
            <div className="route-dot"></div>
            <div className="route-info">
              <h4>Cairo</h4>
              <span className="route-dates">Apr 8–10</span>
              <span className="route-desc">Pyramids, GEM, Food Tour</span>
            </div>
            <div className="route-travel-label">✈️ Fly to Aswan</div>
          </div>

          <div className="route-stop nile">
            <div className="route-dot"></div>
            <div className="route-info">
              <h4>Nile Cruise</h4>
              <span className="route-dates">Apr 11–14</span>
              <span className="route-desc">Temples, Valley of Kings, Balloon</span>
            </div>
            <div className="route-travel-label">✈️ Fly to Cairo</div>
          </div>

          <div className="route-stop cairo">
            <div className="route-dot"></div>
            <div className="route-info">
              <h4>Cairo</h4>
              <span className="route-dates">Apr 14–16</span>
              <span className="route-desc">Khan El-Khalili, Old Cairo</span>
            </div>
            <div className="route-travel-label">✈️ Fly to Istanbul</div>
          </div>

          <div className="route-stop istanbul last">
            <div className="route-dot"></div>
            <div className="route-info">
              <h4>Istanbul</h4>
              <span className="route-dates">Apr 16–19</span>
              <span className="route-desc">Hagia Sophia, Bosphorus, Bazaars</span>
            </div>
          </div>
        </div>
      </section>

      <section className="travelers-section">
        <h2>The Travelers</h2>
        <div className="family-cards">
          {Object.values(travelers).map((family) => (
            <div key={family.name} className="family-card">
              <div className="family-header">
                <h3>{family.name}</h3>
              </div>
              <div className="member-list">
                {family.members.map((m) => (
                  <div key={m.name} className="member-row">
                    <div className="member-info">
                      <span className="member-name">{m.name}</span>
                      <span className="member-age">{m.age}</span>
                    </div>
                    <div className="member-destinations">
                      <span className={`dest-badge ${m.egypt ? "yes" : "no"}`}>
                        🇪🇬 {m.egypt ? "✓" : "✗"}
                      </span>
                      <span className={`dest-badge ${m.istanbul ? "yes" : "no"}`}>
                        🇹🇷 {m.istanbul ? "✓" : "✗"}
                      </span>
                    </div>
                    <span className="member-arrival">{m.arrivalNote}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <Calendar data={calendarData} onDayClick={onDayClick} />

      <section className="weather-section">
        <h2>Expected Weather</h2>
        <div className="weather-cards">
          {weather.map((w) => (
            <div key={w.location} className="weather-card">
              <div className="weather-card-top">
                <span className="weather-icon">{w.icon}</span>
                <div>
                  <h3>{w.location}</h3>
                  {w.subtitle && <span className="weather-subtitle">{w.subtitle}</span>}
                </div>
              </div>
              <div className="weather-condition">{w.condition}</div>
              <div className="weather-temp">{w.temp}</div>
              <div className="weather-rain">{w.rainSummary}</div>
              <p className="weather-notes">{w.notes}</p>
              <div className="weather-packing">
                <strong>Pack:</strong>
                <ul>
                  {w.packingTips.map((tip, i) => (
                    <li key={i}>{tip}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <PackingGuide />
    </div>
  );
}
