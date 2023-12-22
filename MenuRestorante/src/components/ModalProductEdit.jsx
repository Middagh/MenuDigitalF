import { Form, Modal, Button } from 'react-bootstrap';
import React, { useState } from 'react';
import pruebaApi from '../api/Api';

function ModalProductEdit ({ onEditProduct }) {
  //funciones para cerrar y abrir el modal
  const [productEditSelect, setProductEditSelect] = useState({});
	const [showEdit, setShowEdit] = useState(false);

  const handleShowEdit = () => setShowEdit(true);

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

// Llama a la función para agregar un producto
onEditProduct();

    } catch (error) {
      console.log(error);
    }
  };


  // funcion para ejecutar el submit del form
  const handleSubmitEdit = (e) => {
    e.preventDefault();
    //validaciones del form
    if (name === '' || price === '' || description === '') {
      return console.log('todos los campos son obligatorios');
    } else if (price < 0) {
      return console.log('el precio debe ser mayor a 0');
    }

    //estan listos para enviar a la BS

    saveProductDB(name, price, description);
// Evita que la consola quede con informacion de hook
    setName('');
    setPrice('');
    setDescription('');
  };
  
//funcion para guardar los datos del producto a editar y abrir el modal

const editProduct = (product) => {
  setShowEdit(true);

  setProductEditSelect(product);
};

  
  return (
    <>

      <Button variant="warning m-2" onClick={handleShowEdit}>
        Editar 
      </Button>

      <Modal show={showEdit}>
        <Modal.Header closeButton>
          <Modal.Title> Editar un Producto</Modal.Title>
        </Modal.Header>

        <Form onSubmit={handleSubmitEdit}>

          <Modal.Body>

            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Nombre del producto</Form.Label>
              <Form.Control type="text" value={productEditSelect.name}/>
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Precio</Form.Label>
              <Form.Control type="number" value={productEditSelect.price} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>descripcion</Form.Label>
              <Form.Control type="text" value={productEditSelect.description} />
            </Form.Group>

          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowEdit(false)}>
              Cerrar
            </Button>
            <Button type="submit" variant="primary" onClick={() => setShowEdit(false)}>
              Guardar 
            </Button>
          </Modal.Footer>

        </Form>

      </Modal>
    </>
  );
}

export default ModalProductEdit;