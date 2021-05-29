import React from 'react';
import Header from './components/header';
import Orders from './containers/orders';
import Filters from './containers/filter';

function App() {
  return (
    <div className="App">
      <Header />
      <Filters />
      <Orders />
    </div>
  );
}

export default App;
