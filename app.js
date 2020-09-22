const express = require('express');
const app = express();

app.set('view-engine', 'ejs');
app.set('view', 'views');


app.get('/', (req, res) => {
  res.render();
});
app.get('/users', (req, res) => {
  res.render();
});
app.post('/add-user', (req, res) => {
  res.redirect('/users')
});


app.listen(3000);