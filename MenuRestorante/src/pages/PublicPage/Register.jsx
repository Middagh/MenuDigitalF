import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Form, Modal, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import pruebaApi from '../../api/Api';
import '../../assets/register.css';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [showSuccessModal, setShowSuccessModal] = useState(false); // Estado para controlar la visibilidad del modal
  const navigate = useNavigate();// redireccionara al login

  const startRegister = async (name, email, password) => {
    try {
      const resp = await pruebaApi.post('/auth/createuser', {
        name,
        email,
        password,
      });

      setError(resp.data.msg);

      localStorage.setItem('token', resp.data.token);

      // Mostrar el modal de éxito
      setShowSuccessModal(true);
      setTimeout(() => setRedirect(true), 5000); // Redirigir después de 5 segundos (ajusta según tus necesidades)
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validaciones
    if (name === '' || email === '' || password === '' || confirmPassword === '') {
      return console.log('Todos los campos son obligatorios');
    }

    if (password !== confirmPassword) {
      return console.log('Las contraseñas no coinciden');
    }

    startRegister(name, email, password);
  };
  // desde aqui redirecciona
  if (showSuccessModal) {
    // Puedes ajustar el tiempo según tus necesidades (aquí asumo 3000 milisegundos o 3 segundos)
    setTimeout(() => {
      navigate('/login');
      setShowSuccessModal(false); // Asegúrate de actualizar el estado para cerrar el modal si es necesario
    }, 3000);
  }
  return (
    <div>
      <Helmet>
        <title>Register - Los Hornos</title>
      </Helmet>
      <Container className='containerFormRegister col-md-8 col-lg-6 mx-auto p-2 m-2'>
        <h2>Registro</h2>
        <Form onSubmit={handleSubmit}>
          {error ? <h3 className="errorStyle">{error}</h3> : ''}
          <Form.Group className="mb-3" controlId="formUsername">
            <Form.Label>Nombre de Usuario</Form.Label>
            <Form.Control
              type="text"
              id="name"
              placeholder="Ingrese nombre"
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Dirección de Correo Electrónico</Form.Label>
            <Form.Control
              type="email"
              id="email"
              placeholder="Ingrese correo electrónico"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formPassword">
            <Form.Label>Contraseña</Form.Label>
            <Form.Control
              type="password"
              id="password"
              placeholder="Ingrese contraseña"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formConfirmPassword">
            <Form.Label>Confirmar Contraseña</Form.Label>
            <Form.Control
              type="password"
              id="confirmPassword"
              placeholder="Confirme contraseña"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </Form.Group>

          <div className='text-center m-2'>
            ¿Tienes una cuenta?{' '}
            <Link to="/login"><strong>Entra aquí</strong></Link>
          </div>

          <button type="submit" className="btn btn-primary">
            Registrarse
          </button>
        </Form>
      </Container>

      {/* Modal de éxito */}
      <Modal show={showSuccessModal} onHide={() => setShowSuccessModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>¡Registro Exitoso!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Tu cuenta ha sido creada exitosamente. Ahora puedes iniciar sesión.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => setShowSuccessModal(false)}>
            Cerrar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Register;
