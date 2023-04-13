#!/usr/bin/node

const [noun = "thing", adjective = "undefined"] = process.argv.slice(2);

console.log(`${noun} is ${adjective}.`);

