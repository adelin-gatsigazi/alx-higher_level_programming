#!/usr/bin/node
const request = require('request');
request(process.argv[2], function (error, response, body) {
  if (!error) {
    const todos = JSON.parse(body);
    const completed = {};

    // Initialize count to 0 for each user ID
    todos.forEach((todo) => {
      if (todo.completed) {
        if (completed[todo.userId] === undefined) {
          completed[todo.userId] = 0;
        }
        completed[todo.userId] += 1;
      }
    });

    console.log(completed);
  } else {
    console.error(error);
  }
});
