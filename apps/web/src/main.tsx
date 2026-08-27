import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { formatLatency, services } from "@snapshot-dogfood/shared";
import "./styles.css";

function App() {
  const [showActivity, setShowActivity] = useState(false);
  const healthy = services.filter((service) => service.status === "healthy").length;
  return (
    <main>
      <nav><strong>Pulseboard</strong><span>Operations overview</span></nav>
      <section className="hero">
        <p className="eyebrow">LIVE SYSTEM STATUS</p>
        <h1>Everything important, in one calm view.</h1>
        <p>Track customer-facing services and respond before small issues become incidents.</p>
        <button onClick={() => setShowActivity((value) => !value)}>{showActivity ? "Hide activity" : "Review activity"}</button>
      </section>
      <section className="summary"><div><b>{healthy}/{services.length}</b><span>services healthy</span></div><div><b>99.98%</b><span>30-day uptime</span></div><div><b>3m</b><span>median recovery</span></div></section>
      <section className="services">
        <h2>Service health</h2>
        {services.map((service) => <article key={service.id}><span className={`dot ${service.status}`} /><div><b>{service.name}</b><small>{service.status}</small></div><strong>{formatLatency(service.latencyMs)}</strong></article>)}
      </section>
      {showActivity && <aside><h2>Recent activity</h2><p>Catalog latency recovered automatically.</p><p>Checkout health check completed successfully.</p></aside>}
    </main>
  );
}

createRoot(document.getElementById("root")!).render(<React.StrictMode><App /></React.StrictMode>);
