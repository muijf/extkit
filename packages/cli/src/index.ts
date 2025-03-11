#!/usr/bin/env node
import { Command } from "commander";
import chalk from "chalk";
import { initCommand } from "./commands/init";
import { version } from "../package.json";

const program = new Command();

program
  .name("extkit")
  .description("Web Extension Ecosystem Toolkit CLI")
  .version(version);

program
  .command("init")
  .description("Initialize a new web extension project")
  .argument("[name]", "Name of the extension project")
  .option("-t, --template <template>", "Template to use", "basic")
  .action((name: string | undefined, options: { template: string }) => {
    initCommand(name, options).catch((error) => {
      console.error(chalk.red("Error:"), error.message);
      process.exit(1);
    });
  });

program
  .command("build")
  .description("Build the web extension")
  .option("-e, --env <environment>", "Build environment", "production")
  .option("-w, --watch", "Watch for changes", false)
  .action((options: { env: string; watch: boolean }) => {
    console.log(chalk.blue("Building web extension"));
    console.log(chalk.blue("Environment:"), chalk.green(options.env));
    console.log(
      chalk.blue("Watch mode:"),
      options.watch ? chalk.green("enabled") : chalk.red("disabled")
    );
    console.log(chalk.yellow("This feature is not yet implemented."));
  });

program
  .command("dev")
  .description("Start development server")
  .option("-p, --port <port>", "Port to use", "8000")
  .action((options: { port: string }) => {
    console.log(
      chalk.blue("Starting development server on port:"),
      chalk.green(options.port)
    );
    console.log(chalk.yellow("This feature is not yet implemented."));
  });

program
  .command("pack")
  .description("Package the extension for distribution")
  .option("-t, --target <target>", "Target browser", "chrome")
  .action((options: { target: string }) => {
    console.log(
      chalk.blue("Packaging extension for:"),
      chalk.green(options.target)
    );
    console.log(chalk.yellow("This feature is not yet implemented."));
  });

program.parse();

if (process.argv.length <= 2) {
  program.help();
}
