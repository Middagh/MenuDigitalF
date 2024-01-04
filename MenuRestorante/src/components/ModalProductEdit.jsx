import { Form, Modal, Button } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import pruebaApi from '../api/Api';

function ModalProductEdit({ onEditProduct, product }) {
  const [productEditSelect, setProductEditSelect] = useState({});
  const [showEdit, setShowEdit] = useState(false);

  useEffect(() => {
    // Actualiza el estado cuando cambia el producto
    setProductEditSelect(product);
  }, [product]);

  const handleChangeEdit = (propiedad, valor) => {
    setProductEditSelect({
      ...productEditSelect,
      [propiedad]: valor,
    });
  };

  const handleSubmitEdit = async (e) => {
    e.preventDefault();

    if (productEditSelect.name === '' || productEditSelect.price === '' || productEditSelect.description === '') {
      return console.log('Todos los campos son obligatorios');
    } else if (productEditSelect.price < 0) {
      return console.log('El precio debe ser mayor a 0');
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
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Precio</Form.Label>
              <Form.Control type="number" value={productEditSelect.price || 0} onChange={(e) => handleChangeEdit('price', e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Descripción</Form.Label>
              <Form.Control type="text" value={productEditSelect.description || ''} onChange={(e) => handleChangeEdit('description', e.target.value)} />
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
