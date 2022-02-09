import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { history } from '../lib';
import Layout from './Layout';
import RecipiesPage from './Recipes';
import Recipie from './Recipe';

const App = () => (
  <Router history={history}>
    <Layout>
      <Routes>
        <Route path="/recipe/:id" element={<Recipie />} />
        <Route path="/" element={<RecipiesPage />} />
      </Routes>
    </Layout>
  </Router>
);

export default App;
