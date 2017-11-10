import React from 'react';
import ReactDOM from 'react-dom';
import HomePage from './pages/homePage';
import SinglePage from './pages/singlepage';
import SearchPage from './pages/searchPage';
import {Button, Icon, Preloader} from 'react-materialize';
import registerServiceWorker from './registerServiceWorker';
import './styles/index.css';
import{
  BrowserRouter as Router,
  Route,
  Link,
} from 'react-router-dom';

class App extends React.Component{
  render(){
    return (
      <Router>
        <div>
          <span><Button><Link to="/id/1">Aller à la premiere</Link></Button></span>
          <Route path='/' exact component={HomePage}/>
          <Route  path='/search' component={SearchPage}/>
          <Route path='/id/:id' component={SinglePage}/>

        </div>
      </Router>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
