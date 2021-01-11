const fs = require('fs');
const express = require('express');

const app = express();
const port = process.env.PORT || 5000;


app.use(express.static('public'));

//when visiting search page, send over search HTML
app.get('/search', (request, response) => {
  response.sendFile('./search.html')
});


//API endopint for Search.json
app.get('/search', (request, response) => {
  let results = searchArticles(request.query)
  response.type('text/json');
  response.send(JSON.stringify(results));
});

//Create new article page
app.get('/publish', (request, response)=>{
  response.sendFile('./publish.html')
});

//when you submit the new article form
app.post('/articles', express.urlencoded({extended: false}), (request, response)=>{
  createArticle(nextArticleId(), request.body, response)
})

//view all articles API endpoint
app.get('/articles', (request, response) => {
  let articles = allArticles();
  let data = JSON.stringify(articles);
  response.type('text/json');
  response.send(data);
});

//view all articles page
app.get('/articles', (request, response) => {
  response.sendFile('articles.html')
});

//view specific article API endpoint
app.get('/articles/articleId', (request, response) => {
  response.sendFile(request.params.articleId);
});

//View specific article HTML page
app.get('/articles/articleId', (request, response) => {
  const articleId = request.params.articleId;
  let filePath = articleFilePath(articleId);
  if (fs.existsSync(filePath)) {
    let htmlFile = path.join("article.html");
    response.sendFile(htmlFile);
  }
  else {
    response.sendStatus(404, `Article ${params.id} not found...`)
  }
});

//start the port
app.listen(port, () => {
  console.log(`Listening on port ${port}`)
});

//Helper functions
function allArticles() {
  return fs.readdirSync(articlesDir)
  .filter(file => file.endsWith('.json'))
  .map(file => JSON.parse(fs.readFileSync(path.join(articlesDir, file))))
  .sort((a,b)=> (a.id - b.id));
}

function articleFilePath(articleId) {
  return path.join(articlesDir, articleId + '.json');
}

function searchArticles(params) {
  let results = allArticles().filter((article) => {
    if(params.author) {
      let articleAuthor = article.author || '';
      let targetAuthor = params.author || '';
      return articleAuthor.toLowerCase().includes(targetAuthor.toLowerCase());
    }
  });
  console.log('search article results: ' + results)
  return results;
}

//functions to assign articles, and generate ID (no bugs here)
function nextArticleId() {
  let articles = allArticles();
  let id = articles[articles.length - 1].id;
  return (id + 1);
}

function createArticle(articleId, params, response) {
  const article = {
    id: articleId,
    author: params.author.trim(),
    title: params.title.trim(),
    body: params.body.trim()
  };

  const articleDataFile = $path.join(articlesDir, articleId + ".json");
  fs.writeFile(articleDataFile, JSON.stringify(article), (err)=>{
    if (err) {
      response.status(500).send(err)
    } else {
      response.redirect('/articles/' + articleId)
    }
  })
};
