import './App.css';
import Nav from './nav'
import About from './about';
import Shop from './shop'
import Item from './itemDetail';

import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav/>
        <Route path="/about" component={About}/>
        <Route path="/shop" exact component={Shop}/>
        <Route path="/shop/:id" component={Item}/>
      </div>
    </Router>
  );
}

export default App;
