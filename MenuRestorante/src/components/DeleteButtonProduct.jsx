import React from 'react';
import { Button } from 'react-bootstrap';
import pruebaApi from '../api/Api';

export const DeleteProduct = ({ productId, onDelete }) => {
  // Funcion para eliminar Productos
  const deleteProduct = async () => {
    try {
      await pruebaApi.delete(`/admin/delete/${productId}`);
      onDelete(); // Llama a la función de actualización en ProductTable después de eliminar
    } catch (error) {
      console.log('error', error);
    }
  };

  return (
    <Button onClick={deleteProduct} variant="danger">
      Eliminar
    </Button>
  );
};

