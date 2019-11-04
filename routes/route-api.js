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

      const divMoreContent = $(".more-content");
      // we need the divMoreContent length to loop thru all its content dynamically
      for (let i = 0; i < divMoreContent.length; i++) {
        // target all the links inside the .more-content
        const link = $(".more-content a");

        // store the link href
        const linkHref = link.attr("href");
        console.log(linkHref);
        // store the link text
        const linkTitle = link.html();
        console.log(linkTitle);

        // const linkText = link.text();
        // console.log(linkText);

        const result = {};

        result.title = linkTitle;
        result.link = linkHref;

        db.create(result).then(dbArticle =>{
        console.log(dbArticle);
        });

      }
    });

    // Send a message to the client // test if the api route is woking by sending a message to the client
    res.send("Scraping Complete...");
  });
};

// Api route module message
console.log(` + API Route Module connected successfully => ref: route-api.js`);
