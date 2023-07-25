#!/usr/bin/node
const request = require('request');

const apiUrl = process.argv[2];

request(apiUrl, (error, response, body) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API response:', response.statusCode);
    console.log('API data:', body);
    
    const todos = JSON.parse(body);
    console.log('Parsed todos:', todos);
    
    const completedTasksByUser = {};

    todos.forEach(todo => {
      if (todo.completed) {
        if (completedTasksByUser[todo.userId]) {
          completedTasksByUser[todo.userId]++;
        } else {
          completedTasksByUser[todo.userId] = 1;
        }
      }
    });

    console.log('Completed tasks by user:', completedTasksByUser);
  }
});
