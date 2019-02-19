var express      = require("express");              // Express
var fs           = require("fs");                   // File system
var yaml         = require("js-yaml");              // Parse .yaml files
var bodyParser   = require("body-parser");          // Allows you to read POST data
var cookieParser = require("cookie-parser");        // Cookies
var sass         = require("node-sass-middleware"); // SASS
var app          = module.exports = express();      // Define the application

app.set("views", "./views");                         // Define the views directory
app.use(sass({src:   __dirname + "/static/css/sass", // Set SASS directory for the source
              dest:  __dirname + "/static/css",      // Set SASS directory for the destination
              prefix: "/css",                        // Set SASS prefix
              outputStyle: "compressed"}));          // Set SASS compression
app.use(express.static("./static"));                 // Define the static directory
app.use(bodyParser.json());                          // Setting for bodyParser
app.use(bodyParser.urlencoded({extended: true}));    // Setting for bodyParser
app.use(cookieParser());                             // Enable cookie parsing

require("./node/routes.js");                      // Include web routes third
app.listen(80);                                   // Start the server
