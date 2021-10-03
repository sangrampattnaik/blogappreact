import AllBlogsPage from './pages/AllBlogsPage';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BlogBySlugPage from './pages/BlogBySlugPage';
import { Navbar } from './components/Navbar/Navbar';
import BlogEditorPage from './pages/BlogEditorPage';

function App() {
  return (
    <Router>
      <Navbar />
      <div className='container'>
        <Switch>
          <Route exact path='/' component={AllBlogsPage} />
          <Route path='/blog/:slug' component={BlogBySlugPage} />
          <Route path='/editor' component={BlogEditorPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
