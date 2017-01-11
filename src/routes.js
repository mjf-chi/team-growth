const React = require('react');
const { Route, IndexRoute } = require('react-router');
const App = require('./containers/insecure-views/App');
const Home = require('./containers/insecure-views/Home');
const TopicsView = require('./containers/insecure-views/TopicsView');


module.exports = (
  <Route path="/" component={App}>
    <IndexRoute component={Home}/>
    <Route path='/topics/:departmentName' component={TopicsView}/>
  </Route>
)
