let path = require("path");
let axios = require("axios");
let cheerio = require("cheerio");

module.exports = app => {
  app.get("/scrape", (req, res) => {
    // grab the body of the html with axios
    axios
      .get("https://hackernoon.com/tagged/coding")
      .then(function(response) {
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
        }
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      });
  });
};

// Api route module message
console.log(` + API Route Module Connected Successfully..(ref: route-api.js)`);
