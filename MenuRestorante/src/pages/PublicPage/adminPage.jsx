import React from 'react';
import { UserTable } from '../../components/UserTable';
import { ProductTable } from '../../components/ProductTable';
import { Container } from 'react-bootstrap';

const AdminPage = () => {


  return (
    <Container>
			<h1 className="text-center mt-3">Admin Page</h1>

			<h2>Usuarios</h2>

      <UserTable />

			<h2>Productos</h2>

      <ProductTable />

    </Container>
  )
};

export default AdminPage;
