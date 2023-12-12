// AdminPage.jsx

import React from 'react';
import Menu from '../../components/Menu';
import { Helmet } from 'react-helmet';
import { Container } from 'react-bootstrap';

const AdminPage = () => {
  return (
    <Container>
      <Helmet><title> Administración - Los Hornos</title></Helmet>
      <Container className='text-center'>
      <h1>Administración de Menú</h1>
      </Container>
      <Menu />
      {/* Otros componentes o contenido de administración aquí */}
    </Container>
  );
};

export default AdminPage;
