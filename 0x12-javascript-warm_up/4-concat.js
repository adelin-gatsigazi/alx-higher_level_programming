#!/usr/bin/node

const [arg1 = "No argument", arg2 = "No argument"] = process.argv.slice(2);
console.log(`${arg1} is ${arg2}`);
