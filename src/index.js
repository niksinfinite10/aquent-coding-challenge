import React from 'react';
import ReactDOM from 'react-dom';
import ListView from './container/ListView';

// Note: this is the entry point for the entire application

// step 1: you will need to load the pizza data. it is available at /pizza.json. what-wg fetch is pre-installed.
// remember that fetch uses promises.

ReactDOM.render(
  <ListView />,
  document.getElementById('app')
);

// step 2: implement the view and required behaviors
