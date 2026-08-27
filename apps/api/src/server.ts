import cors from "cors";
import express from "express";
import { services } from "@snapshot-dogfood/shared";

const app = express();
app.use(cors());
app.get("/health", (_request, response) => response.json({ ok: true }));
app.get("/api/services", (_request, response) =>
  response.json({ services, updatedAt: new Date().toISOString() }),
);
app.get("/api/incidents", (_request, response) =>
  response.json({ incidents: [{ id: "notification-latency", status: "recovered", impact: "low" }] }),
);
app.listen(4174, "0.0.0.0", () => console.log("API listening on http://0.0.0.0:4174"));
