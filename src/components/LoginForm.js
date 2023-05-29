import { useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";


function LoginForm() {
  const [authenticated, setAuthenticated] = useState(undefined);

  function getErrorMessage() {
    if (authenticated === false) {
      return (
        <p style={{ color: "red" }}>
          Error
        </p>
      );
    }
  }

  function handleLogin(e) {
    e.preventDefault();

    fetch("http://localhost:3001/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        login: e.target.username.value,
        password: e.target.password.value,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "error") {
          setAuthenticated(false);
        } else if (data.status === "success") {
          setAuthenticated(true);
          window.location.href = "/cafes";
        }
      });
  }

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "40vh", }}>
    <Container>
      <h3 className="text-center">Inicio de sesión</h3>
      <Card className="d-flex justify-content-center align-items-center red-bg">
        <Card.Body style={{ width: "100%" }}>
          <Form onSubmit={handleLogin} className="text-center">
            <Form.Group controlId="username">
              <Form.Label>Nombre de usuario</Form.Label>
              <Form.Control className="text-bg" type="text" />
            </Form.Group>
            <Form.Group controlId="password">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control className="text-bg" type="password" />
            </Form.Group>
        
            <Row >
              <Col md={6}>
                <Button
                  style={{ color: "black" , width:"20vh"}}
                  width="100vh"
                  backgroundColor="8da990"
                >
                  Ingresar
                </Button>
              </Col>
              <Col md={6}>
                <Button
                  variant="danger"
                  style={{ color: "black", width:"20vh"}}
                  type="reset"
                  width="100vh"
                  backgroundColor="8da990"
                >
                  Cancelar
                </Button>
              </Col>
            </Row>
     
            <div className="d-flex justify-content-center">
              {getErrorMessage()}
            </div>
          </Form>
        </Card.Body>
      </Card>
    </Container>
    </div>
  );
  
}

export default LoginForm;