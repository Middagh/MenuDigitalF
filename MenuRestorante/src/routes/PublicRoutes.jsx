// PublicRoutes.jsx
import React from 'react';
import { Route } from 'react-router-dom';
import Home from '../pages/PublicPage/Home';

const PublicRoutes = () => {
  return (
    <>
      <Route path="/" component={Home} />
    </>
  );
};

export default PublicRoutes;
