#!/usr/bin/node
const x = process.argv[2];

if (!x || isNaN(x)) {
  console.log('Missing number of occurrences');
} else {
  const count = parseInt(x);

  for (let i = 0; i < count; i++) {
    console.log('C is fun');
  }
}
