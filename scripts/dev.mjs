import { spawn } from "node:child_process";

const commands = [
  ["bun", ["--cwd", "apps/api", "run", "dev"]],
  ["bun", ["--cwd", "apps/web", "run", "dev"]],
];

const children = commands.map(([command, args]) =>
  spawn(command, args, { stdio: "inherit", env: process.env }),
);

const stop = () => {
  for (const child of children) child.kill("SIGTERM");
};

process.on("SIGINT", stop);
process.on("SIGTERM", stop);
await Promise.all(children.map((child) => new Promise((resolve) => child.on("exit", resolve))));
