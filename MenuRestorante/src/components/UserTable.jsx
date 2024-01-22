import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import pruebaApi from '../../src/api/Api';
import { DeleteUser } from './DeleteButtonUser';


export const UserTable = () => {

    const [uploadUser, setUploadUser] = useState([]);  // almacenamiento de los usuarios en front

    // trae a los usuarios del DB
    const bringUser = async () => {
        try {
            const resp = await pruebaApi.get("/admin/getuser") // ruta de la db

            setUploadUser(resp.data.user); // guarda los usuarios traidos del db a la consola en front
        } catch (error) {
            console.log(error)
        }
    };

    //carga los usuarios bien se ingresa a la page
    useEffect(() => {
        bringUser();
    }, []);
    // Función para actualizar la lista de productos después de eliminar
    const handleDeleteUser = () => {
        bringUser();
    };
    return (<Table striped bordered hover size="sm">
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Rol</th>
                <th>Status</th>
                <th>Delete</th>
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
                            <td>{user.rol}</td>
                            <td>{user.status}</td>

                            <td>
                                <DeleteUser userId={user._id} onDeleteUser={handleDeleteUser} /> {/* Button que elimina y actualiza pagina */}
                            </td>
                        </tr>

                    )
                })
            }
        </tbody>
    </Table>
    )
}