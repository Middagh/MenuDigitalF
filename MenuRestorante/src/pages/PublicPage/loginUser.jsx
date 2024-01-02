import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import pruebaApi from '../../api/Api';
import eyeIcon from '../../assets/images/eye-fill.svg';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate(); // Para redireccionar

  const startLogin = async (email, password) => {
    try {
      const resp = await pruebaApi.post('/auth/login', {
        email,
        password,
      });

      setError(resp.data.msg);

      localStorage.setItem('token', resp.data.token);

      // Verificar el rol y redirigir según el rol
      const userRole = resp.data.role;
      if (userRole === 'admin') {
        // Redirige a la página de administrador
        navigate('/menuadmin');
      } else {
        // Redirige a la página principal o a otra según tus necesidades
        navigate('/menusuer');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Añadir aquí las validaciones
    if (email === '' || password === '') {
      return console.log('Todos los campos son obligatorios');
    }

    startLogin(email, password);
  };

  return (
    <div>
      <Helmet>
        <title>Login - Los Hornos</title>
      </Helmet>
      <Container className='containerFormLogin col-md-8 col-lg-6 mx-auto'>
        <h2>Iniciar Sesión</h2>
        <Form onSubmit={handleSubmit}>
          {error ? <h3 className="errorStyle">{error}</h3> : ''}

          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Dirección de Correo Electrónico</Form.Label>
            <Form.Control
              type="email"
              placeholder="Ingrese su dirección de correo electrónico"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formPassword">
            <Form.Label>Contraseña</Form.Label>
            <div className="password-input-wrapper">
              <Form.Control
                type={showPassword ? 'text' : 'password'}
                placeholder="Ingrese su contraseña"
                onChange={(e) => setPassword(e.target.value)}
              />
              <span
                className={`password-toggle-icon ${showPassword ? 'visible' : ''}`}
                onClick={() => setShowPassword(!showPassword)}
              >
                <img src={eyeIcon} alt="Show/Hide Password" />
              </span>
            </div>
          </Form.Group>

          <div className='text-center p-2 m-2'>
            <Button variant="primary" type="submit">
              Iniciar Sesión
            </Button>
          </div>

          <div className='text-center m-2 p-2'>
            ¿No tienes una cuenta?{' '}
            <Link to="/register"><strong>Regístrate aquí</strong></Link>
          </div>
        </Form>
      </Container>
    </div>
  );
};

export default Login;
