import React, { useState } from 'react';
import { Container, Row, Col, Card, Table } from 'react-bootstrap';
import Banner from './Banner';
import './../css/Home.css';
import LoginForm from './LoginForm';


const Home = () => {
  const [selectedCafe, setSelectedCafe] = useState(null);

  // Datos de ejemplo para los cafés
  const cafes = [
    { id: 1, nombre: 'Café 1', descripcion: 'Descripción del Café 1', imagen: 'cafe1.jpg' },
    { id: 2, nombre: 'Café 2', descripcion: 'Descripción del Café 2', imagen: 'cafe2.jpg' },
    // ...
  ];

  const handleCafeClick = (cafe) => {
    setSelectedCafe(cafe);
  };

  return (
    <Container>
      <Row>
        <h1 className="title">El aroma magico</h1>
      </Row>
      <Row>
          <Banner></Banner>
      </Row>
      <Row  justify-content-center>
        <LoginForm></LoginForm>
      </Row>
    </Container>
  );
};

export default Home;
