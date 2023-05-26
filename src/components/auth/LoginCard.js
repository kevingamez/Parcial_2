import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import { useState } from "react";

function LoginCard({ submitHandler }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Card style={{ width: "18rem" }}>
      <Form>
        <Form.Group controlId="formBasicUsername">
          <Form.Label>Nombre de usuario</Form.Label>
          <Form.Control
            type="username"
            placeholder="Ingresa tu nombre de usuario"
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control
            type="password"
            placeholder="Contraseña"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" onClick={() => submitHandler(username, password)}>
          Iniciar sesión
        </Button>
      </Form>
    </Card>
  );
}

export default LoginCard;
