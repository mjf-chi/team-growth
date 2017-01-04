const React = require('react');
const { Route, IndexRoute } = require('react-router');
const App = require('./containers/insecure-views/App');
const About = require('./containers/insecure-views/About');


module.exports = (
  <Route path="/" component={App}>
    <IndexRoute component={About}/>
  </Route>
)
