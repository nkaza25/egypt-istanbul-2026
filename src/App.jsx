import { useState } from "react";
import TabNav from "./components/TabNav";
import Overview from "./components/Overview";
import Itinerary from "./components/Itinerary";
import Pricing from "./components/Pricing";
import Restaurants from "./components/Restaurants";
import Safety from "./components/Safety";
import Schedule from "./components/Schedule";
import "./App.css";

export default function App() {
  const [activeTab, setActiveTab] = useState("overview");
  const [scrollToDay, setScrollToDay] = useState(null);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setScrollToDay(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleCalendarDayClick = (date) => {
    const dayMap = { 8: 0, 9: 1, 10: 2, 11: 3, 12: 4, 13: 5, 14: 6, 15: 7, 16: 8, 17: 9, 18: 10, 19: 11 };
    if (dayMap[date] !== undefined) {
      setScrollToDay(dayMap[date]);
      setActiveTab("itinerary");
    }
  };

  return (
    <div className="app">
      <header className="app-header">
        <div className="header-content">
          <div className="header-left">
            <span className="header-icon">✈️</span>
            <div>
              <h1>Egypt & Istanbul 2026</h1>
              <span className="header-dates">April 8–19</span>
            </div>
          </div>
        </div>
        <TabNav activeTab={activeTab} onTabChange={handleTabChange} />
      </header>

      <main className="main-content">
        {activeTab === "overview" && <Overview onDayClick={handleCalendarDayClick} />}
        {activeTab === "schedule" && <Schedule />}
        {activeTab === "itinerary" && <Itinerary scrollToDay={scrollToDay} />}
        {activeTab === "pricing" && <Pricing />}
        {activeTab === "restaurants" && <Restaurants />}
        {activeTab === "safety" && <Safety />}
      </main>

      <footer className="app-footer">
        <p>Egypt & Istanbul Trip Planner — April 2026</p>
        <p className="footer-sub">6 travelers, 12 days, 3 cities</p>
      </footer>
    </div>
  );
}
