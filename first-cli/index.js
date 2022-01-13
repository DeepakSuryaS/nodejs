#!/usr/bin/env node

const welcome = require("cli-welcome");
const pkgJson = require("./package.json");

welcome({
  title: pkgJson.name,
  tagLine: "Howdy, nice to meet ya!",
  description: pkgJson.description,
  version: pkgJson.version,
  bgColor: "#FADC00",
  color: "#000",
  bold: true,
  clear: true,
});

console.log(`
Deepak Surya S

  worker bees can leave
  even drones can fly away
  the queen is their slave

  put a gun to my head and paint the walls with my brains

  Twitter: ideepaksuryas
  Github: DeepakSuryaS


Have fun
`);
