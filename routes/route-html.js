let path = require("path");


module.exports = function(app) {
  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "/../public/index.html"));
  });
  app.get("/saved", (req, res) => {
    res.sendFile(path.join(__dirname + "/../public/saved.html"));
  });
};

