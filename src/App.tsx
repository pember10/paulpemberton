import React from 'react';
import Landing from './components/Landing';
import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <>
          {/* <Landing /> */}
          <Route path="/" exact component={Landing} />
        </>
      </BrowserRouter>
    </div>
  );
}

export default App;
