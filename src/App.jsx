import { useState } from "react";

const PHOTOS = {
  kempinski: [
    "https://storage.kempinski.com/cdn-cgi/image/w=1920,f=auto,fit=scale-down,g=auto/ki-cms-prod/images/1/0/2/5/65201-1-eng-GB/e42f4a6cc2c5-73654693_4K.jpg",
  ],
  hilton: [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Cairo%2C_Nile_River%2C_Rhoda_Island%2C_Egypt.jpg/960px-Cairo%2C_Nile_River%2C_Rhoda_Island%2C_Egypt.jpg",
  ],
  lily: [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/MS_Royal_Lily_R01.jpg/960px-MS_Royal_Lily_R01.jpg",
  ],
  sanasaryan: [
    "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Sanasaryan_Han_in_2024_6567.jpg/1920px-Sanasaryan_Han_in_2024_6567.jpg",
  ],
  doubletree: [
    "https://upload.wikimedia.org/wikipedia/commons/5/5d/DoubleTree_by_Hilton_Istanbul_-_Sirkeci.jpg",
  ],
};

function formatUSD(n) {
  return "$" + n.toLocaleString();
}

function PhotoStrip({ images, alt }) {
  const count = images.length;
  return (
    <div style={{
      display: "flex", gap: 6, marginBottom: 14, borderRadius: 10, overflow: "hidden",
      height: count > 1 ? 130 : 150,
    }}>
      {images.map((src, i) => (
        <div key={i} style={{ flex: i === 0 ? 2 : 1, overflow: "hidden", borderRadius: 10 }}>
          <img
            src={src}
            alt={alt}
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            onError={(e) => { e.target.style.display = "none"; }}
          />
        </div>
      ))}
    </div>
  );
}

const cairoOptions = [
  {
    id: "kempinski", name: "Kempinski Nile Hotel", tier: "5-Star Boutique",
    total: 3906,
    perks: ["Free minibar", "24/7 butler", "Jazz Bar", "Nile rooftop pool", "Spa & sauna"],
    note: null,
    room1: "$911 + $1,280", room2: "$435 + $1,280",
    photos: PHOTOS.kempinski,
  },
  {
    id: "hilton", name: "Hilton Cairo Grand Nile", tier: "5-Star Value \u2014 saves $1,809",
    total: 2097,
    perks: ["Pool", "Standard amenities", "Right next to Kempinski"],
    note: "Alcohol-free hotel \u2014 no bar on property",
    room1: "$510 + $671", room2: "$245 + $671",
    photos: PHOTOS.hilton,
  },
];

const istanbulOptions = [
  {
    id: "sanasaryan", name: "Sanasaryan Han", tier: "Luxury Collection by Marriott",
    total: 2668,
    perks: ["Restored 17th-c. Ottoman", "Sleep Number beds", "Library Bar", "Steps from Hagia Sophia"],
    per: "$1,334/room",
    photos: PHOTOS.sanasaryan,
  },
  {
    id: "doubletree", name: "DoubleTree by Hilton Sirkeci", tier: "Reliable 4-Star \u2014 saves $888",
    total: 1780,
    perks: ["Walkable to Sultanahmet", "Modern & comfortable", "Hilton brand"],
    per: "$890/room",
    photos: PHOTOS.doubletree,
  },
];

export default function App() {
  const [cairo, setCairo] = useState(null);
  const [istanbul, setIstanbul] = useState(null);
  const cruisePrice = 4608;
  const flightsPrice = 2503;
  const cairoPrice = cairo ? cairoOptions.find((o) => o.id === cairo).total : 0;
  const istanbulPrice = istanbul ? istanbulOptions.find((o) => o.id === istanbul).total : 0;
  const activitiesBase = 540;
  const totalBoth = cairoPrice + istanbulPrice + cruisePrice + flightsPrice + activitiesBase;
  const perFamily = Math.round(totalBoth / 2);
  const allSelected = cairo && istanbul;

  return (
    <div style={{
      fontFamily: "'Cormorant Garamond', Georgia, serif",
      minHeight: "100vh",
      color: "#2a2520",
    }}>
      <div style={{ padding: "36px 28px 0", maxWidth: 660, margin: "0 auto" }}>
        <p style={{ fontFamily: "'DM Sans'", fontSize: 11, letterSpacing: 3, textTransform: "uppercase", color: "#8b7355", marginBottom: 8, fontWeight: 500 }}>
          Prepared by Nikhil &middot; Fora Travel
        </p>
        <h1 style={{ fontSize: 36, fontWeight: 300, lineHeight: 1.15, letterSpacing: -0.5, marginBottom: 6 }}>Egypt & Istanbul</h1>
        <p style={{ fontFamily: "'DM Sans'", fontSize: 13.5, color: "#7a6f63", fontWeight: 400 }}>
          April 8&ndash;19, 2026 &nbsp;&middot;&nbsp; 6 travelers &nbsp;&middot;&nbsp; 2 families
        </p>
        <div style={{ marginTop: 18, padding: "14px 18px", background: "rgba(139,115,85,0.06)", borderRadius: 10, borderLeft: "3px solid #c4b49a" }}>
          <p style={{ fontFamily: "'DM Sans'", fontSize: 12.5, color: "#5a5048", lineHeight: 1.6 }}>
            Arrive Cairo &rarr; Nile Cruise (Aswan&rarr;Luxor) &rarr; Cairo sightseeing &rarr; Istanbul &rarr; Fly home
          </p>
        </div>
      </div>

      <div style={{ maxWidth: 660, margin: "0 auto", padding: "0 28px 48px" }}>

        {/* CAIRO */}
        <div className="section-divider" />
        <p style={{ fontFamily: "'DM Sans'", fontSize: 11, letterSpacing: 2.5, textTransform: "uppercase", color: "#8b7355", marginBottom: 5, fontWeight: 500 }}>01</p>
        <h2 style={{ fontSize: 24, fontWeight: 400, marginBottom: 3 }}>Cairo Hotel</h2>
        <p style={{ fontFamily: "'DM Sans'", fontSize: 12.5, color: "#7a6f63", marginBottom: 16 }}>
          Downtown Nile &middot; 2 rooms &middot; 9 room-nights total
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {cairoOptions.map((opt) => (
            <div key={opt.id} className={`card-option ${cairo === opt.id ? "selected" : ""}`} onClick={() => setCairo(opt.id)}>
              <PhotoStrip images={opt.photos} alt={opt.name} />
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 4 }}>
                <div>
                  <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 1 }}>{opt.name}</h3>
                  <p style={{ fontFamily: "'DM Sans'", fontSize: 11.5, color: "#8b7355", fontWeight: 500 }}>{opt.tier}</p>
                </div>
                <div style={{ textAlign: "right", paddingRight: cairo === opt.id ? 28 : 0, flexShrink: 0 }}>
                  <span style={{ fontFamily: "'Cormorant Garamond'", fontWeight: 600, fontSize: 26, color: "#2a2520" }}>{formatUSD(opt.total)}</span>
                  <p style={{ fontFamily: "'DM Sans'", fontSize: 10.5, color: "#999" }}>both rooms</p>
                </div>
              </div>
              <div style={{ marginTop: 6 }}>
                {opt.perks.map((p, i) => <span className="perk-tag" key={i}>{p}</span>)}
              </div>
              {opt.note && <p style={{ fontFamily: "'DM Sans'", fontSize: 11.5, color: "#b0885a", marginTop: 8, fontWeight: 500 }}>{"\u26a0"} {opt.note}</p>}
            </div>
          ))}
        </div>

        {/* CRUISE */}
        <div className="section-divider" />
        <p style={{ fontFamily: "'DM Sans'", fontSize: 11, letterSpacing: 2.5, textTransform: "uppercase", color: "#8b7355", marginBottom: 5, fontWeight: 500 }}>02</p>
        <h2 style={{ fontSize: 24, fontWeight: 400, marginBottom: 3 }}>Nile Cruise</h2>
        <p style={{ fontFamily: "'DM Sans'", fontSize: 12.5, color: "#7a6f63", marginBottom: 16 }}>
          M&ouml;venpick Royal Lily &middot; Aswan&rarr;Luxor &middot; Apr 10&ndash;13 &middot; 2 cabins &middot; Booked via Accor
        </p>
        <div className="info-card">
          <PhotoStrip images={PHOTOS.lily} alt="Movenpick Royal Lily" />
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8 }}>
            <div>
              <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 1 }}>M&ouml;venpick Royal Lily</h3>
              <p style={{ fontFamily: "'DM Sans'", fontSize: 11.5, color: "#8b7355", fontWeight: 500 }}>5-Star Luxury &middot; Via Accor (brand direct)</p>
            </div>
            <div style={{ textAlign: "right", flexShrink: 0 }}>
              <span style={{ fontFamily: "'Cormorant Garamond'", fontWeight: 600, fontSize: 26 }}>{formatUSD(cruisePrice)}</span>
              <p style={{ fontFamily: "'DM Sans'", fontSize: 10.5, color: "#999" }}>2 cabins, 6 people</p>
            </div>
          </div>
          <div>
            {["Full board (all meals)", "Egyptologist guide", "Temple entrance fees", "All transfers", "Accor buyer protection"].map((p, i) => <span className="perk-tag" key={i}>{p}</span>)}
          </div>
          <p style={{ fontFamily: "'DM Sans'", fontSize: 11.5, color: "#888", marginTop: 10, lineHeight: 1.5 }}>
            Board noon Friday in Aswan. Disembark 8 AM Monday in Luxor. Not included: Abu Simbel, hot air balloon, drinks, tips.
          </p>
        </div>

        {/* FLIGHTS */}
        <div className="section-divider" />
        <p style={{ fontFamily: "'DM Sans'", fontSize: 11, letterSpacing: 2.5, textTransform: "uppercase", color: "#8b7355", marginBottom: 5, fontWeight: 500 }}>03</p>
        <h2 style={{ fontSize: 24, fontWeight: 400, marginBottom: 3 }}>Domestic Flights</h2>
        <p style={{ fontFamily: "'DM Sans'", fontSize: 12.5, color: "#7a6f63", marginBottom: 16 }}>
          6 passengers &middot; Nikhil booking
        </p>
        <div className="info-card">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12, paddingBottom: 12, borderBottom: "1px solid rgba(0,0,0,0.06)" }}>
            <div>
              <p style={{ fontFamily: "'DM Sans'", fontSize: 13, fontWeight: 600, color: "#2a2520" }}>Cairo &rarr; Aswan</p>
              <p style={{ fontFamily: "'DM Sans'", fontSize: 11.5, color: "#888" }}>Fri Apr 10 &middot; Nile Air &middot; 6:35&ndash;8:00 AM &middot; Nonstop</p>
            </div>
            <span style={{ fontFamily: "'Cormorant Garamond'", fontWeight: 600, fontSize: 20, color: "#2a2520" }}>$1,704</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12, paddingBottom: 12, borderBottom: "1px solid rgba(0,0,0,0.06)" }}>
            <div>
              <p style={{ fontFamily: "'DM Sans'", fontSize: 13, fontWeight: 600, color: "#2a2520" }}>Luxor &rarr; Cairo</p>
              <p style={{ fontFamily: "'DM Sans'", fontSize: 11.5, color: "#888" }}>Mon Apr 13 &middot; Air Cairo &middot; 12:30&ndash;2:10 PM &middot; Nonstop</p>
            </div>
            <span style={{ fontFamily: "'Cormorant Garamond'", fontWeight: 600, fontSize: 20, color: "#2a2520" }}>$799</span>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <p style={{ fontFamily: "'DM Sans'", fontSize: 13, fontWeight: 600, color: "#2a2520" }}>Total (6 people, both legs)</p>
            <span style={{ fontFamily: "'Cormorant Garamond'", fontWeight: 600, fontSize: 22, color: "#2a2520" }}>$2,503</span>
          </div>
        </div>

        {/* ISTANBUL */}
        <div className="section-divider" />
        <p style={{ fontFamily: "'DM Sans'", fontSize: 11, letterSpacing: 2.5, textTransform: "uppercase", color: "#8b7355", marginBottom: 5, fontWeight: 500 }}>04</p>
        <h2 style={{ fontSize: 24, fontWeight: 400, marginBottom: 3 }}>Istanbul Hotel</h2>
        <p style={{ fontFamily: "'DM Sans'", fontSize: 12.5, color: "#7a6f63", marginBottom: 16 }}>
          Sultanahmet area &middot; 2 rooms &middot; 3 nights &middot; Apr 16&ndash;19
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {istanbulOptions.map((opt) => (
            <div key={opt.id} className={`card-option ${istanbul === opt.id ? "selected" : ""}`} onClick={() => setIstanbul(opt.id)}>
              <PhotoStrip images={opt.photos} alt={opt.name} />
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 4 }}>
                <div>
                  <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 1 }}>{opt.name}</h3>
                  <p style={{ fontFamily: "'DM Sans'", fontSize: 11.5, color: "#8b7355", fontWeight: 500 }}>{opt.tier}</p>
                </div>
                <div style={{ textAlign: "right", paddingRight: istanbul === opt.id ? 28 : 0, flexShrink: 0 }}>
                  <span style={{ fontFamily: "'Cormorant Garamond'", fontWeight: 600, fontSize: 26 }}>{formatUSD(opt.total)}</span>
                  <p style={{ fontFamily: "'DM Sans'", fontSize: 10.5, color: "#999" }}>both rooms</p>
                </div>
              </div>
              <div style={{ marginTop: 6 }}>
                {opt.perks.map((p, i) => <span className="perk-tag" key={i}>{p}</span>)}
              </div>
            </div>
          ))}
        </div>

        {/* SUMMARY */}
        <div className="section-divider" />
        <p style={{ fontFamily: "'DM Sans'", fontSize: 11, letterSpacing: 2.5, textTransform: "uppercase", color: "#8b7355", marginBottom: 5, fontWeight: 500 }}>Summary</p>
        <h2 style={{ fontSize: 24, fontWeight: 400, marginBottom: 16 }}>Your Trip Estimate</h2>
        <div style={{ background: "rgba(255,255,255,0.7)", backdropFilter: "blur(10px)", borderRadius: 14, padding: "20px 22px", border: "1px solid rgba(196,180,154,0.3)" }}>
          <div className="summary-row"><span>Cairo hotel</span><span style={{ fontWeight: 500 }}>{cairo ? formatUSD(cairoPrice) : "\u2014"}</span></div>
          <div className="summary-row"><span>Nile cruise (Accor)</span><span style={{ fontWeight: 500 }}>{formatUSD(cruisePrice)}</span></div>
          <div className="summary-row"><span>Domestic flights</span><span style={{ fontWeight: 500 }}>{formatUSD(flightsPrice)}</span></div>
          <div className="summary-row"><span>Istanbul hotel</span><span style={{ fontWeight: 500 }}>{istanbul ? formatUSD(istanbulPrice) : "\u2014"}</span></div>
          <div className="summary-row"><span>Activities & transport (est.)</span><span style={{ fontWeight: 500 }}>~${activitiesBase.toLocaleString()}</span></div>
          {allSelected ? (
            <>
              <div className="summary-row total"><span>Total (both families)</span><span>{formatUSD(totalBoth)}</span></div>
              <div style={{ marginTop: 14, padding: "14px 18px", background: "linear-gradient(135deg, rgba(139,115,85,0.08), rgba(139,115,85,0.03))", borderRadius: 10, textAlign: "center" }}>
                <p style={{ fontFamily: "'DM Sans'", fontSize: 11, color: "#8b7355", textTransform: "uppercase", letterSpacing: 1.5, marginBottom: 3, fontWeight: 500 }}>Estimated per family</p>
                <span style={{ fontFamily: "'Cormorant Garamond'", fontSize: 34, fontWeight: 600, color: "#2a2520", letterSpacing: -1 }}>{formatUSD(perFamily)}</span>
              </div>
            </>
          ) : (
            <div style={{ marginTop: 12, padding: 12, textAlign: "center", fontFamily: "'DM Sans'", fontSize: 12.5, color: "#999", fontStyle: "italic" }}>
              Select Cairo &amp; Istanbul hotels to see your total
            </div>
          )}
        </div>

        <p style={{ fontFamily: "'DM Sans'", fontSize: 11, color: "#aaa", marginTop: 18, lineHeight: 1.6, textAlign: "center" }}>
          All prices USD &middot; Subject to availability &middot; Activities est. includes food tour, GEM tickets, Cairo drivers
        </p>
      </div>
    </div>
  );
}
