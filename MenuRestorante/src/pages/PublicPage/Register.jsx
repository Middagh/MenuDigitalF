import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import '../../assets/register.css';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import pruebaApi from '../../api/Api'


const Register = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
    } = useForm();
    const [isLoading, setIsLoading] = useState(false);

    const onSubmit = async (data, e) => {
        data.rol = 'user';
        e.preventDefault();
        setIsLoading(true);

        try {
            const response = await pruebaApi.post('', data);

            if (response.status === 200) {
                console.log('Datos enviados al backend con éxito');
                // Puedes realizar otras acciones después de un registro exitoso
            } else {
                console.error('Error al enviar datos al backend:', response.statusText);
                // Puedes manejar el error de alguna manera (mostrar un mensaje al usuario, etc.)
            }
        } catch (error) {
            console.error('Error de red:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const password = watch('password', '');

    return (
        <div>
            <Helmet><title>Register - Los Hornos</title></Helmet>
            <Container className='containerFormRegister col-md-8 col-lg-6 mx-auto p-2 m-2'>
                <h2>Registro</h2>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group className="mb-3" controlId="formUsername">
                        <Form.Label>Nombre de Usuario</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Ingrese su nombre de usuario"
                            {...register('username', { required: 'Este campo es obligatorio' })}
                        />
                        <Form.Text className="text-danger">{errors.username && errors.username.message}</Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formEmail">
                        <Form.Label>Dirección de Correo Electrónico</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Ingrese su correo electrónico"
                            {...register('email', {
                                required: 'Este campo es obligatorio',
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                    message: 'Correo electrónico no válido',
                                },
                            })}
                        />
                        <Form.Text className="text-danger">{errors.email && errors.email.message}</Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formPassword">
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Ingrese su contraseña"
                            {...register('password', {
                                required: 'Este campo es obligatorio',
                                pattern: {
                                    value: /^(?=.*[A-Z])(?=.*\d).{8,}$/,
                                    message: 'La contraseña debe contener al menos una mayúscula y un número, y tener al menos 8 caracteres.',
                                },
                            })}
                        />
                        <Form.Text className="text-danger">{errors.password && errors.password.message}</Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formConfirmPassword">
                        <Form.Label>Confirmar Contraseña</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Confirme su contraseña"
                            {...register('confirmPassword', {
                                required: 'Este campo es obligatorio',
                                validate: (value) => value === password || 'Las contraseñas deben coincidir',
                            })}
                        />
                        <Form.Text className="text-danger">{errors.confirmPassword && errors.confirmPassword.message}</Form.Text>
                    </Form.Group>

                    <div className='text-center p-2 m-2'>
                        {isLoading ? (
                            <p>Enviando datos al backend...</p>
                        ) : (
                            <Button variant="primary" type="submit">
                                Registrarse
                            </Button>
                        )}
                    </div>
                    <div className='text-center m-2'>
                        ¿Tienes una cuenta?{' '}
                        <Link to="/login"><strong>Entra aquí</strong></Link>
                    </div>
                </Form>
            </Container>
        </div>
    );
};

export default Register;
