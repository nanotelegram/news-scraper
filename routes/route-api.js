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

        db.create(result).then(dbArticle => {
          console.log(dbArticle);
        });
      });
    });

    // Send a message to the client // test if the api route is woking by sending a message to the client
    res.send("Scraping Complete...");
  });
};

// Api route module message
console.log(` + API Route Module connected successfully => ref: route-api.js`);
