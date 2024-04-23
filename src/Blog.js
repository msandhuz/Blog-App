// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BlogPage from './blogPage';
import BlogPost from './blogPost';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={BlogPage} />
        <Route path="/blog/:blogId" component={BlogPost} />
      </Switch>
    </Router>
  );
}

export default App;
