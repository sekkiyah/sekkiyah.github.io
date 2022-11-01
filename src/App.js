import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Home } from './pages';

const App = () => {
  return (
    <>
      <h1>Testing deploy</h1>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </>
  );
};

export default App;
