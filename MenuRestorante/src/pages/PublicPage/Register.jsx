import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import '../../assets/register.css';

const Register = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
    } = useForm();

    const onSubmit = (data) => {
        // Aquí puedes manejar la lógica de registro, como enviar los datos al servidor
        console.log('Datos de registro:', data);
    };

    const password = watch('password', ''); // Obtén el valor del campo de contraseña

    return (
        <div>
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
                        <Button variant="primary" type="submit">
                            Registrarse
                        </Button>
                    </div>
                </Form>
            </Container>
        </div>
    );
};

export default Register;
