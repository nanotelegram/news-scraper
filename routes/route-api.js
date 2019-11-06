let path = require("path");
let axios = require("axios");
let cheerio = require("cheerio");
// Require all models
var db = require("../model/articles");

module.exports = app => {
  app.get("/api/scrape", (req, res) => {
    // grab the body of the html with axios
    axios.get("https://hackernoon.com/tagged/coding").then(function(response) {
      // handle success
      const $ = cheerio.load(response.data);

      // grab all a element with the container
      const targetCon = $(".more-content .title");
      targetCon.each((i, el) => {
        // $(element) is refering to targetCon,
        let aTitle = $(el)
          .children("a")
          .text();
        let aHref = $(el)
          .children("a")
          .attr("href");
        // console.log(aTitle);
        // console.log(`${aHref}\n`);

        // create a new object and bind it to the model
        const result = {};
        result.title = aTitle;
        result.link = aHref;

        // Create a new article using the `result` object built from scraping
        db.create(result).then(dbArticle => {
          console.log(dbArticle);
        });
      });
    });

    // Send a message to the client // test if the api route is woking by sending a message to the client
    res.send("Scraping Complete...");
  });

  // Route for getting all Articles from the db
  app.get("/articles", (req, res) => {
    // Grab every document in the Articles collection
    db.find({}) // IMPORTANT db.find() find all collection in the articles database 
      .then(function(dbArticle) {
        // If we were able to successfully find Articles, send them back to the client
        res.json(dbArticle);
      })
      .catch(function(err) {
        // If an error occurred, send it to the client
        res.json(err);
      });
  });
};

// Api route module message
console.log(` + API Route Module connected successfully => ref: route-api.js`);
