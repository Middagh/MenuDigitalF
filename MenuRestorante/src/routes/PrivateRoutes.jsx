// PrivateRoutes.jsx
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PrivatePage from './pages/PrivatePage';

const isAuthenticated = () => {
  // Lógica para verificar la autenticación (por ejemplo, token en localStorage)
  // Retorna true si el usuario está autenticado, false en caso contrario
  return true; // Cambia esto según tu lógica de autenticación
};

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated() ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};

const PrivateRoutes = () => {
  return (
    <>
      <PrivateRoute path="/private" component={PrivatePage} />
    </>
  );
};

export default PrivateRoutes;
