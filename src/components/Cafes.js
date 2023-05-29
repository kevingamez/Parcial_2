import { getData } from "../utils/requests";
import './../css/table.css';
import { Card } from "react-bootstrap";

const { useState, useEffect } = require("react")



function Cafes() {
  const [cafes, setCafes] = useState([]);
  const [cafeInfoAdicional, setCafeInfoAdicional] = useState(undefined);



  function handleClickCafe(cafeSeleccionado) {
    getData(setCafeInfoAdicional, `cafes/${cafeSeleccionado.id}`);
  }
  useEffect(() => {
    getData(setCafes, "cafes/").then(() => {
    });
  }, [])

  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <table className="table">
            <thead>
              <tr>
                <th>#</th>
                <th>Nombre</th>
                <th>Tipo</th>
                <th>Región</th>
              </tr>
            </thead>
            <tbody>
              {cafes.map((cafe, index) => (
                <tr key={index} onClick={() => handleClickCafe(cafe)}>
                  <td>{cafe.id}</td>
                  <td>{cafe.nombre}</td>
                  <td>{cafe.tipo}</td>
                  <td>{cafe.region}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {cafeInfoAdicional && (
          <Card className="d-flex justify-content-center red-bg">
            <Card.Body className="mx-2">
              <Card.Title className="d-flex justify-content-center">
                {cafeInfoAdicional.nombre}
              </Card.Title>
              <Card.Subtitle className="d-flex justify-content-center">
                {cafeInfoAdicional.fecha_cultivo}
              </Card.Subtitle>
              <Card.Img className="p-5" src={cafeInfoAdicional.imagen} />
              <Card.Subtitle className="d-flex justify-content-center">
                Notas
              </Card.Subtitle>
              <Card.Text className="d-flex justify-content-center">
                {cafeInfoAdicional.notas}
              </Card.Text>
              <Card.Title className="d-flex justify-content-center">
              </Card.Title>
              <Card.Title className="d-flex justify-content-center">
                {cafeInfoAdicional.altura}
              </Card.Title>
            </Card.Body>
          </Card>
        )}

      </div>
    </div>
  );
};
export default Cafes;

