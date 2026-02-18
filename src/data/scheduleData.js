// Each event: { start: hour (24h), duration: hours, title, type, detail }
// Types: flight, sightseeing, food, cruise, hotel, free, transport

export const scheduleEvents = {
  "Apr 8": {
    dayLabel: "Tue",
    location: "cairo",
    events: [
      { start: 22, duration: 1.5, title: "Rakesh Uncle arrives CAI", type: "flight", detail: "Cairo Intl Airport" },
      { start: 23.5, duration: 0.5, title: "Transfer to hotel", type: "transport", detail: "Private car → Giza (~45 min)" },
    ],
  },
  "Apr 9": {
    dayLabel: "Wed",
    location: "cairo",
    events: [
      { start: 8, duration: 4, title: "Group arrives throughout day", type: "flight", detail: "Everyone checks into Giza hotel" },
      { start: 13, duration: 3, title: "Rest & settle in", type: "free", detail: "Hotel pool, freshen up" },
      { start: 17, duration: 4, title: "Cairo Street Food Tour", type: "food", detail: "Guided walking tour — koshari, falafel, shawarma, sweets" },
    ],
  },
  "Apr 10": {
    dayLabel: "Thu",
    location: "cairo",
    events: [
      { start: 9, duration: 4.5, title: "Grand Egyptian Museum", type: "sightseeing", detail: "100,000+ artifacts, Tutankhamun's treasures" },
      { start: 13.5, duration: 1, title: "Lunch", type: "food", detail: "GEM food court or 139 Pavilion (Mena House)" },
      { start: 14.5, duration: 3.5, title: "Pyramids of Giza & Sphinx", type: "sightseeing", detail: "Great Pyramid, Khafre, Menkaure, Sphinx" },
      { start: 19, duration: 2, title: "Dinner", type: "food", detail: "Felfela or Abou El Sid" },
    ],
  },
  "Apr 11": {
    dayLabel: "Fri",
    location: "nile",
    events: [
      { start: 5, duration: 1.5, title: "Wake up & breakfast box → airport", type: "transport", detail: "Hotel arranges early breakfast box" },
      { start: 6.5, duration: 1.5, title: "Flight: Cairo → Aswan", type: "flight", detail: "~1.5 hr flight" },
      { start: 8.5, duration: 1, title: "Cruise guide meets at airport", type: "transport", detail: "All Aswan sightseeing organized by the cruise — guide + driver included" },
      { start: 9.5, duration: 0.5, title: "Aswan High Dam", type: "sightseeing", detail: "Quick drive-by stop, 20 min" },
      { start: 10.5, duration: 0.75, title: "Unfinished Obelisk", type: "sightseeing", detail: "Short visit, ancient granite quarry" },
      { start: 11.75, duration: 2, title: "Philae Temple", type: "sightseeing", detail: "Motorboat to island temple of Isis — main highlight" },
      { start: 14, duration: 2, title: "Board Nile Cruise & Lunch", type: "cruise", detail: "Settle into cabin, lunch onboard, relax" },
      { start: 16.5, duration: 3, title: "Free time on the ship", type: "cruise", detail: "Pool, sundeck, Nile scenery — decompress after the early morning" },
      { start: 20, duration: 2, title: "Dinner & folkloric show", type: "cruise", detail: "Entertainment onboard" },
    ],
  },
  "Apr 12": {
    dayLabel: "Sat",
    location: "nile",
    events: [
      { start: 7, duration: 1, title: "Breakfast onboard", type: "cruise", detail: "" },
      { start: 9, duration: 2, title: "Kom Ombo Temple", type: "sightseeing", detail: "Double temple + crocodile mummy museum" },
      { start: 12, duration: 1, title: "Lunch onboard", type: "cruise", detail: "" },
      { start: 13, duration: 3, title: "Sail to Edfu", type: "cruise", detail: "Sundeck, pool, Nile views" },
      { start: 16, duration: 2, title: "Edfu Temple (Temple of Horus)", type: "sightseeing", detail: "Horse-drawn carriage ride from river" },
      { start: 19, duration: 1, title: "Dinner onboard", type: "cruise", detail: "" },
      { start: 20.5, duration: 1.5, title: "Galabeya party", type: "cruise", detail: "Dress in traditional Egyptian outfits" },
    ],
  },
  "Apr 13": {
    dayLabel: "Sun",
    location: "nile",
    events: [
      { start: 5.5, duration: 0.5, title: "Wake up call", type: "free", detail: "Very early start to beat the heat" },
      { start: 6, duration: 2.5, title: "Valley of the Kings", type: "sightseeing", detail: "3 tombs + optional Tut's tomb" },
      { start: 8.5, duration: 1.5, title: "Temple of Hatshepsut", type: "sightseeing", detail: "Terraced temple at Deir El-Bahari" },
      { start: 10, duration: 0.5, title: "Colossi of Memnon", type: "sightseeing", detail: "Quick photo stop" },
      { start: 11, duration: 1, title: "Lunch onboard", type: "cruise", detail: "" },
      { start: 13, duration: 2.5, title: "Karnak Temple", type: "sightseeing", detail: "134 towering columns, Hypostyle Hall" },
      { start: 16, duration: 2, title: "Free time / Luxor Temple", type: "free", detail: "Optional visit, beautiful at night" },
      { start: 19, duration: 2, title: "Dinner onboard", type: "cruise", detail: "Last night on the Nile" },
    ],
  },
  "Apr 14": {
    dayLabel: "Mon",
    location: "cairo",
    events: [
      { start: 4.5, duration: 0.5, title: "Pickup from docked cruise ship", type: "transport", detail: "Balloon operator collects you at the Luxor dock" },
      { start: 5, duration: 1.25, title: "Hot Air Balloon over Luxor", type: "sightseeing", detail: "Sunrise flight ~45 min — aerial views of Valley of the Kings & Nile" },
      { start: 6.5, duration: 0.5, title: "Return to cruise ship", type: "transport", detail: "Dropped back at the dock" },
      { start: 7, duration: 1.5, title: "Breakfast onboard & disembark", type: "cruise", detail: "Final cruise meal, pack up, check out" },
      { start: 9, duration: 1, title: "Transfer to Luxor airport", type: "transport", detail: "Cruise arranges transfer" },
      { start: 11, duration: 1.5, title: "Flight: Luxor → Cairo", type: "flight", detail: "~1.5 hr flight" },
      { start: 13, duration: 1, title: "Transfer & check in", type: "transport", detail: "Back to Giza hotel" },
      { start: 14, duration: 3, title: "Rest & free time", type: "free", detail: "Pool, relax after cruise" },
      { start: 19, duration: 2, title: "Dinner", type: "food", detail: "Zooba or Sequoia (Nile views)" },
    ],
  },
  "Apr 15": {
    dayLabel: "Tue",
    location: "cairo",
    events: [
      { start: 8, duration: 1, title: "Breakfast", type: "food", detail: "Hotel" },
      { start: 10, duration: 2.5, title: "Coptic Cairo (Old Cairo)", type: "sightseeing", detail: "Hanging Church, Abu Serga, Ben Ezra Synagogue" },
      { start: 13, duration: 1.5, title: "Lunch at El Fishawy", type: "food", detail: "250+ year old café, mint tea, Khan El-Khalili" },
      { start: 14.5, duration: 2.5, title: "Khan El-Khalili Bazaar", type: "sightseeing", detail: "Shopping: spices, lanterns, jewelry, souvenirs" },
      { start: 17, duration: 2, title: "Free time / Hotel pool", type: "free", detail: "Pyramid views, relax" },
      { start: 19.5, duration: 2, title: "Farewell dinner (Rakesh Uncle's last)", type: "food", detail: "Kebabgy at Sofitel or Andrea El Mariouteya" },
    ],
  },
  "Apr 16": {
    dayLabel: "Wed",
    location: "istanbul",
    events: [
      { start: 5.5, duration: 0.5, title: "Wake up & pack", type: "free", detail: "Need to be at airport by 6 AM" },
      { start: 6, duration: 1, title: "Transfer to Cairo airport", type: "transport", detail: "Rakesh Uncle departs separately" },
      { start: 8.5, duration: 2.5, title: "Flight: Cairo → Istanbul", type: "flight", detail: "5 travelers, ~2.5 hrs" },
      { start: 11, duration: 1, title: "Arrive IST & transfer", type: "transport", detail: "Istanbul Airport → Sultanahmet (~1 hr)" },
      { start: 12.5, duration: 1, title: "Hotel check-in & lunch", type: "food", detail: "Settle into Sultanahmet hotel" },
      { start: 14, duration: 3, title: "Rest & explore neighborhood", type: "free", detail: "Walk around Sultanahmet Square" },
      { start: 18, duration: 1.5, title: "Evening walk — illuminated mosques", type: "sightseeing", detail: "Blue Mosque & Hagia Sophia lit up" },
      { start: 19.5, duration: 1.5, title: "Dinner", type: "food", detail: "Sultanahmet Köftecisi or Hidden Garden" },
    ],
  },
  "Apr 17": {
    dayLabel: "Thu",
    location: "istanbul",
    events: [
      { start: 8, duration: 1, title: "Breakfast", type: "food", detail: "Hotel" },
      { start: 9, duration: 2, title: "Hagia Sophia", type: "sightseeing", detail: "Go early to beat the crowds — 1,500-year-old marvel, free entry" },
      { start: 11.5, duration: 0.75, title: "Blue Mosque", type: "sightseeing", detail: "20,000+ blue Iznik tiles, free entry" },
      { start: 12.5, duration: 1, title: "Basilica Cistern", type: "sightseeing", detail: "Underground Byzantine reservoir, 336 columns" },
      { start: 13.5, duration: 1.5, title: "Lunch", type: "food", detail: "Matbah — Ottoman palace cuisine" },
      { start: 15.5, duration: 2.5, title: "Grand Bazaar", type: "sightseeing", detail: "4,000+ shops — take your time, no rush" },
      { start: 18.5, duration: 1, title: "Walk back through Sultanahmet", type: "free", detail: "Golden hour views of the mosques" },
      { start: 19.5, duration: 1.5, title: "Dinner", type: "food", detail: "Deraliye Ottoman or Balikci Sabahattin" },
    ],
  },
  "Apr 18": {
    dayLabel: "Fri",
    location: "istanbul",
    events: [
      { start: 8, duration: 1, title: "Turkish breakfast", type: "food", detail: "Hotel or Hafız Mustafa 1864" },
      { start: 9, duration: 2.5, title: "Topkapi Palace", type: "sightseeing", detail: "Morning = shorter queues. Treasury, Harem, courtyards" },
      { start: 11.5, duration: 2, title: "Bosphorus Boat Tour", type: "sightseeing", detail: "Bridges, Ottoman mansions, Dolmabahçe Palace" },
      { start: 13.5, duration: 1.25, title: "Lunch", type: "food", detail: "Near Eminönü or Spice Bazaar area" },
      { start: 15, duration: 1, title: "Spice Bazaar", type: "sightseeing", detail: "Turkish delight, dried fruits, teas, spices" },
      { start: 16.5, duration: 1, title: "Galata Tower", type: "sightseeing", detail: "360° panoramic views of Istanbul" },
      { start: 17.5, duration: 1.5, title: "Istiklal Street", type: "free", detail: "Shopping, street food, dondurma ice cream" },
      { start: 19.5, duration: 2, title: "Farewell dinner", type: "food", detail: "Seven Hills rooftop — Blue Mosque sunset views" },
    ],
  },
  "Apr 19": {
    dayLabel: "Sat",
    location: "istanbul",
    events: [
      { start: 8, duration: 1.5, title: "Turkish breakfast", type: "food", detail: "Hotel — cheeses, olives, eggs, honey, bread, tea" },
      { start: 9.5, duration: 0.5, title: "Pack & check out", type: "free", detail: "" },
      { start: 10, duration: 1.25, title: "Transfer to Istanbul Airport", type: "transport", detail: "~45–75 min depending on traffic" },
      { start: 13.5, duration: 3, title: "Flight departs IST", type: "flight", detail: "1:30 PM departure" },
    ],
  },
};

export const scheduleHours = [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];

export const eventColors = {
  flight: { bg: "#dbeafe", border: "#3b82f6", text: "#1e40af" },
  sightseeing: { bg: "#fef3c7", border: "#f59e0b", text: "#92400e" },
  food: { bg: "#dcfce7", border: "#22c55e", text: "#166534" },
  cruise: { bg: "#e0e7ff", border: "#6366f1", text: "#3730a3" },
  transport: { bg: "#f3e8ff", border: "#a855f7", text: "#6b21a8" },
  free: { bg: "#f1f5f9", border: "#94a3b8", text: "#475569" },
  hotel: { bg: "#fce4ec", border: "#e91e63", text: "#880e4f" },
};
