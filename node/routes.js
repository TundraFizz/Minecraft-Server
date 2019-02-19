var app = require("../server.js");

app.get("/", async function(req, res){
  res.render("index.ejs");
});

app.use(function(req, res){
  res.redirect("/");
});
