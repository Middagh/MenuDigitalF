// AdminPage.jsx

import React, { useEffect, useState } from 'react';
// import Menu from '../../components/Menu';
import { Helmet } from 'react-helmet';
import { Container, Table } from 'react-bootstrap';
import pruebaApi from '../../api/Api';

const AdminPage = () => {
  // almacenamiento de los usuarios en front
  const [uploadUser, setUploadUser] = useState([]);
  // trae a los usuarios del DB
  const bringUser = async () => {
    try {
      const resp = await pruebaApi.get("/admin/getuser") // ruta de la db

      setUploadUser(resp.data.user); // guarda los usuarios traidos del db a la consola en front
    } catch (error) {
      console.log(error)
    }
  }
  //carga los usuarios bien se ingresa a la page
  useEffect(() => {
    bringUser();
  }, [])

  return (
    <Container>

      <Helmet><title> Administración - Los Hornos</title></Helmet>

      <Container className='text-center'>
        <h1>Administración de Menú</h1>
      </Container>

      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>

        <tbody>
          {
            uploadUser.map((user) => {
              return (
              <tr key={user._id}>
                <td>{user._id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
              </tr>

              )
            })
          }
        </tbody>
      </Table>

    </Container>
  );
};

export default AdminPage;
