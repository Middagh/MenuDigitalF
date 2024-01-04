import React from 'react';
import { Button } from 'react-bootstrap';
import pruebaApi from '../api/Api';

export const DeleteUser = ({ userId, onDeleteUser }) => {
  // Funcion para eliminar usuarios
  const deleteUser = async () => {
    try {
      await pruebaApi.delete(`/admin/deleteuser/${userId}`);
      onDeleteUser(); // Llama a la función de actualización en UserTable después de eliminar
    } catch (error) {
      console.log('error', error);
    }
  };

  return (
    <Button onClick={deleteUser} variant="danger">
      Eliminar
    </Button>
  );
};
