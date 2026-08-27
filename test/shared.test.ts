import { expect, test } from "bun:test";
import { formatLatency, services } from "../packages/shared/src";

test("shared status data is usable by every target", () => {
  expect(services).toHaveLength(3);
  expect(formatLatency(84)).toBe("84 ms");
});
