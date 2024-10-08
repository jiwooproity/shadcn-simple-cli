#!/usr/bin/env node

import { program } from "commander";
import { start } from "./shad";

program
  .version("v1.6.2", "-v, --version", "output the current version")
  .option("-t, --target <component>", "directly select to shadcn-ui component")
  .option("-s, --select", "get component list for select")
  .option("-o, --overwrite", "overwrite the existing component and download a new one")
  .option("-h, --help", "output all commands and guide")
  .option("-d, --docs", "link to shadcn/ui document")
  .option("-l, --log", "create logs file about added components")
  .action((options) => {
    if (Object.keys(options).length) {
      if (!options.help) start(options);
      else program.help();
    } else {
      program.help();
    }
  });

program.parse(process.argv);
