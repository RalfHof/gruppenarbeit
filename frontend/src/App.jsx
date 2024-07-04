import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/home';
import Smartphones from './pages/smartphones';
import Smartwatches from './pages/smartwatches';
import Product from './pages/product'; 
//import './styles.css';
//import './product.css'

const App = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/smartphones" component={Smartphones} />
      <Route path="/smartwatches" component={Smartwatches} />
      <Route path="/products" component={Product} /> 
    </Switch>
  </Router>
);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

