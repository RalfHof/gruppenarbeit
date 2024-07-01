import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './home';
import Smartwatches from './smartwatches';

import './styles.css';

const App = () => {
  return (
    <div className="split-container">
      <div className="left-pane">
        <Home />
      </div>
      <div className="right-pane">
        <Smartwatches />
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

