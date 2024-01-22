import { Form, Modal, Button } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import pruebaApi from '../api/Api';

function ModalProductEdit({ onEditProduct, product }) {
  const [productEditSelect, setProductEditSelect] = useState({});
  const [showEdit, setShowEdit] = useState(false);// abre y cierra el modal
  const [errors, setErrors] = useState({}); // Nuevo estado para los errores

  useEffect(() => {
    // Actualiza el estado cuando cambia el producto
    setProductEditSelect(product);
  }, [product]);

  const handleChangeEdit = (propiedad, valor) => {
    setProductEditSelect({
      ...productEditSelect,
      [propiedad]: valor,
    });

    // Reiniciar los errores cuando se cambia un campo
    setErrors({});
  };
  const handleSubmitEdit = async (e) => {
    e.preventDefault();

    // Objeto para almacenar mensajes de error por campo
    const newErrors = {};

    // Validaciones para el campo 'name'
    if (productEditSelect.name.length < 3 || productEditSelect.name.length > 20) {
      newErrors.name = 'El nombre debe tener entre 3 y 20 caracteres';
    }

    // Validaciones para el campo 'price'
    const priceAsNumber = parseFloat(productEditSelect.price);
    if (isNaN(priceAsNumber) || priceAsNumber < 0) {
      newErrors.price = 'El precio debe ser un número mayor o igual a 0';
    }

    // Validaciones para el campo 'description'
    if (productEditSelect.description.length < 3 || productEditSelect.description.length > 500) {
      newErrors.description = 'La descripción debe tener entre 3 y 500 caracteres';
    }

    // Actualizar estado de errores
    setErrors(newErrors);

    // Si hay errores, no realizar la edición del producto
    if (Object.keys(newErrors).length > 0) {
      return;
    }

    await editProductDB(productEditSelect);
    setShowEdit(false);
  };

  const handleShowEdit = () => {
    setShowEdit(true);
  };

  const editProductDB = async ({ name, price, description, _id }) => {
    try {
      const resp = await pruebaApi.put('/admin/edit', {
        name,
        price,
        description,
        _id,
      });

      onEditProduct(); // Llama a la función para editar el producto

      console.log(resp);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Button variant="warning m-2" onClick={handleShowEdit}>
        Editar
      </Button>

      <Modal show={showEdit} onHide={() => setShowEdit(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Editar un Producto</Modal.Title>
        </Modal.Header>

        <Form onSubmit={handleSubmitEdit}>
          <Modal.Body>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Nombre del producto</Form.Label>
              <Form.Control type="text" value={productEditSelect.name || ''} onChange={(e) => handleChangeEdit('name', e.target.value)} />
             {errors.name && <div className="error-message">{errors.name}</div>}
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Precio</Form.Label>
              <Form.Control type="number" value={productEditSelect.price || 0} onChange={(e) => handleChangeEdit('price', e.target.value)} />
              {errors.price && <div className="error-message">{errors.price}</div>}
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Descripción</Form.Label>
              <Form.Control type="text" value={productEditSelect.description || ''} onChange={(e) => handleChangeEdit('description', e.target.value)} />
              {errors.description && <div className="error-message">{errors.description}</div>}

            </Form.Group>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowEdit(false)}>
              Cerrar
            </Button>
            <Button type="submit" variant="primary">
              Guardar
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}

export default ModalProductEdit;
