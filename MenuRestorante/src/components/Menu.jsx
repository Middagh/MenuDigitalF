// menu.jsx
import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';

const Menu = () => {
  const [dishes, setDishes] = useState([]);
  const [newDish, setNewDish] = useState({
    name: '',
    ingredients: '',
    price: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewDish({
      ...newDish,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setDishes([...dishes, newDish]);
    setNewDish({
      name: '',
      ingredients: '',
      price: ''
    });
  };

  return (
    <Container className='containerFormMenu col-md-8 col-lg-6 mx-auto p-2 m-2'>
    <Form className='mb-3' onSubmit={handleSubmit}>
        <Form.Group  controlId="name">
          <Form.Label>Dish Name:</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={newDish.name}
            onChange={handleInputChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="ingredients">
          <Form.Label>Ingredients:</Form.Label>
          <Form.Control
            as="textarea"
            name="ingredients"
            value={newDish.ingredients}
            onChange={handleInputChange}
            required
          />
        </Form.Group>

        <Form.Group controlId="price">
          <Form.Label>Price:</Form.Label>
          <Form.Control
            type="text"
            name="price"
            value={newDish.price}
            onChange={handleInputChange}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit" className="m-2 p-2">
          Add to Menu
        </Button>
      </Form>

      <div>
        {dishes.map((dish, index) => (
          <div key={index}>
            <h3>{dish.name}</h3>
            <p>Ingredients: {dish.ingredients}</p>
            <p>Price: {dish.price}</p>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Menu;
