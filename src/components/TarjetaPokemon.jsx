import { Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

import "./tarjetaPokemon.css";

const tarjetaPokemon = ({ pokemon }) => {
  const { name, stats, src, type } = pokemon;
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/pokemones`);
  };

  return (
    <>
      <section className="container">
        <Card
          style={{ width: "50rem" }}
          className="mt-5 mx-auto shadow-lg p-3 mb-5 "
        >
          <div id="tarjeta">
            <Card.Img id="cardImg" src={src} />
            <Card.Body id="cardBody">
              <Card.Title className="fw-bold text-center text-capitalize"> {name} </Card.Title>
              <span className="list-unstyled">
                <Card.Text className="fw-bold text-center text-capitalize">
                  {stats?.map((stats, i) => (
                    <li key={i}>
                      {" "}
                      {stats.name}: {stats.base}
                    </li>
                  ))}
                </Card.Text>
              </span>
              <Card.Text id="cardType" className="bg-warning text-white p-2 rounded fw-bold text-center text-capitalize mt-3">
                {type}
              </Card.Text>
            </Card.Body>
          </div>
        </Card>
        <div id="boton">
        <Button onClick={handleClick} variant="outline-warning">
          {" "}
          <strong>SELECCIONA OTRO POKEMÓN</strong>
        </Button>{" "}
        </div>
      </section>
    </>
  );
};

export default tarjetaPokemon;
