// Requires modules
const pg = require("pg");

// Configures node-postgres driver
const postgresUrl = "postgres://postgres@localhost/tweetydb";
const client = new pg.Client(postgresUrl);

// Connects to server
client.connect();

// Exports modules
module.exports = client;
