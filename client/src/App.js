import 'bootstrap/dist/css/bootstrap.min.css';
import AllPosts from './components/posts/AllPosts';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Details from './components/posts/Details';
import EditPost from './components/posts/EditPost';
import CreatePost from './components/posts/CreatePost';
import Header from './components/common/Header';
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route path="/" component={AllPosts} exact />
          <Route path="/details/:id" component={Details} />
          <Route path="/editpost/:id" component={EditPost} />
          <Route path="/createpost" component={CreatePost} />
        </Switch>
      </Router>

    </div>
  );
}

export default App;
