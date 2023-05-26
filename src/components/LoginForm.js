import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Container, Row, Col, Card, Table } from 'react-bootstrap';


const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Aquí puedes realizar alguna acción con los datos del formulario, como enviarlos a un servidor o validarlos
    console.log('Nombre de usuario:', username);
    console.log('Contraseña:', password);
  };

  const handleCancel = () => {
    // Lógica para cancelar el ingreso, si es necesario
    setUsername('');
    setPassword('');
  };

  return (
    <Form onSubmit={handleSubmit}>


      <Form.Group controlId="formUsername">
        <Form.Label column sm={2}>Nombre de usuario</Form.Label>
        <Form.Control
          type="text"
          placeholder="Ingresa tu nombre de usuario"
          value={username}
          onChange={handleUsernameChange}
        />
      </Form.Group>

      <Form.Group controlId="formPassword">
        <Form.Label>Contraseña</Form.Label>
        <Form.Control
          type="password"
          placeholder="Ingresa tu contraseña"
          value={password}
          onChange={handlePasswordChange}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Ingresar
      </Button>

      <Button variant="secondary" onClick={handleCancel}>
        Cancelar
      </Button>
    </Form>
  );
};

export default LoginForm;
