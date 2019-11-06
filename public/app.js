// const homeBtn = document.querySelector('.home-btn');
// homeBtn.addEventListener('click', (e) => {
//   e.preventDefault();
//   fetch('/articles').then(function (response) {
//     // The API call was successful!
//     return response.json();
//   }).then(function (data) {
//     // This is the JSON from our response
//     console.log(data);
//   }).catch(function (err) {
//     // There was an error
//     console.warn('Something went wrong.', err);
//   });
// //  alert();

// })

// this functions fetches articles from articles route
const fetchArticles = () => {
  fetch('/articles').then(function (response) {
    // The API call was successful!
    return response.json();
  }).then(function (data) {
    // This is the JSON from our response
    console.log(data);
  }).catch(function (err) {
    // There was an error
    console.warn('Something went wrong.', err);
  });
} 
// fetch articles when homepage is finished loading
window.onload = fetchArticles;




// target the link
const btnScrape = document.querySelector(".scrape-btn");
const conContent = document.querySelector('.con-content');



   


  