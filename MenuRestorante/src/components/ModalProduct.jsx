import { Form, Modal, Button } from 'react-bootstrap';
import React, { useState } from 'react';
import pruebaApi from '../../src/api/Api';

function ModalProduct() {
  //funciones para cerrar y abrir el modal
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //Const de la info a traer del bs
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');

  //funcion para enviar los datos del producto y guardarlo en la base de datos
  const saveProductDB = async (name, price, description) => {
    try {
      const resp = await pruebaApi.post('/admin/newproduct', {
        name,
        price,
        description,
      });

      //forma numero 1 haciendo la peticion al backend
      //cargarProduct();

    } catch (error) {
      console.log(error);
    }
  };


  // funcion para ejecutar el submit del form
  const handleSubmit = (e) => {
    e.preventDefault();
    //validaciones del form
    if (name === '' || price === '' || description === '') {
      return console.log('todos los campos son obligatorios');
    } else if (price < 0) {
      return console.log('el precio debe ser mayor a 0');
    }

    //estan listos para enviar a la BS

    saveProductDB(name, price, description);

    setName('');
    setPrice('');
    setDescription('');
  };

  return (
    <>

      <Button variant="primary m-2" onClick={handleShow}>
        Agregar producto
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> Agrega un Producto</Modal.Title>
        </Modal.Header>

        <Form onSubmit={handleSubmit}>

          <Modal.Body>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Nombre del producto</Form.Label>
              <Form.Control type="text" onChange={(e) => setName(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Precio</Form.Label>
              <Form.Control type="number" onChange={(e) => setPrice(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>descripcion</Form.Label>
              <Form.Control type="text" onChange={(e) => setDescription(e.target.value)} />
            </Form.Group>

          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cerrar
            </Button>
            <Button type="submit" variant="primary" onClick={handleClose}>
              Guardar cambios
            </Button>
          </Modal.Footer>

        </Form>

      </Modal>
    </>
  );
}

export default ModalProduct;