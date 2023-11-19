import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import '../../assets/login.css'; // Puedes importar tu archivo de estilos específicos para el login
import { Helmet } from 'react-helmet';

const Login = () => {
  const handleSubmit = (e) => {
    // Lógica de inicio de sesión aquí
    e.preventDefault();
    console.log('Iniciando sesión...');
  };

  return (
    <div>
      <Helmet><title>Login - Los Hornos</title></Helmet>
      <Container className='containerFormLogin col-md-8 col-lg-6 mx-auto'>
        <h2>Iniciar Sesión</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formUsername">
            <Form.Label>Nombre de Usuario</Form.Label>
            <Form.Control type="text" placeholder="Ingrese su nombre de usuario" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formPassword">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control type="password" placeholder="Ingrese su contraseña" />
          </Form.Group>

          <div className='text-center p-2 m-2'>
            <Button variant="primary" type="submit">
              Iniciar Sesión
            </Button>
          </div>

          <div className='text-center m-2'>
            ¿No tienes una cuenta?{' '}
            <Link to="/register">Regístrate aquí</Link> {/* Ajusta la ruta "/register" según tus necesidades */}
          </div>
        </Form>
      </Container>
    </div>
  );
};

export default Login;
