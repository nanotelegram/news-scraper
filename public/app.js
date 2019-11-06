// global variables 
var conContent = document.querySelector('.con-content');

// this functions fetches articles from articles route
const fetchArticles = () => {
  fetch('/articles').then(function (response) {
    // The API call was successful!
    return response.json();
  }).then(function (data) {
    // This is the JSON from our response
    console.log(data);
    for (let i = 0; i < data.length; i++) {

      let link = data[i].link;
      let title = data[i].title;
      let id = data[i]._id;

      // create a news card container for earch articles 
      let newsCardCon = document.createElement('section');
      newsCardCon.setAttribute('class', 'con-news-card');

      let h3Title = document.createElement('h3');
      h3Title.setAttribute('class', 'title');
      h3Title.textContent = title;

      let linkBtn = document.createElement('a');
      linkBtn.setAttribute('href', `https://hackernoon.com${link}`);
      linkBtn.setAttribute('class', 'link')
      linkBtn.setAttribute('target', '_blank')
      linkBtn.textContent = 'Link';

      let saveBtn = document.createElement('a');
      saveBtn.setAttribute('class', 'save');
      saveBtn.setAttribute('href', '/save');
      saveBtn.textContent = `Save`;


      newsCardCon.append(h3Title);
      newsCardCon.append(linkBtn);
      newsCardCon.append(saveBtn);

      conContent.append(newsCardCon);
    }


  }).catch(function (err) {
    // There was an error
    console.warn('Something went wrong.', err);
  });
} 
// fetch articles when homepage is finished loading
window.onload = fetchArticles;








   


  