// Required modules
const express = require("express");   // Requires express, a web framework for Node.js 
const morgan = require("morgan");     // Requires morgan, an HTTP request logger middleware

// Required own modules
const routes = require("./routes");

const PORT = 8080;

const app = express();    // Declares app as an instance of express

// Middlewares
app.use(morgan("tiny"));  // Uses morgan for every request 
app.use(express.json());  // Uses express.json as body parser for every request
app.use("/api", routes);  // Uses routes for requests to /api

// Binds and listens for connections on the specified port
app.listen(PORT, () => {                          
  console.log(`App listening on port ${PORT}`);
});
