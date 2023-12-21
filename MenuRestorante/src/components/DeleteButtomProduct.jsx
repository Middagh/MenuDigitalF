import React from 'react';
import { Button } from 'react-bootstrap';

export const DeleteButton = () => {

    //Funcion para eliminar Productos
    const deleteProduct = async (id) => {
        try {
            const resp = await pruebaApi.delete(`/admin/delete/${id}`);

        } catch (error) {
            console.log('error')
        }
    };

    return (
        <Button onClick={() => deleteProduct(product._id)} variant="danger" >
            Eliminar
        </Button>)
}