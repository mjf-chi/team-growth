const Express = require('express');
const cookieParser = require('cookie-parser');
const compression = require('compression');

let app = new Express();

app.enable('trust proxy');
app.set('views', 'templates');

app.use(cookieParser());
app.use(compression());

let port = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.set('Content-Type', 'text/plain');
  res.send('1');
});

app.listen(port, (err) => {
  if (err) {
    console.error(err);
  }
  else{
    console.log(`Http service is running on port ${port}`);
  }
});
