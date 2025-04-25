#!/usr/bin/env node
const { getActivity } = require("./getActivity.js");

async function main() {
  const args = process.argv.slice(2);
  const username = args[0];

  getActivity(username);
}

main();
