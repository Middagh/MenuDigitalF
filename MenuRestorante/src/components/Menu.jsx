import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import '../assets/menu.css';

const Menu = () => {
  const [dishes, setDishes] = useState([]);
  const [newDish, setNewDish] = useState({
    name: '',
    ingredients: '',
    price: '',
    image: null,
    category: '', 
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewDish({
      ...newDish,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file && file.size <= 5 * 1024 * 1024) {
      setNewDish({
        ...newDish,
        image: file,
      });
    } else {
      alert('La imagen debe ser menor o igual a 5 MB');
      e.target.value = null; // Limpiar el campo de entrada de archivos
    }
  };

  const handleCategoryChange = (e) => {
    setNewDish({
      ...newDish,
      category: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Enviar la imagen al servidor (aquí necesitarás lógica del lado del servidor)
    const formData = new FormData();
    formData.append('name', newDish.name);
    formData.append('ingredients', newDish.ingredients);
    formData.append('price', newDish.price);
    formData.append('image', newDish.image);
    formData.append('category', newDish.category);

    try {
      const response = await fetch('/api/menu', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        // Éxito,  manejar la respuesta según tus necesidades
        const result = await response.json();
        console.log(result);
      } else {
        // Manejar el error según  necesidades
        console.error('Error al enviar el plato al servidor');
      }
    } catch (error) {
      console.error('Error al procesar la solicitud:', error);
    }

    setDishes([...dishes, newDish]);
    setNewDish({
      name: '',
      ingredients: '',
      price: '',
      image: null,
      category: '',
    });
  };

  return (
    <Container className='containerFormMenu col-md-8 col-lg-6 mx-auto p-2 m-2'>
      <Form className='mb-3' onSubmit={handleSubmit}>
        <Form.Group controlId="name">
          <Form.Label>Plato:</Form.Label>
          <Form.Control
            type="text"
            name="name"
            pattern="[A-Za-z]+"
            minLength={3}
            maxLength={50}
            value={newDish.name}
            onChange={handleInputChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="ingredients">
          <Form.Label>Ingredientes:</Form.Label>
          <Form.Control
            as="textarea"
            name="ingredients"
            pattern="[A-Za-z]+"
            maxLength={500}
            value={newDish.ingredients}
            onChange={handleInputChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="price">
          <Form.Label>Precio:</Form.Label>
          <Form.Control
            type="number"
            name="price"
            minLength={3}
            maxLength={10}
            value={newDish.price}
            onChange={handleInputChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="category">
          <Form.Label>Categoría:</Form.Label>
          <Form.Control
            as="select"
            name="category"
            value={newDish.category}
            onChange={handleCategoryChange}
            required
          >
            <option value="">Seleccionar</option>
            <option value="Entrada">Entrada</option>
            <option value="Plato Principal">Plato Principal</option>
            <option value="Postre">Postre</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="image">
          <Form.Label>Imagen (max 5 MB):</Form.Label>
          <Form.Control
            type="file"
            name="image"
            accept="image/*"
            onChange={handleImageChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="m-2 p-2">
          Agregar al Menú
        </Button>
      </Form>

      <div>
        {dishes.map((dish, index) => (
          <div key={index}>
            <h3>{dish.name}</h3>
            <p>Ingredients: {dish.ingredients}</p>
            <p>Price: {dish.price}</p>
            <p>Category: {dish.category}</p>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Menu;
