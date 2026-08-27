export type Service = {
  id: string;
  name: string;
  status: "healthy" | "degraded";
  latencyMs: number;
};

export const services: Service[] = [
  { id: "checkout", name: "Checkout", status: "healthy", latencyMs: 84 },
  { id: "catalog", name: "Product catalog", status: "healthy", latencyMs: 43 },
  { id: "notifications", name: "Notifications", status: "degraded", latencyMs: 286 },
];

export const formatLatency = (latencyMs: number) => `${latencyMs} ms`;
