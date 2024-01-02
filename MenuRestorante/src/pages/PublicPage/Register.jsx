import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Form, Modal, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import pruebaApi from '../../api/Api';
import '../../assets/register.css';
import eyeIcon from '../../assets/images/eye-fill.svg';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [showSuccessModal, setShowSuccessModal] = useState(false); // Estado para controlar la visibilidad del modal
    const navigate = useNavigate(); // redireccionara al login

    const [showPassword, setShowPassword] = useState(false);//para mostrar el label de contraseña
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const [nameError, setNameError] = useState('');// const de los mensajes de error
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');

    const startRegister = async (name, email, password) => {
        try {
            const resp = await pruebaApi.post('/auth/createuser', {
                name,
                email,
                password,
            });

            setError(resp.data.msg);

            localStorage.setItem('token', resp.data.token);
            setShowSuccessModal(true);
            setTimeout(() => {
                navigate('/login');
                setShowSuccessModal(false);
            }, 3000);
        } catch (error) {
            console.log(error);
        }
    };
        // Validaciones
    const handleSubmit = (e) => {
        e.preventDefault();

        // Validaciones
        if (name === '' || email === '' || password === '' || confirmPassword === '') {
            setNameError('Todos los campos son obligatorios');
            return;
        }

        if (name.length > 25) {
            setNameError('El nombre no puede tener más de 25 caracteres');
            return;
        }

        if (!/^[A-Za-z\s]+$/.test(name)) {
            setNameError('El nombre solo puede contener letras y espacios');
            return;
        }

        if (!/^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/.test(email)) {
            setEmailError('El email no es válido');
            return;
        }

        if (password !== confirmPassword) {
            setConfirmPasswordError('Las contraseñas no coinciden');
            return;
        }

        if (!/(?=.*[A-Z])/.test(password)) {
            setPasswordError('La contraseña debe contener al menos una letra mayúscula');
            return;
        }

        if (!/\d/.test(password)) {
            setPasswordError('La contraseña debe contener al menos un número');
            return;
        }

        startRegister(name, email, password);
    };

    return (
        <div>
            <Helmet>
                <title>Register - Los Hornos</title>
            </Helmet>
            <Container className='containerFormRegister col-md-8 col-lg-6 mx-auto p-2 m-2'>
                <h2>Registro</h2>
                <Form onSubmit={handleSubmit}>
                    {error ? <h3 className="errorStyle">{error}</h3> : ''}
                    <Form.Group className="mb-3">
                        <Form.Label>Nombre de Usuario</Form.Label>
                        <Form.Control
                            type="text"
                            id="name"
                            placeholder="Ingrese nombre"
                            onChange={(e) => {
                                setName(e.target.value);
                                setNameError('');
                            }}
                        />
                        {nameError && <span className="errorStyle">{nameError}</span>}
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Dirección de Correo Electrónico</Form.Label>
                        <Form.Control
                            type="email"
                            id="email"
                            placeholder="Ingrese correo electrónico"
                            onChange={(e) => {
                                setEmail(e.target.value);
                                setEmailError('');
                            }}
                        />
                        {emailError && <span className="errorStyle">{emailError}</span>}
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Contraseña</Form.Label>
                        <div className="password-input-wrapper">
                            <Form.Control
                                type={showPassword ? 'text' : 'password'}
                                id="password"
                                placeholder="Ingrese contraseña"
                                onChange={(e) => {
                                    setPassword(e.target.value);
                                    setPasswordError('');
                                }}
                            />
                            <span
                                className={`password-toggle-icon ${showPassword ? 'visible' : ''}`}
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                <img src={eyeIcon} alt="Show/Hide Password" />
                            </span>
                        </div>
                        {passwordError && <span className="errorStyle">{passwordError}</span>}
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label>Confirmar Contraseña</Form.Label>
                        <div className="password-input-wrapper">
                            <Form.Control
                                type={showConfirmPassword ? 'text' : 'password'}
                                id="confirmPassword"
                                placeholder="Confirme contraseña"
                                onChange={(e) => {
                                    setConfirmPassword(e.target.value);
                                    setConfirmPasswordError('');
                                }}
                            />
                            <span
                                className={`password-toggle-icon ${showConfirmPassword ? 'visible' : ''}`}
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            >
                                <img src={eyeIcon} alt="Show/Hide Password" />
                            </span>
                        </div>
                        {confirmPasswordError && <span className="errorStyle">{confirmPasswordError}</span>}
                    </Form.Group>

                    <div className='text-center m-2'>
                        ¿Tienes una cuenta?{' '}
                        <Link to="/login"><strong>Entra aquí</strong></Link>
                    </div>
                    <div className='text-center p-2 m-2'>
                        <button type="submit" className="btn btn-primary">
                            Registrarse
                        </button>
                    </div>
                </Form>
            </Container>

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
