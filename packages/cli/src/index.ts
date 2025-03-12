#!/usr/bin/env node
import { Command } from "commander";
import chalk from "chalk";
import { createCommand } from "./commands/create";
import { devCommand } from "./commands/dev";
import { version } from "../package.json";
const program = new Command();

program
  .name("extkit")
  .description(
    "The Extkit CLI allows you to develop, test, build, start, publish, and more."
  )
  .version(version);

program
  .command("create")
  .description("Create a new web extension project")
  .argument("<name>", "Name of the extension project")
  .action((name: string | undefined, options: { template: string }) => {
    createCommand(name, options).catch((error) => {
      console.error(chalk.red("Error:"), error.message);
      process.exit(1);
    });
  });

program
  .command("dev")
  .description("Start development mode and load extkit.config.ts")
  .option("--config <string>", "Path to the extkit.config.ts file")
  .option("--cwd <string>", "Current working directory")
  .action(async (options: { config?: string; cwd?: string }) => {
    devCommand(options.config, options.cwd).catch((error) => {
      console.error(chalk.red("Error:"), error.message);
      process.exit(1);
    });
  });

program.parse();

if (process.argv.length <= 2) {
  program.help();
}
