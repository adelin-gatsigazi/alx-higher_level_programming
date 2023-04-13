#!/usr/bin/node

const [argv] = process.argv[2];
if (argv) {
  console.log('arg');
} else {
  console.log('No argument');
}
