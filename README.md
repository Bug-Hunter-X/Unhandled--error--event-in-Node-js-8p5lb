# Unhandled 'error' Event in Node.js

This repository demonstrates a common error in Node.js applications: unhandled exceptions.  The `bug.js` file contains code that will throw an unhandled error. The `bugSolution.js` shows how to fix this issue by implementing proper error handling.

## How to Reproduce

1. Clone this repository.
2. Navigate to the directory.
3. Run `node bug.js`.  Observe the error.
4. Run `node bugSolution.js`. Observe the graceful handling of the error.

## Solution

The solution involves adding an 'error' event listener to the appropriate object (like the server or a database client) to catch and handle errors gracefully, preventing the process from crashing.