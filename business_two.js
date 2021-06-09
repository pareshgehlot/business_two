const express = require("express");

// user installed modules
const morgan = require('morgan');

// user defined files
const string_routes = require("./routes/stringRoutes");
const { server_ip, server_port } = require("./config/server");

const app = express();

// MIDDLEWARES
// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// parse application/json
app.use(express.json());

// user installed modules middleware
app.use(morgan('dev'));

// CUSTOM MIDDLEWARES
app.use("/string", string_routes);

app.get("/", (req, res) => {
  return res.send("business_two");
});

app.all("*", (req, res) => {
  return res.status(404).send("Invalid request url: business_two");
});

// starting express server: STARTS
app.listen(server_port, server_ip, (req, res) => {
  console.log(`business_two server started on ${server_ip}:${server_port}`);
});
// starting express server: ENDS

process.on('uncaughtException', function(err) {
  console.log('Caught exception: ' + err);
});
