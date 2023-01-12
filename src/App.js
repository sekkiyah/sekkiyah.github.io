import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages';

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/portfolio/' element={<Home />} />
      </Routes>
    </>
  );
};

export default App;
