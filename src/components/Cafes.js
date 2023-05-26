import { getData } from "../utils/requests";
import './../css/table.css';

const { useState, useEffect } = require("react")



function Cafes() {
    const [cafes, setCafes] = useState([]);
    const [cafeSeleccionado, setCafeSeleccionado] = useState(null);
    const [cafeInfoAdicional, setCafeInfoAdicional] = useState(null);

    const handleClickCafe = (cafe) => {
      setCafeSeleccionado(cafe);
    };
    useEffect( () => {

        getData(setCafes, "cafes/").then(() => {
        });
            if (cafeSeleccionado) {
                getData(setCafeInfoAdicional, `cafes/${cafeSeleccionado.id}`).then(() => {
                   
            });
    }


    }, [cafeSeleccionado])

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
            <div className="col">
              {cafeSeleccionado && (
                <div>
                  <h2>{cafeInfoAdicional.nombre}</h2>
                  <p>{cafeInfoAdicional.fecha}</p>
                  <img src={cafeInfoAdicional.imagen} alt={cafeInfoAdicional.altura} />
                  <p>Notas: {cafeInfoAdicional.notas}</p>
                  <p>Tipo: {cafeInfoAdicional.tipo}</p>
                  <p>Región: {cafeInfoAdicional.region}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      );
    };
export default Cafes;

