#!/usr/bin/env node
import { Command } from "commander";
import { services } from "@snapshot-dogfood/shared";

const program = new Command();
program.name("pulseboard").description("Inspect service health from a terminal");
program.command("status").action(() => {
  for (const service of services) console.log(`${service.status === "healthy" ? "✓" : "!"} ${service.name}: ${service.status}`);
});
program.parse(process.argv);
