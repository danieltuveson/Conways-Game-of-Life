const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/public/site.html`)
});

app.use(express.static('public'));

app.set('port', process.env.PORT || 3000);

app.listen(app.get('port'), () => {
  console.log('Express started on http://localhost:' + 
    app.get('port') + '; press Ctrl-C to terminate.');
});