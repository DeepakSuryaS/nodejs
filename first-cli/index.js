#!/usr/bin/env node
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const welcome = require("cli-welcome");
const pkgJson = require("./package.json");
import chalk from "chalk";
const log = console.log;

const twitter = chalk.hex("#1DA1F2").bold.inverse;
const github = chalk.hex("#6CC644").bold.inverse;

welcome({
  title: "Deepak Surya S",
  tagLine: "Howdy, nice to meet ya!",
  description: pkgJson.description,
  version: pkgJson.version,
  bgColor: "#FADC00",
  color: "#000",
  bold: true,
  clear: true,
});

log(`${chalk.italic(`
  worker bees can leave
  even drones can fly away
  the queen is their slave

  put a gun to my head and paint the walls with my brains
`)}

${twitter(" Twitter ")}: ideepaksuryas
${github(" Github ")}: DeepakSuryaS


${chalk.bgHex("#8E43E7")(" Have fun! ")}
`);
